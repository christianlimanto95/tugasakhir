var sheetCanvas, sheetContext, sheetTempCanvas, sheetTempContext;
var draggableComponent, draggableComponentId = "-1";
var isDraggingFromToolbar = false;
var mouseDown = false, mouseDrag = false, mouseResize = false;
var dotsHit = "";
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
	
	initialize();

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
	$(document).on("keydown", e_keydown_document);
	$(document).on("keyup", e_keyup_document);

	$(window).on("resize", function() {
		initialize();
	});

	$(".form-input-font-family").on("change", function() {
		var value = $(this).val();
		var iLength = Sheet.active_components.length;
		for (var i = 0; i < iLength; i++) {
			Sheet.active_components[i].change_font_family(value);
		}
		Sheet.draw(sheetContext);
	});

	$(".form-input-font-size").on("input", function() {
		var value = $(this).val();
		var iLength = Sheet.active_components.length;
		for (var i = 0; i < iLength; i++) {
			Sheet.active_components[i].change_font_size(value);
		}
		Sheet.draw(sheetContext);
	});
});

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
	var coor = translateMouseCoorToComputedCoor(e);
	dotsHit = isHittingDots(coor);
	if (dotsHit == "") {
		var component = Sheet.isHittingComponent(coor.x, coor.y);
		if (component != null) {
			Sheet.isHittingComponentOnMouseDown = true;
			if (!Sheet.isActiveComponent(component)) {
				if (!keyPressed.ctrl) {
					Sheet.removeAllActiveComponents();
				}
				Sheet.setActiveComponent(component.temp_id);
				showTextSection();
			}
			
			SheetTemp.mousePosition = {
				x: e.pageX,
				y: e.pageY
			};
			var iLength = Sheet.active_components.length;
			for (var i = 0; i < iLength; i++) {
				SheetTemp.addComponent(Sheet.active_components[i]);
			}

			SheetTemp.draw(sheetTempContext);
			Sheet.drawWithoutActiveComponent(sheetContext);
		}
	} else {
		SheetTemp.mousePosition = {
			x: e.pageX,
			y: e.pageY
		};
		SheetTemp.dotsHit = dotsHit;
		var iLength = Sheet.active_components.length;
		for (var i = 0; i < iLength; i++) {
			SheetTemp.addComponent(Sheet.active_components[i]);
		}

		SheetTemp.draw(sheetTempContext);
		Sheet.drawWithoutActiveComponent(sheetContext);
	}
	
	mouseDown = true;
}

function e_mousemove_document(e) {
	if (isDraggingFromToolbar) {
		draggableComponent.css({
			"top": e.pageY + "px",
			"left": e.pageX + "px"
		});
	}
	else if (dotsHit != "") {
		SheetTemp.updateComponentsSize({x: e.pageX, y: e.pageY}, keyPressed.shift);
		SheetTemp.draw(sheetTempContext);
		mouseResize = true;
	} else {
		if (Sheet.isHittingComponentOnMouseDown && Sheet.active_components.length > 0) {
			SheetTemp.updateComponentsPosition({x: e.pageX, y: e.pageY});
			SheetTemp.draw(sheetTempContext);
			mouseDrag = true;
		} else {
			mousemoveIsHoveringDots(e);
		}
	}
}

function e_mouseup_document(e) {
	Sheet.isHittingComponentOnMouseDown = false;
	if (isDraggingFromToolbar) {
		releaseDragging(e);
	} else if ($(e.target).closest(".sheet-temp").length == 1) {
		var coor = translateMouseCoorToComputedCoor(e);
		var component = Sheet.isHittingComponent(coor.x, coor.y);
		
		if (mouseDrag) {
			Sheet.updateActiveComponentsPosition(SheetTemp.components);
		} else if (mouseResize) {
			Sheet.updateActiveComponentsSize(SheetTemp.components);
		} else {
			if (!keyPressed.ctrl) {
				Sheet.removeAllActiveComponents();
				if (component != null) {
					Sheet.setActiveComponent(component.temp_id);
				} else {
					hideTextSection();
				}
			}
		}

		SheetTemp.removeAllComponents();
		SheetTemp.draw(sheetTempContext);
		Sheet.draw(sheetContext);
	}
	
	mouseDown = false;
	mouseDrag = false;
	mouseResize = false;
	dotsHit = "";
}

function e_keydown_document(e) {
	switch (e.which) {
		case 46:
			if (Sheet.active_components.length > 0) {
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

function showTextSection() {
	if (Sheet.active_components.length == 1) {
		$(".right-pane-section-text").removeClass("hide");
		var active_component = Sheet.active_components[0];
		if (active_component.has_text) {
			$(".form-item-value").removeClass("hide");
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

		$(".form-input-font-family").val(active_component.font_family);
		$(".form-input-font-size").val(active_component.font_size);
	}
}

function hideTextSection() {
	$(".right-pane-section-text").addClass("hide");
}

function hideComponentEdit() {
	var editText = $(".component-edit.show, .component-edit-textarea.show");
	if (editText.length > 0) {
		var value = editText.val();
		var temp_id = editText.attr("data-temp-id");
		editText.removeClass("show");
		editText.removeAttr("data-temp-id");
		Sheet.updateComponentTextByTempId(temp_id, value);
		Sheet.draw(sheetContext);
		showTextSection();
	}
}

function mousemoveIsHoveringDots(e) {
	var coor = translateMouseCoorToComputedCoor(e);
	var found = isHittingDots(coor);
	$(sheetTempCanvas).attr("cursor-resize", found);
}

function isHittingDots(coor) {
	var iLength = Sheet.active_components.length;
	var found = "";
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
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
			found = "top-center";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
			found = "top-right";
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
			found = "middle-left";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
			found = "middle-right";
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
			found = "bottom-left";
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
			found = "bottom-center";
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
			found = "bottom-right";
			break;
		}
	}

	return found;
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
	showTextSection();
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