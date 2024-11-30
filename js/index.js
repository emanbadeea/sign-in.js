
var users = [];

function showSignUp() {
    var loginForm = document.getElementById("login-form");
    var signUpForm = document.getElementById("signup-form");
    var formTitle = document.getElementById("form-title");

    loginForm.classList.add("d-none");
    signUpForm.classList.remove("d-none");
    formTitle.textContent = "Sign Up to Smart Login System";
}


function showLogin() {
    var loginForm = document.getElementById("login-form");
    var signUpForm = document.getElementById("signup-form");
    var formTitle = document.getElementById("form-title");

    signUpForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
    formTitle.textContent = "Smart Login System";
}


function handleSignUp(event) {
    event.preventDefault();

    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;


    var existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        alert("User already exists. Please log in.");
        return;
    }

  
    users.push({ name, email, password });
    alert("Sign-up successful! Please log in.");
    showLogin();
}


function handleLogin(event) {
    event.preventDefault();

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

 
    var user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome, ${user.name}!`);
    } else {
        alert("Invalid email or password.");
    }
}