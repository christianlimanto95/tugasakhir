var sheetCanvas, sheetContext, sheetTempCanvas, sheetTempContext;
var contextMenuContainer, header;
var draggableComponent, draggableComponentId = "-1";
var isDraggingFromToolbar = false;
var mouseDown = false, mouseDrag = false, mouseResize = false;
var dotsHit = {value: "", type: ""};
var keyPressed = {
	"ctrl": false,
	"shift": false
};

$(function() {
	draggableComponent = $(".draggable-component");
	sheetCanvas = $(".sheet-canvas")[0];
	sheetContext = sheetCanvas.getContext("2d");
	sheetTempCanvas = $(".sheet-temp")[0];
    sheetTempContext = sheetTempCanvas.getContext("2d");
    contextMenuContainer = $(".contextmenu-container");
    header = $(".header");

    $(".profile-container").on("click", function(e) {
        if ($(this).hasClass("show-profile-menu")) {
            $(this).removeClass("show-profile-menu");
        } else {
            $(this).addClass("show-profile-menu");
        }
        e.stopPropagation();
    });

    $(".profile-menu-container, .login-container").on("click", function(e) {
        e.stopPropagation();
    });

    $(".header-login").on("click", function(e) {
        if ($(".login-container").hasClass("show")) {
            $(".login-container").removeClass("show");
        } else {
            $(".login-container").addClass("show");
            $(".input-email-login").select();
        }
        e.stopPropagation();
    });

    $(document).on("click", function() {
        $(".profile-container").removeClass("show-profile-menu");
        $(".login-container").removeClass("show");
    });

    $(".btn-login").on("click", function() {
        if (!$(this).hasClass("disabled")) {
            var valid = true;
            var email = $(".input-email-login").val();
            var pass = $(".input-password-login").val();

            if (email == "") {
                valid = false;
            }

            if (pass == "") {
                valid = false;
            }

            if (valid) {
                var thisButton = $(this);
                thisButton.addClass("disabled");
                showLoader();
                ajaxCall(do_login_url, {user_email: email, user_password: pass}, function(json) {
                    var result = jQuery.parseJSON(json);
                    if (result.status == "success") {
                        document.location.reload();
                    } else {
                        hideLoader();
                        thisButton.removeClass("disabled");
                    }
                });
            }
        }
    });
	
    initialize();
    load();

	$(".sheet-container").on("scroll", function() {
		Sheet.offset = $(".sheet-canvas").offset();
	});

	$(document).on("mousedown", ".component-item", e_mousedown_componentItem);
	$(document).on("click", e_click_document);
	$(".sheet-temp").on("dblclick", e_dblclick_sheetTemp);
	$(".component-edit").on("keydown", e_keydown_componentEdit);
	$(".component-edit-textarea").on("keydown", e_keydown_componentEditTextarea);
	$(".sheet-temp").on("mousedown", e_mousedown_sheetTemp);
	$(document).on("mousemove", e_mousemove_document);
    $(document).on("mouseup", e_mouseup_document);
    $(".sheet-temp").on("contextmenu", e_contextmenu_sheetTemp);
	$(document).on("keydown", e_keydown_document);
    $(document).on("keyup", e_keyup_document);

    Sheet.onActiveComponentChanged = function() {
        var activeComponentsLength = Sheet.active_components.length;
        var activeGroupsLength = Sheet.active_groups.length;
        if (activeComponentsLength > 0 || activeGroupsLength > 0) {
            header.find(".header-item[data-header-item-name='delete']").removeClass("disabled");
        } else {
            header.find(".header-item[data-header-item-name='delete']").addClass("disabled");
        }

        if (activeComponentsLength == 1 && activeGroupsLength == 0) {
            showTextSection();
        } else {
            hideTextSection();
        }
    };

    Sheet.onPropertyChanged = function() {
        if (Sheet.active_components.length == 1 && Sheet.active_groups.length == 0) {
            showTextSection();
        }
    };
    
    History.onStackValueChanged = function() {
        if (History.pointer >= 0) {
            header.find(".header-item[data-header-item-name='undo']").removeClass("disabled");
            contextMenuContainer.find(".contextmenu[data-contextmenu='undo']").removeClass("disabled");
            if (History.pointer < History.stack.length - 1) {
                header.find(".header-item[data-header-item-name='redo']").removeClass("disabled");
                contextMenuContainer.find(".contextmenu[data-contextmenu='redo']").removeClass("disabled");
            } else {
                header.find(".header-item[data-header-item-name='redo']").addClass("disabled");
                contextMenuContainer.find(".contextmenu[data-contextmenu='redo']").addClass("disabled");
            }
        } else {
            header.find(".header-item[data-header-item-name='undo']").addClass("disabled");
            contextMenuContainer.find(".contextmenu[data-contextmenu='undo']").addClass("disabled");
            if (History.stack.length == 0) {
                header.find(".header-item[data-header-item-name='redo']").addClass("disabled");
                contextMenuContainer.find(".contextmenu[data-contextmenu='redo']").addClass("disabled");
            } else {
                header.find(".header-item[data-header-item-name='redo']").removeClass("disabled");
                contextMenuContainer.find(".contextmenu[data-contextmenu='redo']").removeClass("disabled");
            }
        }
        header.find(".header-item[data-header-item-name='save']").removeClass("disabled");
    };

	$(window).on("resize", function() {
		initialize();
    });

    $(".header-item").on("click", function() {
        if (!$(this).hasClass("disabled")) {
            var menu = $(this).attr("data-header-item-name");
            menuClick(menu);
        }
    });
    
    $(".contextmenu").on("click", function() {
        if (!$(this).hasClass("disabled")) {
            var contextmenu = $(this).attr("data-contextmenu");
            menuClick(contextmenu);
            contextMenuContainer.removeClass("show");
        }
    });

	$(".form-input-text, .form-input-textarea").on("blur", function() {
		var value = $(this).val();
		var iLength = Sheet.active_components.length;
		for (var i = 0; i < iLength; i++) {
            Sheet.updateComponentTextByTempId(Sheet.active_components[i].temp_id, value, sheetContext);
        }
	});

	$(".form-input-text").on("keypress", function(e) {
		if (e.which == 13) {
			$(this).blur();
			e.preventDefault();
		}
	});

	$(".form-input-font-family").on("change", function() {
		var value = $(this).val();
		var iLength = Sheet.active_components.length;
		for (var i = 0; i < iLength; i++) {
			Sheet.updateComponentFontFamilyByTempId(Sheet.active_components[i].temp_id, value, sheetContext);
		}
	});

	$(".form-input-font-size").on("input", function() {
		var value = $(this).val();
		var iLength = Sheet.active_components.length;
		for (var i = 0; i < iLength; i++) {
			Sheet.updateComponentFontSizeByTempId(Sheet.active_components[i].temp_id, value, sheetContext);
		}
    });
    
    $(".sheet-temp").on("contextmenu", function(e) {
        
    });
});

