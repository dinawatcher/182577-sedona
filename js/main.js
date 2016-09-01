var link = document.querySelector(".search");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=check-in]");
var checkout = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show")
  checkin.focus();
});
form.addEventListener("submit", function(event) {
  if (adults.value == 0 || checkin.value == 0 || checkout.value == 0) {
    event.preventDefault();
    console.log("Нужно ввести количество");
  }
});
