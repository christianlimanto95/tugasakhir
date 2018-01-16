var draggableComponent;
var isDragging = false;

$(function() {
	draggableComponent = $(".draggable-component");

	$(document).on("mousedown", ".component-item", function(e) {
		var width = $(this).data("width");
		var height = $(this).data("height");
		var image = $(this).find(".component-item-image").css("background-image").slice(4, -1).replace(/["|']/g, "");

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
}