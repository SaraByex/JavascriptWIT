$(document).ready(function () {
    $("#loginForm").on("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        let $userName = $("#username").val().trim();
        let $email = $("#email").val().trim();
        let $password = $("#password").val();

        let $isValid = true;

        // Username validation
        if ($userName === "") {
            $("#usernameError").css("color", "red").text("Username cannot be empty");
            $isValid = false;
        } else {
            $("#usernameError").text("");
        }

        // Password validation
        if ($password.length < 8) {
            $("#passwordError").css("color", "red").text("Your password must be at least 8 characters long");
            $isValid = false;
        } else {
            $("#passwordError").text("");
        }

        // Email validation
        let $emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!$emailPattern.test($email)) {
            $("#emailError").css("color", "red").text("Invalid email format");
            $isValid = false;
        } else {
            $("#emailError").text("");
        }

        // If all inputs are valid
        if ($isValid) {
            alert("Form submitted successfully");

            // Reset the form fields
            $("#loginForm")[0].reset();
        }
    });
});