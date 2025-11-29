let burger = document.querySelector(".header__burger");
let list = document.querySelector(".header__list");
let list__item = document.querySelectorAll(".header__list--item");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
  burger.classList.toggle("open");
});

list__item.forEach((item) => {
  item.addEventListener("click", () => {
    list.classList.remove("active");
    burger.classList.remove("open");
  });
});
