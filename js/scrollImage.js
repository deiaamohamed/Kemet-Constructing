function autoScrollImages() {
    const imageContainers = document.querySelectorAll('.image-container1');

    imageContainers.forEach(container => {
        const images = container.querySelectorAll('.card-img1');
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove('active');

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add('active');
        }, 5000); 
    });
}

autoScrollImages();