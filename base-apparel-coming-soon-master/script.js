let emailInput = document.getElementById("email")
let btn = document.querySelector("button")
let emailError = document.querySelector(".emailError")

const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    return re.test(email);
};

function checkEmail(email) {
    console.log(email);
    let result = validateEmail(email);
    if (result) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

btn.addEventListener("click", () => {
    checkEmail(emailInput.value)
})

emailInput.addEventListener("input", () => {
    checkEmail(emailInput.value);
})
emailInput.addEventListener("blur", () => {
    checkEmail(emailInput.value);
})


