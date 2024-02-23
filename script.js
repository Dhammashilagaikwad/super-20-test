let slideIndex = 0;
let timer;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let captions = document.getElementsByClassName("caption");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    captions[slideIndex - 1].style.display = "block";

    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(showSlides, 3000);
}

function plusSlides(n) {
    clearTimeout(timer);
    slideIndex += n;
    showSlides();
}


function togglePlayPause() {
    const playPauseBtn = document.querySelector('.playPause');
    if (timer) {
        clearTimeout(timer);
        playPauseBtn.textContent = 'Play';
        timer = null;
    } else {
        showSlides();
        playPauseBtn.textContent = 'Pause';
    }
}

showSlides(); 
