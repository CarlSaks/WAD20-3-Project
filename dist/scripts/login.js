const loginButton = document.getElementById("login-button");
var credentials = new Map();

credentials.set("name@mail.com", "1234");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    var email = document.getElementById("email-input").value;
    var passw = document.getElementById("password-input").value;

    if (credentials.has(email) && credentials.get(email) === passw) {
        
        location.href = "../html/feed.html";
    }

    if ( !(credentials.has(email))) {

        document.getElementById("email-input").style.boxShadow = "0 0 3px red";
        document.getElementById("password-input").style.boxShadow = "0 0 3px red";
    }
    else {

        document.getElementById("email-input").style.boxShadow = "initial";
    }

    if ( !(credentials.get(email) === passw)) {

        document.getElementById("password-input").style.boxShadow = "0 0 3px red";
    }
});