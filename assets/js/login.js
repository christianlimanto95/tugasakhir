$(function () {
    $(".form-input").on("keydown", function(e) {
        if (e.which == 13) {
            e.stopPropagation();
            $(".btn-login").click();
        }
    });

    $(".btn-login").on("click", function() {
        if (!$(this).hasClass("disabled")) {
            $(".error").html("");
            var valid = true;

            var email = $(".input-email").val().trim();
            var password = $(".input-password").val().trim();

            if (email == "") {
                valid = false;
                $(".error-email").html("harus diisi");
            }

            if (password == "") {
                valid = false;
                $(".error-password").html("harus diisi");
            }
            
            if (valid) {
                var thisButton = $(this);
                thisButton.addClass("disabled");
                showLoader();
                ajaxCall(login_url, {user_email: email, user_password: password}, function(json) {
                    var result = jQuery.parseJSON(json);
                    if (result.status == "success") {
                        window.location = dashboard_url;
                    } else {
                        hideLoader();
                        thisButton.removeClass("disabled");
                        showNotification("Email / Password Salah");
                    }
                });
            }
        }
    });
});