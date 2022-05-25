export {};

let ratings = document.querySelector(".ratings");
let submit = document.querySelector(".submit");
let wrapper = document.querySelector(".wrapper");

ratings?.addEventListener("click", () => {});
submit?.addEventListener("click", () => {
  wrapper?.classList.add("submitted");
});
