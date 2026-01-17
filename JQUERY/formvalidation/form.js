

$(document).ready(function(){
    

    //get the form and submit
    $("#loginForm").on("submit", function(event){
        event.preventDefault();
        //get th form input value
    let $username = $("#username").val();
    let $email = $("#email").val();
    let $password = $("#password").val();

    //initialize a flag to check if form is valid
    let $isValid = true;
        if ($username === ""){
             $("#usernameError").css("color", "red");
            $("#usernameError").text("Username cannot be empty");
            $isValid = false;
        }else{
            $("#usernameError").text("")
        }

        //if the password length is less than 8.
        if ($password.length < 8){
            $("#passwordError").text("Your password must be greater than 8");
            $("#password").empty()
            $isValid = false;
        }else{
            $("#passwordError").text("");
        }

        //check if the email format is right
        let $emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        $emailPattern.test($email)
        if(!$emailPattern.test($email)){
            $("#emailError").text("Invalid email format");
             $isValid = false;
        }else{
            $("#emailError").empty();
        }

        //if form fields are valid
        if($isValid){
            alert("Form Submited successfully");
            $("#username").empty();
            // $("#username").val("");
            // $("#email").val("");
            // $("#password").val("");
            // $("#loginForm")[0].reset();
        }
    })

})