document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      document.querySelector(".header__nav").classList.toggle("active");
    });

  // слайдер
  if (document.querySelector(".swiper")) {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if (document.querySelector("#form")) {
    //Получаем инпут file в переменную
    const formImage = document.getElementById("formImage");
    //Получаем див для превью в переменную
    const formPreview = document.getElementById("formPreview");

    //Слушаем изменения в инпуте file
    formImage.addEventListener("change", () => {
      uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
      // провераяем тип файла
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        alert("Разрешены только изображения.");
        formImage.value = "";
        return;
      }
      // проверим размер файла (<2 Мб)
      if (file.size > 2 * 1024 * 1024) {
        alert("Файл должен быть менее 2 МБ.");
        return;
      }

      var reader = new FileReader();
      reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
      };

      reader.readAsDataURL(file);
    }
  }

  // кнопка наверх

  function topArrow() {
    // прячет или показывает кнопку наверх в зависимости от положения документа
    function trackScroll() {
      const scrolled = window.pageYOffset;

      if (scrolled > 20) {
        //если документ прокручен более 20 px, то показываем кнопку наверх
        goTopBtn.classList.add("show");
      }
      if (scrolled < 20) {
        goTopBtn.classList.remove("show"); //прячем кнопку если документ вверху или прокручен меньше чем на 21px
      }
    }

    // подымает документ наверх при нажатии на кнопку вверх
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0); //прокручиваем документ наверх
      }
    }

    const goTopBtn = document.querySelector(".top-button");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);
  }

  topArrow();
});
