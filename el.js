document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    
    function nextSlide() {
        const previousSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;
        
        
        
        slides[previousSlide].classList.remove("active");
        slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
});