function load() {
    var load_result = $(".load-result").attr("data-value");
    if (load_result != "") {
        load_result = jQuery.parseJSON(load_result);
        var components = load_result.components;
        var groups = load_result.groups;
        var temp_id = load_result.temp_id;

        var iLength = components.length;
        for (var i = 0; i < iLength; i++) {
            var component = ALL_COMPONENTS.getComponentById(components[i].id);
            component.real_size = clone(components[i].real_size);
            component.real_position = clone(components[i].real_position);
            component.convertRealSizeToComputedSize();
            component.convertRealPositionToComputedPosition();
            component.temp_id = components[i].temp_id;
            component.real_corner_radius = components[i].real_corner_radius;
            component.font_color = components[i].font_color;
            component.font_family = components[i].font_family;
            component.font_size = components[i].font_size;
            component.name = components[i].name;
            component.rotation = components[i].rotation;
            Sheet.components.push(component);
        }

        iLength = groups.length;
        for (var i = 0; i < iLength; i++) {
            var group = Object.create(Group);
            group.name = groups[i].name;
            group.temp_id = groups[i].temp_id;
            group.real_size = clone(groups[i].real_size);
            group.real_position = clone(groups[i].real_position);
            group.convertRealPositionToComputedPosition();
            group.convertRealSizeToComputedSize();
            var group_components = [];
            var jLength = groups[i].components.length;
            for (var j = 0; j < jLength; j++) {
                var component = Sheet.getComponentByTempId(groups[i].components[j].temp_id);
                group_components.push(component);
            }
            group.components = group_components;
            Sheet.groups.push(group);
        }

        Sheet.temp_id = temp_id;
        Sheet.draw(sheetContext);
    }
}

