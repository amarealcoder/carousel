const prevButton = document.getElementById('btn_left');
const nextButton = document.getElementById('btn_right');

let i = 0;
let carouselImages = [];

carouselImages[0] = './carousel-img-1.jpg';
carouselImages[1] = './carousel-img-2.jpg';
carouselImages[2] = './carousel-img-3.jpg';
carouselImages[3] = './carousel-img-4.jpg';
carouselImages[4] = './carousel-img-5.jpg';
carouselImages[5] = './carousel-img-6.jpg';

const slideImageForward = () => {
  document.show.src = carouselImages[i];

  if (i < carouselImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
};

const slideImageBackward = () => {
  document.show.src = carouselImages[i];

  if (i > 1) {
    i--;
  } else {
    i = carouselImages.length - 1;
  }
};
nextButton.addEventListener('click', slideImageForward);
prevButton.addEventListener('click', slideImageBackward);

window.onload = slideImageForward;
