let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    if (index >= slides.length) {
        currentSlide = 0; // Volta ao primeiro slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Volta ao último slide
    } else {
        currentSlide = index; // Define o slide atual
    }
    
    // Atualiza a classe 'active' nas imagens
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicializa o carrossel exibindo o primeiro slide
showSlide(currentSlide);


let videoIndex = 0;
showVideo(videoIndex);

function showVideo(index) {
    let videos = document.getElementsByClassName("carousel-video");
    // Esconde todos os vídeos
    for (let i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    // Mostra o vídeo atual
    videos[index].style.display = "block";
}

function showNextVideo() {
    let videos = document.getElementsByClassName("carousel-video");
    videoIndex = (videoIndex + 1) % videos.length;
    showVideo(videoIndex);
}

function showPrevVideo() {
    let videos = document.getElementsByClassName("carousel-video");
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    showVideo(videoIndex);
}