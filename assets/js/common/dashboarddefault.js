$(function() {
    $(".header-profile").on("click", function(e) {
        if ($(this).hasClass("show-profile-menu")) {
            $(this).removeClass("show-profile-menu");
        } else {
            $(this).addClass("show-profile-menu");
        }
        e.stopPropagation();
    });

    $(".profile-menu-container").on("click", function(e) {
        e.stopPropagation();
    });

    $(document).on("click", function() {
        $(".header-profile").removeClass("show-profile-menu");
    });
});

function ajaxCall(url, data, callback) {
	return $.ajax({
		url: url,
		data: data,
		type: 'POST',
		error: function(jqXHR, exception) {
			if (exception != "abort") {
				console.log(jqXHR + " : " + jqXHR.responseText);
			}
		},
		success: function(result) {
			callback(result);
		}
	});
}