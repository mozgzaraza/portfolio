$(function () {
  $(function () {
    const popupLinks = document.querySelectorAll(".popup-link");

    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        console.log("Клик " + (index + 1));
      });
    }
  });

  // const popupLinks = document.querySelectorAll('.popup-link');
  // const body = document.querySelector('body');
  // const lockPadding = document.querySelectorAll('.lock-padding');

  // let unlock = true;

  // const timeOut = 300;

  // if (popupLinks.length > 0) {
  //   for (let index = 0; index < popupLinks.length; index++) {
  //     const popupLink = popupLinks[index];
  //     popupLink.addEventListener("click", function (e) {
  //       const popupName = popupLink.getAttribute('href').replace('#', '');
  //       const curentPopup = document.getElementById(popupName);
  //       popupOpen(curentPopup);
  //       e.preventDefault();
  //     });
  //   }
  // }

  // const popupCloseIcon = document.querySelectorAll('.close-popup');
  // if (popupCloseIcon.length > 0) {
  //   for (let index = 0; index < popupCloseIcon.length; index++) {
  //     const el = popupCloseIcon[index];
  //     el.addEventListener('click', function (e) {
  //       popupClose(el.closest('.popup'));
  //       e.preventDefault();
  //     });
  //   }
  // }

  // function popupOpen(curentPopup) {
  //   if (curentPopup && unlock) {
  //     const popupActive = document.querySelector('.popup.open');
  //     if (popupActive) {
  //       popupClose(popupActive, false);
  //     } else {
  //       bodyLock();
  //     }
  //     curentPopup.classList.add('open');
  //     curentPopup.addEventListener("click", function (e) {
  //       if (!e.target.closest('.popup__content')) {
  //         popupClose(e.target.closest('.popup'));
  //       }
  //     });
  //   }
  // }

  // function popupClose(popupActive, doUnlock = true) {
  //   if (unlock) {
  //     popupActive.classList.remove('open');
  //     if (doUnlock) {
  //       bodyUnlock();
  //     }
  //   }
  // }

  // function bodyLock() {
  //   const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  //   if (lockPadding.length > 0) {
  //     for (let index = 0; index < lockPadding.length; index++) {
  //       const el = lockPadding[index];
  //       el.style.paddingRight = lockPaddingValue;
  //     }
  //   }
  //   body.style.paddingRight = lockPaddingValue;
  //   body.classList.add('lock');

  //   unlock = false;
  //   setTimeout(function () {
  //     unlock = true;
  //   }, timeOut);

  // }

  // function bodyUnlock() {
  //   setTimeout(function () {
  //     if (lockPadding.length > 0) {
  //       for (let index = 0; index < lockPadding.length; index++) {
  //         const el = lockPadding[index];
  //         el.style.paddingRight = '0px';
  //       }
  //     }
  //     body.style.paddingRight = '0px';
  //     body.classList.remove('lock');
  //   }, timeOut);

  //   unlock = false;
  //   setTimeout(function () {
  //     unlock = true;
  //   }, timeOut);
  // }

  // document.addEventListener('keydown', function (e) {
  //   if (e.which === 27) {
  //     const popupActive = document.querySelector('.popup.open');
  //     popupClose(popupActive);
  //   }
  // });

  // ОТКРЫТИЕ МЕНЮ
  // $('.menu__burger, .menu__link').on('click', function () {
  //   $('.menu__list').toggleClass('menu__list--active');
  //   $('.menu__burger').toggleClass('menu__burger--active');
  //   $('.menu__btn').toggleClass('menu__btn--active');
  //   $('body').toggleClass('lock-menu');
  // });

  function toggleMenuClasses() {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__burger").toggleClass("menu__burger--active");
    $(".menu__btn").toggleClass("menu__btn--active");
  }

  $(".menu__burger").on("click", function () {
    toggleMenuClasses();
    $("body").toggleClass("lock-menu");
  });

  $(".menu__link").on("click", function () {
    if (window.innerWidth >= 768) {
      toggleMenuClasses();
    } else if ($(".menu__list").hasClass("menu__list--active")) {
      toggleMenuClasses();
      $("body").toggleClass("lock-menu");
    }
  });

  // СКРОЛЛ МЕНЮ
  $(".menu__link, .footer .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 900);
  });

  // АНИМАЦИЯ ПРИ СКРОЛЕ
  const animItems = document.querySelectorAll(".element-animation");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("element-show");
        } else {
          animItem.classList.remove("element-show");
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }

  // ФОРМА СВЯЗИ

  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize(),
    }).done(function () {
      alert(
        "Спасибо! Ваша заявка отправлена! Мы с Вами свяжемся в течении 30 минут! "
      );
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