function initialize() {
	Sheet.offset = $(".sheet-canvas").offset();
	SheetTemp.offset = $(sheetTempCanvas).offset();

	var sheetCanvasWidth = parseInt($(sheetCanvas).css("width"));
	var sheetCanvasHeight = parseInt($(sheetCanvas).css("height"));

	$(sheetCanvas).attr({
		width: sheetCanvasWidth,
		height: sheetCanvasHeight
	});
	$(sheetTempCanvas).attr({
		width: sheetCanvasWidth,
		height: sheetCanvasHeight
	});
	Sheet.width = sheetCanvasWidth;
	Sheet.height = sheetCanvasHeight;
	SheetTemp.width = sheetCanvasWidth;
	SheetTemp.height = sheetCanvasHeight;

	var offset = $(".sheet").offset();
	Sheet.selisihOffset = {
		top: offset.top - Sheet.offset.top,
		left: offset.left - Sheet.offset.left
	};
	SheetTemp.selisihOffset = {
		top: offset.top - SheetTemp.offset.top,
		left: offset.left - SheetTemp.offset.left
	};

	Sheet.draw(sheetContext);
}

function save() {
    if (!$(".header-item[data-header-item-name='save']").hasClass("disabled")) {
        $(".header-item[data-header-item-name='save']").addClass("disabled");
        showLoader();
        var progress_history = [];
        var iLength = History.saveStack.length;
        for (var i = 0; i < iLength; i++) {
            var item = History.saveStack[i];
            switch (item.type) {
                case "add_component":
                    var history_item_components = [];
                    var jLength = item.components.length;
                    for (var j = 0; j < jLength; j++) {
                        var item_component = item.components[j].component;
                        history_item_components.push({
                            id: item_component.id,
                            name: item_component.name
                        });
                    }

                    progress_history.push({
                        type: item.type,
                        components: history_item_components
                    });
                    break;
                case "move_component_or_group":
                    var history_item_components = [];
                    var jLength = item.components.length;
                    for (var j = 0; j < jLength; j++) {
                        var component = item.components[j];
                        history_item_components.push({
                            id: component.id,
                            name: component.name,
                            old_real_position: clone(component.old_real_position),
                            real_position: clone(component.real_position)
                        });
                    }

                    var history_item_groups = [];
                    jLength = item.groups.length;
                    for (var j = 0; j < jLength; j++) {
                        var group = item.groups[j];
                        history_item_groups.push({
                            name: group.name,
                            old_real_position: clone(group.old_real_position),
                            real_position: clone(group.real_position)
                        });
                    }

                    progress_history.push({
                        type: item.type,
                        components: history_item_components,
                        groups: history_item_groups
                    });

                    break;
                case "resize_component_or_group":
                    var history_item_components = [];
                    var jLength = item.components.length;
                    for (var j = 0; j < jLength; j++) {
                        var component = item.components[j];
                        history_item_components.push({
                            id: component.id,
                            name: component.name,
                            old_real_position: clone(component.old_real_position),
                            real_position: clone(component.real_position),
                            old_real_size: clone(component.old_real_size),
                            real_size: clone(component.real_size)
                        });
                    }

                    var history_item_groups = [];
                    jLength = item.groups.length;
                    for (var j = 0; j < jLength; j++) {
                        var group = item.groups[j];
                        history_item_groups.push({
                            name: group.name,
                            old_real_position: clone(group.old_real_position),
                            real_position: clone(group.real_position),
                            old_real_size: clone(group.old_real_size),
                            real_size: clone(group.real_size)
                        });
                    }

                    progress_history.push({
                        type: item.type,
                        components: history_item_components,
                        groups: history_item_groups
                    });

                    break;
                case "delete_component_or_group":
                    var history_item_components = [];
                    var jLength = item.components.length;
                    for (var j = 0; j < jLength; j++) {
                        var item_component = item.components[j].component;
                        history_item_components.push({
                            id: item_component.id,
                            name: item_component.name
                        });
                    }

                    var history_item_groups = [];
                    jLength = item.groups.length;
                    for (var j = 0; j < jLength; j++) {
                        var group = item.groups[j].group;
                        history_item_groups.push({
                            name: group.name
                        });
                    }

                    progress_history.push({
                        type: item.type,
                        components: history_item_components,
                        groups: history_item_groups
                    });

                    break;
                case "create_group":
                    progress_history.push({
                        type: item.type,
                        group: {
                            name: item.new_group.name
                        }
                    });
                    break;
                case "ungroup":
                    progress_history.push({
                        type: item.type,
                        group: {
                            name: item.old_group.name
                        }
                    });
                    break;
            }
        }

        var current_components = [];
        iLength = Sheet.components.length;
        for (var i = 0; i < iLength; i++) {
            var component = Sheet.components[i];
            current_components.push({
                id: component.id,
                temp_id: component.temp_id,
                real_corner_radius: component.real_corner_radius,
                font_color: component.font_color,
                font_family: component.font_family,
                font_size: component.font_size,
                font_spacing: component.font_spacing,
                name: component.name,
                real_position: component.real_position,
                real_size: component.real_size,
                rotation: component.rotation
            });
        }

        var current_groups = [];
        iLength = Sheet.groups.length;
        for (var i = 0; i < iLength; i++) {
            var group = Sheet.groups[i];
            var group_components = [];
            var jLength = group.components.length;
            for (var j = 0; j < jLength; j++) {
                group_components.push({
                    temp_id: group.components[j].temp_id
                });
            }
            current_groups.push({
                name: group.name,
                temp_id: group.temp_id,
                real_size: group.real_size,
                real_position: group.real_position,
                components: group_components
            });
        }

        var progress_current = {
            components: current_components,
            groups: current_groups,
            temp_id: Sheet.temp_id
        };

        ajaxCall(save_url, {workspace_id: workspace_id, workspace_progress_history: JSON.stringify(progress_history), workspace_progress_current: JSON.stringify(progress_current)}, function(json) {
            var result = jQuery.parseJSON(json);
            hideLoader();
            if (result.status == "success") {
                showNotification("Saved");
                History.saveStack = [];
            } else {
                showNotification("Failed to save");
            }
        });
    }
}

