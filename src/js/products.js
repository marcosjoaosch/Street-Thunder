let currentIndex = 0;
const products = document.querySelectorAll('.product');
const arrows = document.querySelectorAll('.arrows a');

arrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    const direction = arrow.classList.contains('back-arrow') ? -1 : 1;
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = products.length - 1;
    } else if (currentIndex >= products.length) {
      currentIndex = 0;
    }
    updateProduct();
  });
});

function updateProduct() {
  products.forEach((product, index) => {
    product.classList.toggle('showing', index === currentIndex);
  });
  arrows[0].classList.toggle('disabled', currentIndex === 0);
  arrows[1].classList.toggle('disabled', currentIndex === products.length - 1);
}

updateProduct();

document.getElementById('whatsAppButton').addEventListener('click', function () {

    var phoneNumber = "555491725731"

    var message = 'E aí, gostaria saber os preços das tuas roupas.'

    var encodedMessage = encodeURIComponent(message)

    var whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsAppUrl, '_blank')
});