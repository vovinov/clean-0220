
 
// Before - After

$('.ba-slider').each(function(){
  $(this).beforeAfter();
});

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

const value_chairs = {
  leather_back: '450',
  cloth_back: '300',
  leather: '300',
  cloth: '200'
};

const switchValueChairs = document.querySelector('#switcher-1');
const selectValueChairs = document.querySelector('#select-1');
const chairsValue = document.querySelector('#prices-card__chairs');
const chairsImg = document.querySelector('.prices-card__img--chair');


switchValueChairs.addEventListener('change', () => {
  const {cloth_back, leather_back, leather, cloth} = value_chairs
  let value;
  switch (selectValueChairs.selectedIndex) {
    case 0:      
      value = switchValueChairs.checked ? cloth_back : leather_back;
      chairsImg.src = switchValueChairs.checked ? "/img/picture_chairBack_cloth.jpg" : "/img/picture_chairBack_leather.jpg"; 
      break;
    case 1:
      value = switchValueChairs.checked ? cloth : leather;
      chairsImg.src = switchValueChairs.checked ? "/img/picture_chair_cloth.jpg" : "/img/picture_chair_leather.jpg"; 
      break;  
  }
  chairsValue.textContent = value;
})

selectValueChairs.addEventListener('change', (e) => {
  const {cloth_back, leather_back, cloth, leather} = value_chairs
  let value;
  switch (e.target.selectedIndex) {
    case 0:      
      value = switchValueChairs.checked ? cloth_back : leather_back;
      chairsImg.src = switchValueChairs.checked ? "/img/picture_chairBack_cloth.jpg" : "/img/picture_chairBack_leather.jpg"; 
      break;
    case 1:
      value = switchValueChairs.checked ? cloth : leather;  
      chairsImg.src = switchValueChairs.checked ? "/img/picture_chair_cloth.jpg" : "/img/picture_chair_leather.jpg"; 
      break;
  }
  chairsValue.textContent = value;
})

// Prices sofa selector

const value_sofa = {
  leather_2: '2600',
  cloth_2: '2100',
  leather_3: '3300',
  cloth_3: '2700',
  leather_2x: '4100',
  cloth_2x: '3300',
  leather_3x: '5750',
  cloth_3x: '4500'
};

const switchValueSofa = document.querySelector('#switcher-2');
const selectValueSofa = document.querySelector('#select-2');
const sofaValue = document.querySelector('#prices-card__sofa');
const sofaImg = document.querySelector('.prices-card__img--sofa');

switchValueSofa.addEventListener('change', () => {
  const {
      leather_2, 
      cloth_2,
      leather_3, 
      cloth_3,
      leather_2x, 
      cloth_2x,
      leather_3x, 
      cloth_3x
  } = value_sofa
  let value;
  switch (selectValueSofa.selectedIndex) {
    case 0:      
      value = switchValueSofa.checked ? cloth_2 : leather_2;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa2_cloth.jpeg" : "/img/picture_sofa2_leather.jpg"; 
      break;
    case 1:
      value = switchValueSofa.checked ? cloth_3 : leather_3;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa3_cloth.jpeg" : "/img/picture_sofa3_leather.jpg"; 
      break; 
    case 2:
      value = switchValueSofa.checked ? cloth_2x : leather_2x;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa2x_cloth.jpg" : "/img/picture_sofa2x_leather.jpg"; 
      break; 
    case 3:
      value = switchValueSofa.checked ? cloth_3x : leather_3x;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa3x_cloth.jpg" : "/img/picture_sofa2x_leather.jpg"; 
      break;  
  }
  sofaValue.textContent = value;
})

selectValueSofa.addEventListener('change', (e) => {
  const {
    leather_2, 
    cloth_2,
    leather_3, 
    cloth_3,
    leather_2x, 
    cloth_2x,
    leather_3x, 
    cloth_3x
} = value_sofa
  let value;
  switch (e.target.selectedIndex) {
    case 0:      
      value = switchValueSofa.checked ? cloth_2 : leather_2;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa2_cloth.jpeg" : "/img/picture_sofa2_leather.jpg"; 
      break;
    case 1:
      value = switchValueSofa.checked ? cloth_3 : leather_3;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa3_cloth.jpeg" : "/img/picture_sofa3_leather.jpg"; 

      break; 
    case 2:
      value = switchValueSofa.checked ? cloth_2x : leather_2x;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa2x_cloth.jpg" : "/img/picture_sofa2x_leather.jpg"; 

      break; 
    case 3:
      value = switchValueSofa.checked ? cloth_3x : leather_3x;
      sofaImg.src = switchValueSofa.checked ? "/img/picture_sofa3x_cloth.jpg" : "/img/picture_sofa2x_leather.jpg"; 
      break;
  }
  sofaValue.textContent = value;
})

