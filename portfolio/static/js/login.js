const email = document.getElementById("email");
const signUpName = document.getElementById("name");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const emailErr = document.getElementById("email-err");
const passwordErr = document.getElementById("password-err");

function validateInfo(e) {
	e.preventDefault();

	if (!email.value) {
		emailErr.innerText = "Email can't be empty";
		email.classList.add("red-border");
	} else {
		emailErr.innerText = "";
		email.classList.remove("red-border");
	}

	if (!password.value) {
		passwordErr.innerText = "Password can't be empty";
	} else {
		emailErr.innerText = "";
		password.innerText = "";
		password.classList.remove("red-border");
	}

	emailErr.innerText = "";
	passwordErr.innerText = "";
	return;	
}

loginForm.addEventListener("submit", validateInfo);
