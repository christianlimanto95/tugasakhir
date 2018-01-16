var sheetCanvas, sheetContext;
var draggableComponent;
var isDragging = false;

$(function() {
	draggableComponent = $(".draggable-component");
	sheetCanvas = $(".sheet")[0];
	sheetContext = sheetCanvas.getContext("2d");

	$(document).on("mousedown", ".component-item", function(e) {
		var componentId = $(this).data("id");
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

	$(document).on("mouseup", function() {
		releaseDragging();
	});
});

function releaseDragging() {
	draggableComponent.removeClass("dragging");
	isDragging = false;
	
	ALL_COMPONENTS.getComponentById("1").draw(sheetContext);
}