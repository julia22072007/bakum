// Появляется поиск при клике
document
  .querySelector(".search-header__button")
  .addEventListener("click", function () {
    document.querySelector(".search-header__form").classList.toggle("active");
  });

// Поиск прячется при нажатии на пустое место
document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".search-header__form") &&
    !e.target.closest(".search-header__button")
  ) {
    document.querySelector(".search-header__form").classList.remove("active");
  }
});
// Открытие и закрытие бургер меню
document
  .querySelector(".header__burger")
  .addEventListener("click", function () {
    document.querySelector(" .header__nav ").classList.toggle("active");
    document.body.classList.toggle("lock");
  });

// Закрывает меню после нажатия на ссылку
document.querySelectorAll(".header__link").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(" .header__nav ").classList.remove("active");
    document.body.classList.remove("lock");
  });
});