function e_mousedown_componentItem(e) {
	var componentId = $(this).data("id");
	draggableComponentId = componentId;
	var component = ALL_COMPONENTS.getComponentById(componentId);
	
	var width = component.default_size.width;
	var height = component.default_size.height;
	var image = component.image;

	draggableComponent.css({
		"width": width + "px",
		"height": height + "px",
		"background-image": "url('" + image + "')",
		"top": e.pageY + "px",
		"left": e.pageX + "px"
	});
	draggableComponent.addClass("dragging");
	isDraggingFromToolbar = true;
}

function e_click_document(e) {
	if ($(e.target).closest(".component-edit, .component-edit-textarea").length == 0) {
		hideComponentEdit();
	}
}

function e_dblclick_sheetTemp(e) {
	var coor = translateMouseCoorToComputedCoor(e);
	var component = Sheet.isHittingComponent(coor.x, coor.y);
	if (component != null) {
		var textCoor = translateComputedCoorBack(component.computed_position.left, component.computed_position.top);
		$(".component-edit, .component-edit-textarea").removeClass("show");
		$(".component-edit, .component-edit-textarea").val("");
		var editText;
		if (component.multiline) {
			editText = $(".component-edit-textarea");
		} else {
			editText = $(".component-edit");
		}

		editText.attr("data-temp-id", component.temp_id);
		editText.css({
			left: textCoor.x + "px",
			top: textCoor.y + "px"
		});
		editText.val(component.text);
		editText.addClass("show");
		editText.focus();
	}
}

function e_keydown_componentEdit(e) {
	if (e.which == 13 || e.which == 27) {
		e.preventDefault();
		hideComponentEdit();
	}
}

function e_keydown_componentEditTextarea(e) {
	if (e.which == 27) {
		e.preventDefault();
		hideComponentEdit();
	}
}

