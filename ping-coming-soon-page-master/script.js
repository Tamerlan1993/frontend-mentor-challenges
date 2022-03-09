let emailInput = document.getElementById("email")
let btn = document.querySelector("button")
let emailError = document.querySelector(".emailError")

const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    return re.test(email);
};


function checkEmail(email) {
    let result = validateEmail(email);
    if (result) {
        emailInput.classList.remove('invalid')
        emailError.style.display = "none";
    }
    else {
        emailInput.classList.add('invalid')
        emailError.style.display = "block";
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkEmail(emailInput.value)
})

emailInput.addEventListener("input", () => {
    checkEmail(emailInput.value);
})
emailInput.addEventListener("blur", () => {
    checkEmail(emailInput.value);
})