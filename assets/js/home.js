var sheetCanvas, sheetContext;
var draggableComponent, draggableComponentId = "-1";
var isDragging = false;

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
		isDragging = true;
	});

	$(document).on("mousemove", function(e) {
		if (isDragging) {
			draggableComponent.css({
				"top": e.pageY + "px",
				"left": e.pageX + "px"
			});
		}
	});

	$(document).on("mouseup", function(e) {
		releaseDragging(e);
	});
});

function releaseDragging(e) {
	draggableComponent.removeClass("dragging");
	isDragging = false;

	var component = ALL_COMPONENTS.getComponentById(draggableComponentId);
	var x = e.pageX - Sheet.offset.left;
	var y = e.pageY - Sheet.offset.top;
	component.setPosition(x, y);
	Sheet.addComponent(component);
	Sheet.draw(sheetContext);

	draggableComponentId = "-1";
}