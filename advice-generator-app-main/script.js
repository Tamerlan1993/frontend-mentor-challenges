const url = "https://api.adviceslip.com/advice";

let quoteContainer = document.querySelector("#quote span");
let idContainer = document.querySelector("#id>span");
let rice = document.querySelector("#rice");

async function getAdvice(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

function setText(container, value) {
    container.textContent = value;
}

async function setAdvice() {
    let data = await getAdvice(url);
    setText(quoteContainer, data?.slip?.advice)
    setText(idContainer, data?.slip?.id)
}

document.addEventListener('DOMContentLoaded', () => {
    setAdvice();
})

rice.addEventListener('click', () => {
    setAdvice();
})
