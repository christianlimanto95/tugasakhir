$(function () {
    $(".btn-register").on("click", function() {
        if (!$(this).hasClass("disabled")) {
            $(".error").html("");
            var valid = true;

            var name = $(".input-name").val().trim();
            var email = $(".input-email").val().trim();
            var password = $(".input-password").val().trim();
            var confirm = $(".input-confirm-password").val().trim();

            if (name == "") {
                valid = false;
                $(".error-name").html("harus diisi");
            }

            if (email == "") {
                valid = false;
                $(".error-email").html("harus diisi");
            }

            if (password == "") {
                valid = false;
                $(".error-password").html("harus diisi");
            }

            if (confirm == "") {
                valid = false;
                $(".error-confirm-password").html("harus diisi");
            } else if (confirm != password) {
                valid = false;
                $(".error-confirm-password").html("harus sama dengan Password");
            }
        }
    });
});