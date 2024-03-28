document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".wayfinder-dot");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    let index = 0;

    // Move to a specific slide
    const moveToSlide = (slideIndex) => {
        track.style.transform = `translateX(-${slideIndex * items[0].offsetWidth}px)`;
        index = slideIndex;
        updateWayfinder();
    };

    // Update the active dot in the wayfinder
    const updateWayfinder = () => {
        dots.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === index) {
                dot.classList.add("active");
            }
        });
    };

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => {
        if (index !== 0) {
            moveToSlide(index - 1);
        }
    });

    nextButton.addEventListener("click", () => {
        if (index !== items.length - 1) {
            moveToSlide(index + 1);
        }
    });

    // Event listeners for wayfinder dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            moveToSlide(i);
        });
    });
});
