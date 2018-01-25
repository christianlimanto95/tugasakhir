var sheetCanvas, sheetContext, sheetTempCanvas, sheetTempContext;
var draggableComponent, draggableComponentId = "-1";
var isDraggingFromToolbar = false;
var mouseDown = false;

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

	$(".sheet-temp").on("mousedown", function(e) {
		var coor = translateMouseCoorToComputedCoor(e);
		var component = Sheet.isHittingComponent(coor.x, coor.y);
		if (component != null) {
			Sheet.removeAllActiveComponents();
			Sheet.setActiveComponent(component.temp_id);
			
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
			if (mouseDown && Sheet.active_components.length > 0) {
				SheetTemp.updateComponentsPosition({x: e.pageX, y: e.pageY});
				SheetTemp.draw(sheetTempContext);
			}
		}
	});

	$(document).on("mouseup", function(e) {
		if (isDraggingFromToolbar) {
			releaseDragging(e);
		} else {
			var coor = translateMouseCoorToComputedCoor(e);
			if (SheetTemp.components.length == 0) {
				var component = Sheet.isHittingComponent(coor.x, coor.y);
				if (component == null) {
					Sheet.removeAllActiveComponents();
				}
			} else {
				SheetTemp.removeAllComponents();
				SheetTemp.draw(sheetTempContext);
			}
			Sheet.draw(sheetContext);
		}
		mouseDown = false;
	});
});

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