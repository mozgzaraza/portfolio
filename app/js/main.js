// ПОПАП
const popupLinks = document.querySelectorAll(".popup-link");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

function openClosePopup() {
  popup.classList.toggle("open");
}

popupLinks.forEach(function (value, key) {
  value.addEventListener("click", openClosePopup);
});

popupClose.addEventListener("click", openClosePopup);

// ВЫЗОВ ОТВЕТА
const answerLink = document.querySelector(".popup__button");
const answerPopup = document.querySelector(".popup-answer");
const answerClose = document.querySelector(".popup-answer__close");
const answerMessage = function (message) {
  document.querySelector(".popup-answer__text").textContent = message;
};
let answerNum = 0;

function openCloseAnswer() {
  answerPopup.classList.toggle("open");
}

answerLink.addEventListener("click", openCloseAnswer);

answerClose.addEventListener("click", function () {
  if (answerNum === 1) {
    openCloseAnswer();
    openClosePopup();
    answerMessage("Все ОК");
  } else {
    openCloseAnswer();
    answerMessage("Все не ОК, попробуй еще раз");
  }
});
