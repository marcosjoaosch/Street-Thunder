// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.carrousel-img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('show');
}


images[currentIndex].classList.add('show');

setInterval(showNextImage, 5000);

document.getElementById('whatsAppButton').addEventListener('click', function () {

    var phoneNumber = "555491725731"

    var message = 'E aí, gostaria de ver seus produtos da Street Thunder.'

    var encodedMessage = encodeURIComponent(message)

    var whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsAppUrl, '_blank')
});