function e_mousedown_sheetTemp(e) {
    if (e.which == 1) {
        var coor = translateMouseCoorToComputedCoor(e);
        dotsHit = isHittingDots(coor);
        if (dotsHit.value == "") {
            var component = Sheet.isHittingComponent(coor.x, coor.y);
            if (component != null) {
                Sheet.isHittingComponentOnMouseDown = true;
                if (!Sheet.isActiveComponent(component) && !Sheet.isInActiveGroup(component.temp_id)) {
                    if (!keyPressed.ctrl) {
                        Sheet.removeAllActiveComponents();
                    }
                    Sheet.setActiveComponent(component.temp_id);
                }
                
                SheetTemp.mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                var iLength = Sheet.active_components.length;
                for (var i = 0; i < iLength; i++) {
                    SheetTemp.addComponent(Sheet.active_components[i]);
                }

                iLength = Sheet.active_groups.length;
                for (var i = 0; i < iLength; i++) {
                    SheetTemp.addGroup(Sheet.active_groups[i]);
                }

                SheetTemp.draw(sheetTempContext);
                Sheet.drawWithoutActiveComponent(sheetContext);
            }
        } else {
            SheetTemp.mousePosition = {
                x: e.pageX,
                y: e.pageY
            };
            SheetTemp.dotsHit = dotsHit.value;
            var iLength = Sheet.active_components.length;
            for (var i = 0; i < iLength; i++) {
                SheetTemp.addComponent(Sheet.active_components[i]);
            }
            iLength = Sheet.active_groups.length;
            for (var i = 0; i < iLength; i++) {
                SheetTemp.addGroup(Sheet.active_groups[i]);
            }

            SheetTemp.draw(sheetTempContext);
            Sheet.drawWithoutActiveComponent(sheetContext);
        }
        
        mouseDown = true;
    }

    contextMenuContainer.removeClass("show");
}

function e_mousemove_document(e) {
	if (isDraggingFromToolbar) {
		draggableComponent.css({
			"top": e.pageY + "px",
			"left": e.pageX + "px"
		});
	} else {
        if (SheetTemp.mousePosition.x != e.pageX || SheetTemp.mousePosition.y != e.pageY) {
            if (dotsHit.value != "") {
                SheetTemp.updateComponentsSize({x: e.pageX, y: e.pageY}, keyPressed.shift);
                SheetTemp.draw(sheetTempContext);
                mouseResize = true;
            } else {
                if (Sheet.isHittingComponentOnMouseDown) {
                    SheetTemp.updateComponentsPosition({x: e.pageX, y: e.pageY});
                    SheetTemp.draw(sheetTempContext);
                    mouseDrag = true;
                } else {
                    mousemoveIsHoveringDots(e);
                }
            }
        }
	}
}

function e_mouseup_document(e) {
    if (e.which == 1) {
        if (isDraggingFromToolbar) {
            releaseDragging(e);
        } else if ($(e.target).closest(".sheet-temp").length == 1) {
            
            if (mouseDrag) {
                Sheet.updateActiveComponentsPosition(SheetTemp.components, SheetTemp.groups);
            } else if (mouseResize) {
                Sheet.updateActiveComponentsSize(SheetTemp.components, SheetTemp.groups);
            } else {
                if (!keyPressed.ctrl && !Sheet.isHittingComponentOnMouseDown) {
                    //var coor = translateMouseCoorToComputedCoor(e);
                    //var component = Sheet.isHittingComponent(coor.x, coor.y);
                    Sheet.removeAllActiveComponents();
                    //if (component != null) {
                        //Sheet.setActiveComponent(component.temp_id);
                    //}
                }
            }

            Sheet.isHittingComponentOnMouseDown = false;
            SheetTemp.removeAllComponents();
            SheetTemp.draw(sheetTempContext);
            Sheet.draw(sheetContext);
        }
        
        mouseDown = false;
        mouseDrag = false;
        mouseResize = false;
        dotsHit = {value: "", type: ""};
    }
}

function menuClick(menu) {
    switch (menu) {
        case "save":
            save();
            break;
        case "undo":
            History.do_undo(sheetContext);
            break;
        case "redo":
            History.do_redo(sheetContext);
            break;
        case "copy":

            break;
        case "delete":
            if (Sheet.active_components.length > 0 || Sheet.active_groups.length > 0) {
                Sheet.deleteComponentsFromActiveComponents();
                Sheet.draw(sheetContext);
            }
            break;
        case "group":
            Sheet.createGroupFromActiveComponents();
            Sheet.draw(sheetContext);
            break;
        case "ungroup":
            Sheet.ungroupActiveGroup();
            Sheet.draw(sheetContext);
            break;
    }
}

