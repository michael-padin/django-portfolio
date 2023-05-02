const email = document.getElementById("email");
const signUpName = document.getElementById("name");
const address = document.getElementById("address");
const cardNum = document.getElementById("cardNum");
const expiry = document.getElementById("expiry");
const cvc = document.getElementById("cvc");

const booksWrapper = document.querySelector(".books__wrapper");
const custForm = document.getElementById("custForm");

const custDetailsWrapper = document.querySelector(".customer__details-wrapper");
const payBtn = document.getElementById("payBtn");
// const buyNowBtn = document.getElementById("buy-now-btn");
const allBuyBtn = document.querySelectorAll(".buy-now-btn");

const emailErr = document.getElementById("email-err");
const nameErr = document.getElementById("name-err");
const passwordErr = document.getElementById("password-err");
const addressErr = document.getElementById("address-err");
const cardNumErr = document.getElementById("cardnum-err");
const expiryErr = document.getElementById("expiry-err");
const cvcErr = document.getElementById("cvc-err");

const closeBtn = document.querySelector(".close-container");

const feedbackWrapper = document.querySelector(".feedback__wrapper");
const feedbackContainer = document.querySelector(".feedback__container");
const closeFeedbackBtn = document.querySelector(".close-feedback-container");

function validateInfo(e) {
	let isError = false;
	e.preventDefault();

	if (!address.value) {
		addressErr.innerText = "Address can't be empty";
		address.classList.add("red-border");
		isError = true;
	} else if (address.value.length < 2) {
		addressErr.innerText = "Address must contain 5 characters or greater";
		address.classList.add("red-border");
		isError = true;
	} else {
		addressErr.innerText = "";
		address.classList.remove("red-border");
		isError = false;
	}

	if (!cardNum.value) {
		cardNumErr.innerText = "Card number can't be empty";
		cardNum.classList.add("red-border");
		isError = true;
	} else if (typeof cardNum.value !== "string") {
		cardNumErr.innerText = "card number must be a number!";
		cardNum.classList.add("red-border");
		isError = true;
	} else if (!cardNum || cardNum.value.length < 10) {
		isError = true;
		cardNumErr.innerText = "card length must be greater than 10";
		cardNum.classList.add("red-border");
	} else {
		isError = false;
		cardNum.classList.remove("red-border");
		cardNumErr.innerText = "";
	}

	if (!signUpName.value) {
		nameErr.innerText = "Name can't be empty";
		signUpName.classList.add("red-border");
		isError = true;
	} else if (signUpName.value.length < 2 || !signUpName) {
		nameErr.innerText = "Name Must contain 2 characters or greater";
		console.log("notthing");
		signUpName.classList.add("red-border");
		isError = true;
	} else {
		isError = false;
		signUpName.classList.remove("red-border");
		nameErr.innerText = "";
	}

	if (!email.value) {
		isError = true;
		emailErr.innerText = "Email can't be empty";
		email.classList.add("red-border");
	} else if (!email.value.includes("@")) {
		isError = true;
		emailErr.innerText = "Email Must contain @.";
		email.classList.add("red-border");
	} else {
		isError = false;
		email.classList.remove("red-border");
		emailErr.innerText = "";
	}

	if (!expiry.value) {
		isError = true;
		expiryErr.innerText = "Expiry date can't be empty";
		expiry.classList.add("red-border");
	} else {
		expiry.classList.remove("red-border");
		expiryErr.innerText = "";
		isError = false;
	}

	if (!cvc.value) {
		isError = true;
		cvcErr.innerText = "Cvc number can't be empty";
		cvc.classList.add("red-border");
	} else if (cvc.value.length < 3) {
		isError = true;
		cvcErr.innerText = "Cvc length must be greater or equal to 3";
		cvc.classList.add("red-border");
	} else {
		isError = false;
		cvc.classList.remove("red-border");
		cvcErr.innerText = "";
	}

	if (isError) {
		return;
	} else {
		address.value = "";
		cardNum.value = "";
		cardNum.value = "";
		signUpName.value = "";
		email.value = "";
		expiry.value = "";
		cvc.value = "";
		closePaymentForm();
		displayPurchaseFeedback();
	}
}

function displayCusForm() {
	custForm.parentElement.classList.remove("popout");
	custForm.parentElement.classList.add("popup");
	custDetailsWrapper.classList.add("show");
}

function closePaymentForm() {
	address.classList.remove("red-border");
	addressErr.innerText = "";
	cardNum.classList.remove("red-border");
	cardNumErr.innerText = "";
	signUpName.classList.remove("red-border");
	nameErr.innerText = "";
	email.classList.remove("red-border");
	emailErr.innerText = "";
	expiryErr.innerText = "";
	expiry.classList.remove("red-border");
	cvc.classList.remove("red-border");
	cvcErr.innerText = "";
	custForm.parentElement.classList.add("popout");

	setTimeout(() => {
		custDetailsWrapper.classList.remove("show");
	}, 100);
}

function closeFeedbackMessage() {
	feedbackContainer.classList.add("popout");
	setTimeout(() => {
		feedbackWrapper.classList.remove("show__feedback");
	}, 100);
}

function displayPurchaseFeedback() {
	feedbackContainer.classList.add("popup");
	feedbackWrapper.classList.add("show__feedback");
}

closeFeedbackBtn.addEventListener("click", closeFeedbackMessage);

allBuyBtn.forEach((btn) => {
	btn.addEventListener("click", displayCusForm);
});

closeBtn.addEventListener("click", closePaymentForm);
custForm.addEventListener("submit", validateInfo);
