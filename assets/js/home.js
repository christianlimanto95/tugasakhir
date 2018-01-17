var sheetCanvas, sheetContext;
var draggableComponent, draggableComponentId = "-1";
var isDraggingFromToolbar = false;
var mouseDown = false;

$(function() {
	draggableComponent = $(".draggable-component");
	sheetCanvas = $(".sheet")[0];
	sheetContext = sheetCanvas.getContext("2d");
	Sheet.offset = $(".sheet").offset();

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

	$(document).on("mousemove", function(e) {
		if (isDraggingFromToolbar) {
			draggableComponent.css({
				"top": e.pageY + "px",
				"left": e.pageX + "px"
			});
		} else {
			if (mouseDown && Sheet.active_components.length > 0) {

			}
		}
	});

	$(document).on("mouseup", function(e) {
		if (isDraggingFromToolbar) {
			releaseDragging(e);
		} else {
			var coor = translateMouseCoorToComputedCoor(e);
			var component = Sheet.isHittingComponent(coor.x, coor.y);
			if (component == null) {
				Sheet.removeAllActiveComponents();
			}
			Sheet.draw(sheetContext);
			}
		mouseDown = false;
	});

	$(".sheet").on("mousedown", function(e) {
		var coor = translateMouseCoorToComputedCoor(e);
		var component = Sheet.isHittingComponent(coor.x, coor.y);
		if (component != null) {
			Sheet.removeAllActiveComponents();
			Sheet.setActiveComponent(component.temp_id);
		}
		
		Sheet.draw(sheetContext);
		mouseDown = true;
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