var button = document.querySelector(".popup-button");
var popup = document.querySelector(".searchform");
popup.classList.add("searchform-close");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("searchform-close");
});
