// основные инпуты

const inputCottage = ['до 100 кв.м', 'до 150 кв.м', 'до 200 кв.м', 'до 250 кв.м', 'до 300 кв.м', 'до 350 кв.м'];
const inputSquareFlatRepair = ['до 40 кв. м', 'до 50 кв. м', 'до 60 кв. м',	'до 70 кв. м', 'до 80 кв. м', 'до 90 кв. м', 'до 100 кв. м']


const flat = {
    express: {
       one: '2500',
       two: '3000',
       three: '3500',
       four: '4000'
    },
    general: {
        one: '4000',
        two: '5000',
        three: '6500',
        four: '7000'
    },
    vip: {
        one: '13000',
        two: '17000',
        three: '21000',
        four: '24000'
    }
}


const cottage = {
    express: {
        100: '4000',
        150: '4500',
        200: '5000',
        250: '5500',
        300: '6000',
        350: '6500'
    },
    general: {
        100: '7000',
        150: '10000',
        200: '13000',
        250: '17000',
        300: '19000',
        350: '22000'
    },
    vip: {
        100: '20000',
        150: '24000',
        200: '28000',
        250: '32000',
        300: '36000',
        350: '38000'
    }
} 


const totalTitle = document.querySelector('.calculator-total__heading');
const totalSubtitle = document.querySelector('.calculator-total__subtitle');
const totalSquare = document.querySelector('.calculator-total__square');

const serviceClean = document.querySelector('#service_calc');
const serviceType = document.querySelector('#type_calc');
const serviceSquare = document.querySelector('#square_calc');

const createOption = (option) => {
    const temp = document.createElement('option');
    temp.classList.add("calculator__select--text");
    temp.textContent = option
    return temp;
}

serviceClean.addEventListener('change', () => {
    if (serviceClean.selectedIndex === 1) {        
        serviceSquare.innerHTML = '';
        inputCottage.forEach((option) => {
            serviceSquare.appendChild(createOption(option))
        })       
    } 
});

serviceType.addEventListener('change', () => {
    if (serviceType.selectedIndex === 3) {
        document.querySelector('#after_repair_select').classList.remove('select__hidden');
        serviceSquare.innerHTML = '';
        inputSquareFlatRepair.forEach((option) => {
            serviceSquare.appendChild(createOption(option))
        })     
    }
})

const changeSelect = (input, total) => {
    input.addEventListener('change', (e) => {
        total.textContent = e.target.value;
    })
}

changeSelect(serviceClean, totalTitle);
changeSelect(serviceType, totalSubtitle);
changeSelect(serviceSquare, totalSquare);


// Дополнительно
array = [];
const calculatorItems = document.querySelectorAll('.calculator-card');
calculatorItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.add('calculator-card--active');
        const res = item.children[2]
                    .textContent.split(' ')
                    .filter((item) => {
                        let regexp = /^[0-9]+/;
                        return item.match(regexp);             
                    })
                    [0];  
        array.push(item);
        sumPrice(res);
        addNote(item);
    })
});

// createStrings = (array) => {
//     array.forEach(item => createString(item))
// }

addNote = (item) => {
    const list = document.querySelector('.calculator-total__list');
    const template = document.querySelector('#calc__row').content.querySelector('.calculator-total__row');
    const element = template.cloneNode(true);
    element.querySelector('.calculator-total__title').textContent = item.children[1].textContent;
    element.querySelector('.calculator-total__price').textContent = item.children[2].textContent;  
    list.appendChild(element);
}

const sumPrice = (price) => {
    const sum = document.querySelector('#sum_price');
    let res = parseInt(sum.textContent, 10);
    const priceInt = parseInt(price, 10);
    res += priceInt;
    sum.textContent = `${res} руб`;
}