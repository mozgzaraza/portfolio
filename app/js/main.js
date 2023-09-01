const popupLinks = document.querySelectorAll(".popup-link");

popupLinks.forEach(function (value, key) {
  value.addEventListener("click", function (e) {
    console.log("Клик " + (key + 1));
  });
});
