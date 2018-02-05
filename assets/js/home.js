var sheetCanvas, sheetContext, sheetTempCanvas, sheetTempContext;
var draggableComponent, draggableComponentId = "-1";
var isDraggingFromToolbar = false;
var mouseDown = false, mouseDrag = false;
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

	$(document).on("mousedown", ".component-item", function(e) {
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
	});

	$(document).on("click", function(e) {
		if ($(e.target).closest(".component-edit, .component-edit-textarea").length == 0) {
			hideComponentEdit();
		}
	});

	$(".sheet-temp").on("dblclick", function(e) {
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
	});

	$(".sheet-temp").on("mousedown", function(e) {
		var coor = translateMouseCoorToComputedCoor(e);
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
		
		Sheet.draw(sheetContext);
		mouseDown = true;
	});

	$(document).on("mousemove", function(e) {
		if (isDraggingFromToolbar) {
			draggableComponent.css({
				"top": e.pageY + "px",
				"left": e.pageX + "px"
			});
		} else {
			if (Sheet.isHittingComponentOnMouseDown && Sheet.active_components.length > 0) {
				SheetTemp.updateComponentsPosition({x: e.pageX, y: e.pageY});
				SheetTemp.draw(sheetTempContext);
				mouseDrag = true;
			} else {
				mousemoveIsHoveringDots(e);
			}
		}
	});

	$(document).on("mouseup", function(e) {
		Sheet.isHittingComponentOnMouseDown = false;
		if (isDraggingFromToolbar) {
			releaseDragging(e);
		} else {
			var coor = translateMouseCoorToComputedCoor(e);
			var component = Sheet.isHittingComponent(coor.x, coor.y);
			
			if (mouseDrag) {
				Sheet.updateActiveComponentsPosition(SheetTemp.components);
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
	});

	$(document).on("keydown", function(e) {
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
	});

	$(document).on("keyup", function(e) {
		switch (e.which) {
			case 17:
				keyPressed.ctrl = false;
				break;
		}
	});
});

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
	var iLength = Sheet.active_components.length;
	var found = false;
	for (var i = 0; i < iLength; i++) {
		var component = Sheet.active_components[i];

		var left = component.computed_position.left;
		var center = left + component.computed_size.width / 2;
		var right = component.computed_position.right;
		var top = component.computed_position.top;
		var middle = top + component.computed_size.height / 2;
		var bottom = component.computed_position.bottom;

		if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "top-left");
			found = true;
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "top-center");
			found = true;
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= top - 5 && coor.y <= top + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "top-right");
			found = true;
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "middle-left");
			found = true;
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= middle - 5 && coor.y <= middle + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "middle-right");
			found = true;
			break;
		} else if (coor.x >= left - 5 && coor.x <= left + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "bottom-left");
			found = true;
			break;
		} else if (coor.x >= center - 5 && coor.x <= center + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "bottom-center");
			found = true;
			break;
		} else if (coor.x >= right - 5 && coor.x <= right + 5 && coor.y >= bottom - 5 && coor.y <= bottom + 5) {
			$(sheetTempCanvas).attr("cursor-resize", "bottom-right");
			found = true;
			break;
		}
	}

	if (!found) {
		$(sheetTempCanvas).attr("cursor-resize", "");
	}
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