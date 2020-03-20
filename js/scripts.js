
 
// Before - After

$('.ba-slider').beforeAfter();

// About selector

const aboutButtons = document.querySelectorAll('.about__btn');
for (let i = 0; i < aboutButtons.length;i++) {
  aboutButtons[i].addEventListener('click', (event) => {
    changePicture(event.target.value);
    changeActiveClass(event.target);
  })
}

const changePicture = (text) => {
  const aboutImg = document.querySelector('.about__img');
  aboutImg.src = `./img/about_${text}.png`;
  aboutImg.alt = text;
}

const changeActiveClass = (node) => {
  aboutButtons.forEach((button) => {
    button.classList.remove('about__btn--active');
  })
  node.classList.add('about__btn--active');
}

// Prices chairs selector


let value = 0;
const switchValue1 = document.querySelector('#switcher-1');
const chairsValue1 = document.querySelector('#prices-card__chairs');

switchValue1.addEventListener('change', () => {
  if (switchValue1.checked) {
    value = 300;    
  } else {
    value = 450;    
  }
  chairsValue1.textContent = value;
})

const switchValue2 = document.querySelector('#switcher-2');
const chairsValue2 = document.querySelector('#prices-card__sofa');

switchValue2.addEventListener('change', () => {
  if (switchValue2.checked) {
    value = 2100;    
  } else {
    value = 2600;    
  }
  chairsValue2.textContent = value;
})

const switchValue3 = document.querySelector('#switcher-3');
const chairsValue3 = document.querySelector('#prices-card__armchairs');

switchValue3.addEventListener('change', () => {
  if (switchValue3.checked) {
    value = 1000;    
  } else {
    value = 1500;    
  }
  chairsValue3.textContent = value;
})

$(document).ready(function() { 
  
  // Slider - works
  $('.works-slider').slick({
    dots: true,
    slidesToShow: 2,
    variableWidth: true,
    centerMode: true,
    autoplay: true
  });

  const imgBefore = document.querySelector('.works__img--before');
  const imgAfter = document.querySelector('.works__img--after');
  const sliderItems = document.querySelectorAll('.works-slider__item');

  sliderItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      changeWorksImage(e.target.alt);
    })
  });

  const changeWorksImage = (name) => {
    imgBefore.src = `img/${name}-before.jpg`;
    imgAfter.src = `img/${name}-after.jpg`;
  }

  // Comments - works
  $('.comments__row').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  })
});

