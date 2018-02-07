var sheetCanvas, sheetContext, sheetTempCanvas, sheetTempContext;
var draggableComponent, draggableComponentId = "-1";
var isDraggingFromToolbar = false;
var mouseDown = false, mouseDrag = false;
var dotsHit = "";
var keyPressed = {
	"ctrl": false
};

$(function() {
	draggableComponent = $(".draggable-component");
	sheetCanvas = $(".sheet")[0];
	sheetContext = sheetCanvas.getContext("2d");
	Sheet.offset = $(".sheet").offset();

	sheetTempCanvas = $(".sheet-temp")[0];
	sheetTempContext = sheetTempCanvas.getContext("2d");
	SheetTemp.offset = $(sheetTempCanvas).offset();
	var sheetTempCanvasWidth = parseInt($(sheetTempCanvas).css("width"));
	var sheetTempCanvasHeight = parseInt($(sheetTempCanvas).css("height"));
	$(sheetTempCanvas).attr({
		width: sheetTempCanvasWidth,
		height: sheetTempCanvasHeight
	});
	SheetTemp.width = sheetTempCanvasWidth;
	SheetTemp.height = sheetTempCanvasHeight;
	SheetTemp.selisihOffset = {
		top: Sheet.offset.top - SheetTemp.offset.top,
		left: Sheet.offset.left - SheetTemp.offset.left
	};

	$(".sheet-container").on("scroll", function() {
		Sheet.offset = $(".sheet").offset();
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
});

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
			}
			
			SheetTemp.mousePosition = {
				x: e.pageX,
				y: e.pageY
			};
			var iLength = Sheet.active_components.length;
			for (var i = 0; i < iLength; i++) {
				SheetTemp.addComponent(Sheet.active_components[i]);
			}
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
	}
	
	Sheet.draw(sheetContext);
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
		SheetTemp.updateComponentsSize({x: e.pageX, y: e.pageY});
		SheetTemp.draw(sheetTempContext);
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
	} else {
		var coor = translateMouseCoorToComputedCoor(e);
		var component = Sheet.isHittingComponent(coor.x, coor.y);
		
		if (mouseDrag) {
			Sheet.updateActiveComponentsPosition(SheetTemp.components);
			console.log("A");
		} else {
			if (!keyPressed.ctrl) {
				Sheet.removeAllActiveComponents();
				if (component != null) {
					Sheet.setActiveComponent(component.temp_id);
				}
			}
		}

		SheetTemp.removeAllComponents();
		SheetTemp.draw(sheetTempContext);
		Sheet.draw(sheetContext);
	}
	mouseDown = false;
	mouseDrag = false;
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
		case 17:
			keyPressed.ctrl = true;
			break;
	}
}

function e_keyup_document(e) {
	switch (e.which) {
		case 17:
			keyPressed.ctrl = false;
			break;
	}
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