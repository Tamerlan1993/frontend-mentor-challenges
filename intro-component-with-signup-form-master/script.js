let emailInput = document.getElementById("email")
let emailError = document.querySelector(".error-email")

let passwordInput = document.getElementById("password")
let passwordError = document.querySelector(".error-password")

let firstNameInput = document.getElementById("firstName")
let firstNameError = document.querySelector(".error-firstName")

let lastNameInput = document.getElementById("lastName")
let lastNameError = document.querySelector(".error-lastName")

let btn = document.querySelector('button');

const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    return re.test(email);
};

const validatePassword = (password) => {
    let re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
};

function checkEmail(email) {
    let result = validateEmail(email);
    if (result) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

function checkPassword(password) {
    let result = validatePassword(password);
    if (result) {
        passwordError.style.display = "none";
    }
    else {
        passwordError.style.display = "block";
    }
}

function checkTextInput(value = "", errorContainer) {
    if (value.trim()) {
        errorContainer.style.display = "none";
    }
    else {
        errorContainer.style.display = "block";
    }
}

emailInput.addEventListener('input', () => checkEmail(emailInput.value));
passwordInput.addEventListener('input', () => checkPassword(passwordInput.value));
firstNameInput.addEventListener('input', () => checkTextInput(firstNameInput.value, firstNameError));
lastNameInput.addEventListener('input', () => checkTextInput(lastNameInput.value, lastNameError));

btn.addEventListener('click', () => {
    checkEmail(emailInput.value)
    checkPassword(passwordInput.value)
    checkTextInput(firstNameInput.value, firstNameError)
    checkTextInput(lastNameInput.value, lastNameError)
})