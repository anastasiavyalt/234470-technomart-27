/* SLIDERS */
function Slider(slidesClass, bulletsClass, prevClass, nextClass) {
    this.index = 0;
    this.slidesClass = slidesClass;
    this.bulletsClass = bulletsClass;

    let self = this;

    let bullets = document.querySelectorAll(bulletsClass);
    Array.prototype.slice.call(bullets).forEach(function(bullet, index) {
        bullet.addEventListener('click', function() {
            self.showSlides(index);
        });
    });

    if (prevClass !== undefined && nextClass !== undefined) {
        this.prevClass = prevClass;
        this.nextClass = nextClass;

        let prev = document.querySelector(prevClass);
        prev.addEventListener("click", function() {
            self.showSlides(self.index - 1);
        });

        let next = document.querySelector(nextClass);
        next.addEventListener("click", function() {
            self.showSlides(self.index + 1);
        });
    }

    this.showSlides = function(i) {
        let slides = document.querySelectorAll(self.slidesClass);
        slides[self.index].classList.remove("active");

        let bullets = document.querySelectorAll(self.bulletsClass);
        bullets[self.index].classList.remove("active");

        if (i > slides.length - 1) {
            self.index = 0;
        }
        else if (i < 0) {
            self.index = slides.length - 1;
        } else {
            self.index = i;
        }

        slides[self.index].classList.add("active");
        bullets[self.index].classList.add("active");
    }

}

let promoSlider = new Slider(".slide", ".pagination-bullet", ".slider-previous", ".slider-next");
promoSlider.showSlides(0);

let servicesSlider = new Slider(".service-slide", ".services-slider-button");
servicesSlider.showSlides(0);

/* POPUPS */
let contactLink = document.querySelector(".popup-contact-link");
let contactPopup = document.querySelector(".popup-contact-us");
let contactForm = document.querySelector(".contact-us-form");
let contactName = contactForm.querySelector("#name-surname");
let contactEmail = contactForm.querySelector("#email");
let contactText = contactForm.querySelector("#text");
let contactClose = contactPopup.querySelector(".contact-close");

let mapLink = document.querySelector(".map");
let mapPopup = document.querySelector(".popup-map");
let mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
    mapPopup.classList.add("modal-show");
    console.log(mapPopup);
});

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

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (contactPopup.classList.contains("modal-show")) {
        contactPopup.classList.remove("modal-show");
      }
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
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


