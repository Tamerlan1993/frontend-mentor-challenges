let ratings = document.querySelector(".ratings");

let selectedRating;

ratings.addEventListener('click', (e) => {

    if (e?.target?.classList.contains('rating')) {
        [...ratings?.children].forEach(rating => {
            rating?.classList.remove('active')
        })
        if (!e?.target?.classList.contains('active')) {
            e?.target?.classList.add('active')
            selectedRating = e?.target?.innerHTML;
            console.log(selectedRating);
        }
    }
})