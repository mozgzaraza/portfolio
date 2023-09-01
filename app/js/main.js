const popupLinks = document.querySelectorAll(".popup-link");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

function openClose() {
  popup.classList.toggle("open");
}

popupLinks.forEach(function (value, key) {
  value.addEventListener("click", openClose);
});

popupClose.addEventListener("click", openClose);
