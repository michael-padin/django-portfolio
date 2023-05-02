const email = document.getElementById("email");
const signUpName = document.getElementById("name");
const password = document.getElementById("password");
const signUpBtn = document.getElementById("signUpBtn");
const signupForm = document.getElementById("signupForm");
const emailErr = document.getElementById("email-err");
const nameErr = document.getElementById("name-err");
const passwordErr = document.getElementById("password-err");

console.log({ emailErr, nameErr, passwordErr });
console.log(signUpName.value);
function validateInfo(e) {
	e.preventDefault();
	if (signUpName.value.length < 2 || !signUpName) {
		nameErr.innerText = "Name Must contain 2 characters or greater";
		console.log("notthing");
		signUpName.classList.add("red-border")
	} else {
        signUpName.classList.remove("red-border")
        nameErr.innerText=""
    }

	if (!email.value.includes("@")) {
		emailErr.innerText = "Email Must contain @.";
        email.classList.add("red-border")
	} else {
        email.classList.remove("red-border")
        emailErr.innerText="";
    }

	if (password.value.length < 8) {
		passwordErr.innerText =
			"Password length  must be greater or equal to  8 characters";
            password.classList.add("red-border")
	} else {
        password.classList.remove("red-border")
        passwordErr.innerText =""
    }

	if (
		signUpName.value.length >= 2 &&
		email.value.includes("@") &&
		password.value.length >= 8
	) {
		localStorage.setItem("email", email.value);
		localStorage.setItem("name", signUpName.value);
		localStorage.setItem("password", password.value);

		nameErr.innerText = "";
		emailErr.innerText = "";
		passwordErr.innerText = "";
		window.location.href = "login.html";
	}
}

signupForm.addEventListener("submit", validateInfo);
