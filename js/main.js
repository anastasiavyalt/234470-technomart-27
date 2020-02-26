/* SLIDERS */
console.log("ffff");
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
