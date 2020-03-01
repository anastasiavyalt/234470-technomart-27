let contactLink = document.querySelector(".popup-contact-link");
let contactPopup = document.querySelector(".popup-contact-us");
let contactForm = document.querySelector(".contact-us-form");
let contactName = contactForm.querySelector("#name-surname");
let contactEmail = contactForm.querySelector("#email");
let contactText = contactForm.querySelector("#text");
let contactClose = contactPopup.querySelector(".contact-close");

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  contactName.focus();
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("contact-us-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactPopup.classList.contains("modal-show")) {
      contactPopup.classList.remove("modal-show");
    }
  }
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.value) {
    evt.preventDefault();
    contactPopup.classList.remove("contact-us-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("contact-us-error");
  }
});
