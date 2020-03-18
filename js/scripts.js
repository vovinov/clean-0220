
 
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


let value = 1000;
const switchValue1 = document.querySelector('#switcher-1');
const selectValue1 = document.querySelector('#chairs-select');
const chairsValue1 = document.querySelector('#prices-card__chairs');

switchValue1.addEventListener('change', () => {
  if (switchValue1.checked) {
    value += 1000;    
  } else {
    value -= 1000;    
  }
  chairsValue1.textContent = value;
})

selectValue1.addEventListener('change', (e) => {
  let selectedValue = 0;
  switch (e.target.selectedIndex) {
    case 0: 
      selectedValue = 200;
      break;
    case 1: 
      selectedValue = 500;
      break;
  }
  chairsValue1.textContent = value + selectedValue;
})

const switchValue2 = document.querySelector('#switcher-2');
const selectValue2 = document.querySelector('#sofa-select');
const chairsValue2 = document.querySelector('#prices-card__sofa');

switchValue2.addEventListener('change', () => {
  if (switchValue2.checked) {
    value += 1000;    
  } else {
    value -= 1000;    
  }
  chairsValue2.textContent = value;
})

selectValue2.addEventListener('change', (e) => {
  let selectedValue = 0;
  switch (e.target.selectedIndex) {
    case 0: 
      selectedValue = 200;
      break;
    case 1: 
      selectedValue = 500;
      break;
    case 2: 
      selectedValue = 700;
    break;
    case 3: 
      selectedValue = 1000;
    break;
  }
  chairsValue2.textContent = value + selectedValue;
})

const switchValue3 = document.querySelector('#switcher-3');
const selectValue3 = document.querySelector('#armchairs-select');
const chairsValue3 = document.querySelector('#prices-card__armchairs');

switchValue3.addEventListener('change', () => {
  if (switchValue3.checked) {
    value += 1000;    
  } else {
    value -= 1000;    
  }
  chairsValue3.textContent = value;
})

selectValue3.addEventListener('change', (e) => {
  let selectedValue = 0;
  switch (e.target.selectedIndex) {
    case 0: 
      selectedValue = 200;
      break;
    case 1: 
      selectedValue = 500;
      break;
  }
  chairsValue3.textContent = value + selectedValue;
})

// Slider - works

$(document).ready(function() { 
  
  // Slider - works
  $('.slider-works').slick({
    arrows: true,
    infinite: true,  
    slidesToShow: 3,
    slidesToScroll: 1
    // loop: true
  });
});

