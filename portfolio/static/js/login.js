const email = document.getElementById("email");
const signUpName = document.getElementById("name");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const emailErr = document.getElementById("email-err");
const passwordErr = document.getElementById("password-err");

function validateInfo(e) {
	e.preventDefault();

	const localEmail = localStorage.getItem("email");
	const localPass = localStorage.getItem("password");

	if (!email.value) {
		emailErr.innerText = "Email can't be empty";
		email.classList.add("red-border");
	} else if (localEmail !== email.value) {
		emailErr.innerText =
			"The inputted email is not registered. Please register";
		email.classList.add("red-border");
	} else {
		emailErr.innerText = "";
		email.classList.remove("red-border");
	}

	if (!password.value) {
		passwordErr.innerText = "Password can't be empty";
	} else if (localPass !== password.value) {
		password.innerText = "Invalid credentials";
		password.classList.add("red-border");
	} else {
		emailErr.innerText = "";
		password.innerText = "";
		password.classList.remove("red-border");
		window.location.href = "index.html";
	}

	nameErr.innerText = "";
	emailErr.innerText = "";
	passwordErr.innerText = "";
	window.location.href = "login.html";
}

loginForm.addEventListener("submit", validateInfo);