// Prices armchairs selector

const value_armchairs = {
  leather_back: '1850',
  cloth_back: '1250',
  leather: '1500',
  cloth: '1000'
};

const selectValueArmchairs = document.querySelector('#select-3');
const switchValueArmchairs = document.querySelector('#switcher-3');
const armchairsValue = document.querySelector('#prices-card__armchairs');
const armchairsImg = document.querySelector('.prices-card__img--armchair');

switchValueArmchairs.addEventListener('change', () => {
  const {cloth_back, leather_back, leather, cloth} = value_armchairs
  let value;
  switch (selectValueArmchairs.selectedIndex) {
    case 0:      
      value = switchValueArmchairs.checked ? cloth_back : leather_back;
      armchairsImg.src = switchValueArmchairs.checked ? "/img/picture_armchair_cloth.jpeg" : "/img/picture_armchair_leather.jpeg"; 
      break;
    case 1:
      value = switchValueArmchairs.checked ? cloth : leather;
      armchairsImg.src = switchValueArmchairs.checked ? "/img/picture_armchair_cloth.jpeg" : "/img/picture_armchair_leather.jpeg"; 
      console.log(armchairsImg.src);
      break;  
  }
  armchairsValue.textContent = value;
})

selectValueArmchairs.addEventListener('change', (e) => {
  const {cloth_back, leather_back, cloth, leather} = value_armchairs;
  let value;
  switch (e.target.selectedIndex) {
    case 0:      
      value = switchValueArmchairs.checked ? cloth_back : leather_back;
      break;
    case 1:
      value = switchValueArmchairs.checked ? cloth : leather;  
      break;
  }
  armchairsValue.textContent = value;
})

// Prices matrass selector

const value_matrass = {
  sm_900_one: '1350',
  sm_900_full: '1600',
  sm_1200_one: '1800',
  sm_1200_full: '2200',
  md_1400_one: '2100',
  md_1400_full: '2500',
  md_1600_one: '2400',
  md_1600_full: '2800',
  md_1800_one: '2700',
  md_1800_full: '3200'
};

const selectValueMatras = document.querySelector('#select-4');
const switchValueMatras = document.querySelector('#switcher-4');
const matrasValue = document.querySelector('#prices-card__matras');
const matrasImg = document.querySelector('.prices-card__img--matras');

const {sm_900_one, sm_900_full, sm_1200_one, sm_1200_full, md_1400_one, md_1400_full, md_1600_one, md_1600_full, md_1800_one, md_1800_full} = value_matrass;

switchValueMatras.addEventListener('change', () => {
  let value;
  switch (selectValueMatras.selectedIndex) {
    case 0:      
      value = switchValueMatras.checked ? sm_900_full : s_900_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_sm.jpg" :  "/img/picture_matrass_sm.jpg"
      break;
    case 1:
      value = switchValueMatras.checked ? sm_1200_full : s_1200_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_sm.jpg" :  "/img/picture_matrass_sm.jpg"
      break; 
    case 2:
      value = switchValueMatras.checked ? md_1400_full : md_1400_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_lg.jpg" :  "/img/picture_matrass_lg.jpg"
      break; 
    case 3:
      value = switchValueMatras.checked ? md_1600_full : md_1600_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_lg.jpg" :  "/img/picture_matrass_lg.jpg"
      break; 
    case 4:
      value = switchValueMatras.checked ? md_1800_full : md_1800_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_lg.jpg" :  "/img/picture_matrass_lg.jpg"
      break;  
  }
  matrasValue.textContent = value;
})

selectValueMatras.addEventListener('change', (e) => {
  let value;
  switch (e.target.selectedIndex) {
    case 0:      
      value = switchValueMatras.checked ? sm_900_full : s_900_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_sm.jpg" :  "/img/picture_matrass_sm.jpg"
      break;
    case 1:
      value = switchValueMatras.checked ? sm_1200_full : s_1200_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_sm.jpg" :  "/img/picture_matrass_sm.jpg"
      break; 
    case 2:
      value = switchValueMatras.checked ? md_1400_full : md_1400_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_lg.jpg" :  "/img/picture_matrass_lg.jpg"
      break; 
    case 3:
      value = switchValueMatras.checked ? md_1600_full : md_1600_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_lg.jpg" :  "/img/picture_matrass_lg.jpg"
      break; 
    case 4:
      value = switchValueMatras.checked ? md_1800_full : md_1800_one;
      matrasImg.src = switchValueMatras.checked ? "/img/picture_matrass_lg.jpg" :  "/img/picture_matrass_lg.jpg"
      break; 
  }
  matrasValue.textContent = value;
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
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  })
});

