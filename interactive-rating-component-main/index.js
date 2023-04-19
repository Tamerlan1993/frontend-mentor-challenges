let ratings = document.querySelector(".ratings");
let wrapper = document.querySelector(".wrapper");
let notsubmitted = wrapper.querySelector(".notsubmitted");
let submitted = wrapper.querySelector(".submitted");
let submit = wrapper.querySelector("button");
let selectedRating = wrapper.querySelector(".selectedRating");

let rating;

ratings.addEventListener('click', (e) => {

    if (e?.target?.classList.contains('rating')) {
        [...ratings?.children].forEach(rating => {
            rating?.classList.remove('active')
        })
        if (!e?.target?.classList.contains('active')) {
            e?.target?.classList.add('active')
            rating = e?.target?.innerHTML;
        }
    }
})

submit.addEventListener('click', () => {
    if (!rating) return;
    submitted.classList.remove('hidden')
    submitted.classList.add('grid')
    notsubmitted.classList.add('hidden')
    selectedRating.textContent = `You selected ${rating} out of 5`
})