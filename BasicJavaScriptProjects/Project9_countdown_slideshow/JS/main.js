//funtion pull input from the input element HTML.
function countdown() {
    var seconds = document.getElementById("seconds").value;
//A function taking the inputed number to count down to 0 and give an pop up alert that the time is up
//after the 0 is displayed
    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// A function that adjusts the display of what slide the slide show is on (1/3 ect..) and to match the dot
// with the slide (slide 1/dot 1 ect...) The code will know by creating a list of the images and what 
//indices each image is on (first image: index 0, second image: index 2) then starting back at image and 
//dot 1 when clicking through image 3
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}