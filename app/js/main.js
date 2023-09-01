const popupLinks = document.querySelectorAll(".popup-link");

for (let index = 0; index < popupLinks.length; index++) {
  const popupLink = popupLinks[index];
  popupLink.addEventListener("click", function (e) {
    console.log("Клик " + (index + 1));
  });
}