function e_contextmenu_sheetTemp(e) {
    e.preventDefault();
    
    var coor = translateMouseCoorToComputedCoor(e);
    var component = Sheet.isHittingComponent(coor.x, coor.y);
    if (component != null) {
        if (!Sheet.isActiveComponent(component) && !Sheet.isInActiveGroup(component.temp_id)) {
            Sheet.removeAllActiveComponents();
            Sheet.setActiveComponent(component.temp_id);
        }
        
        contextMenuContainer.find(".contextmenu[data-target='canvas']").addClass("hide");
        contextMenuContainer.find(".contextmenu[data-target='component']").removeClass("hide");

        var activeComponentsLength = Sheet.active_components.length;
        var activeGroupsLength = Sheet.active_groups.length;
        if (activeComponentsLength > 1 || activeGroupsLength > 0) {
            if ((activeComponentsLength > 0 && activeGroupsLength > 0) || activeComponentsLength > 1 || activeGroupsLength > 1) {
                contextMenuContainer.find(".contextmenu[data-contextmenu='ungroup']").addClass("disabled");
                contextMenuContainer.find(".contextmenu[data-contextmenu='group']").removeClass("disabled");
            } else {
                contextMenuContainer.find(".contextmenu[data-contextmenu='ungroup']").removeClass("disabled");
                contextMenuContainer.find(".contextmenu[data-contextmenu='group']").addClass("disabled");
            }

            contextMenuContainer.find(".contextmenu[data-type='single-selection']").addClass("hide");
            contextMenuContainer.find(".contextmenu[data-type='multiple-selection']").removeClass("hide");
        } else {
            contextMenuContainer.find(".contextmenu[data-type='single-selection']").removeClass("hide");
            contextMenuContainer.find(".contextmenu[data-type='multiple-selection']").addClass("hide");
        }

        Sheet.draw(sheetContext);
    } else {
        contextMenuContainer.find(".contextmenu[data-target='component']").addClass("hide");
        contextMenuContainer.find(".contextmenu[data-target='canvas']").removeClass("hide");
    }

    var top = e.pageY;
    var left = e.pageX;
    var height = parseInt(contextMenuContainer.css("height"));
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (top + height > windowHeight) {
        top = top - height;
    }

    contextMenuContainer.css({
        top: top,
        left: left
    });

    contextMenuContainer.addClass("show");
}

function e_keydown_document(e) {
	switch (e.which) {
		case 46:
			if (Sheet.active_components.length > 0 || Sheet.active_groups.length > 0) {
				Sheet.deleteComponentsFromActiveComponents();
				Sheet.draw(sheetContext);
			}
			break;
		case 16:
			keyPressed.shift = true;
			break;
		case 17:
			keyPressed.ctrl = true;
            break;
        case 90: // Ctrl + Z
            if (keyPressed.ctrl) {
                History.do_undo(sheetContext);
            }
            break;
        case 89: // Ctrl + Y
            if (keyPressed.ctrl) {
                History.do_redo(sheetContext);
            }
            break;
        case 83: // Ctrl + S
            if (keyPressed.ctrl) {
                e.preventDefault();
                e.stopPropagation();
                save();
            }
            break;
	}
}

function e_keyup_document(e) {
	switch (e.which) {
		case 16:
			keyPressed.shift = false;
			break;
		case 17:
			keyPressed.ctrl = false;
			break;
	}
}

function inputColorOnChange(jspicker) {
    var value = jspicker.toString();
    value = "#" + value;
    var element = jspicker.targetElement;

    switch ($(element).attr("data-type")) {
        case "text-color":
            var iLength = Sheet.active_components.length;
            for (var i = 0; i < iLength; i++) {
                Sheet.updateComponentFontColorByTempId(Sheet.active_components[i].temp_id, value, sheetContext);
            }
            break;
    }
}

function showTextSection() {
    $(".right-pane-section-text, .right-pane-section-border").removeClass("hide");
    var active_component = Sheet.active_components[0];
    if (active_component.has_text) {
        $(".form-item-value").removeClass("hide");
        $(".form-input-text-color")[0].jscolor.fromString(active_component.font_color);
        if (active_component.multiline) {
            $(".form-input-text").addClass("hide");
            $(".form-input-textarea").removeClass("hide");
            $(".form-input-textarea").val(active_component.text);
        } else {
            $(".form-input-textarea").addClass("hide");
            $(".form-input-text").removeClass("hide");
            $(".form-input-text").val(active_component.text);
        }
    } else {
        $(".form-item-value").addClass("hide");
    }

    $(".form-input-border-color").css("background-color", active_component.border_color);
    $(".form-input-border-width").val(active_component.border_width);
    $(".form-input-border-radius").val(active_component.border_radius);
    $(".form-input-border-opacity").val(active_component.border_opacity * 100);

    var custom_properties = active_component.custom_properties;
    var iLength = custom_properties.length;
    var element = "";
    for (var i = 0; i < iLength; i++) {
        element += "<div class='right-pane-section custom-properties'>";
        element += "<div class='right-pane-section-title'>" + custom_properties[i].group + "</div>";
        element += "<div class='right-pane-section-content'>";

        var jLength = custom_properties[i].item.length;
        for (var j = 0; j < jLength; j++) {
            element += "<div class='form-item'>";
            element += "<div class='form-label'>" + custom_properties[i].item[j].label + "</div>";
            switch (custom_properties[i].item[j].value_type) {
                case "color":
                    element += "<div class='form-input input-color' style='background-color: " + custom_properties[i].item[j].value + ";'></div>";
                    break;
                case "number":
                    element += "<input type='number' class='form-input' value='" + custom_properties[i].item[j].value + "' />";
                    break;
            }
            
            element += "</div>";
        }
        
        element += "</div>";
        element += "</div>";
    }
    if (iLength > 0) {
        $(".right-pane").append(element);
    }

    $(".form-input-font-family").val(active_component.font_family);
    $(".form-input-font-size").val(active_component.font_size);
}

function hideTextSection() {
    $(".right-pane-section-text, .right-pane-section-border").addClass("hide");
    $(".custom-properties").remove();
}

function hideComponentEdit() {
	var editText = $(".component-edit.show, .component-edit-textarea.show");
	if (editText.length > 0) {
		var value = editText.val();
		var temp_id = editText.attr("data-temp-id");
		editText.removeClass("show");
		editText.removeAttr("data-temp-id");
		Sheet.updateComponentTextByTempId(temp_id, value, sheetContext);
	}
}

function mousemoveIsHoveringDots(e) {
	var coor = translateMouseCoorToComputedCoor(e);
	var found = isHittingDots(coor);
	$(sheetTempCanvas).attr("cursor-resize", found.value);
}

function isHittingDots(coor) {
	var iLength = Sheet.active_components.length;
	var found = "", type = "";
	for (var i = 0; i < iLength; i++) {
		var component = Sheet.active_components[i];

		var left = component.computed_position.left;
		var center = left + component.computed_size.width / 2;
		var right = component.computed_position.right;
		var top = component.computed_position.top;
		var middle = top + component.computed_size.height / 2;
		var bottom = component.computed_position.bottom;

		if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
            found = "top-left";
            type = "component";
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
            found = "top-center";
            type = "component";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
            found = "top-right";
            type = "component";
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
            found = "middle-left";
            type = "component";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
            found = "middle-right";
            type = "component";
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
            found = "bottom-left";
            type = "component";
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
            found = "bottom-center";
            type = "component";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
            found = "bottom-right";
            type = "component";
			break;
		}
    }
    
    iLength = Sheet.active_groups.length;
    for (var i = 0; i < iLength; i++) {
		var group = Sheet.active_groups[i];

		var left = group.computed_position.left;
		var center = left + group.computed_size.width / 2;
		var right = group.computed_position.right;
		var top = group.computed_position.top;
		var middle = top + group.computed_size.height / 2;
		var bottom = group.computed_position.bottom;

		if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
            found = "top-left";
            type = "group";
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
            found = "top-center";
            type = "group";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
            found = "top-right";
            type = "group";
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
            found = "middle-left";
            type = "group";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
            found = "middle-right";
            type = "group";
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
            found = "bottom-left";
            type = "group";
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
            found = "bottom-center";
            type = "group";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
            found = "bottom-right";
            type = "group";
			break;
		}
    }

    return {
        value: found,
        type: type
    };
}

function releaseDragging(e) {
	draggableComponent.removeClass("dragging");
	isDraggingFromToolbar = false;

	var component = ALL_COMPONENTS.getComponentById(draggableComponentId);
	var computedPosition = translateMouseCoorToComputedCoor(e);
	component.setPosition(computedPosition.x, computedPosition.y);
	Sheet.addComponent(component);
	Sheet.draw(sheetContext);

	draggableComponentId = "-1";
}

function translateMouseCoorToComputedCoor(e) {
	var x = e.pageX - Sheet.offset.left;
	var y = e.pageY - Sheet.offset.top;
	return {
		x: x,
		y: y
	};
}

function translateComputedCoorBack(currentX, currentY) {
	var x = currentX + Sheet.offset.left;
	var y = currentY + Sheet.offset.top;
	return {
		x: x,
		y: y
	};
}