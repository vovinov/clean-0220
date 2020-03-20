const typeClean = document.getElementById('type_calc');
const meters = document.getElementById('meters_calc');
const serviceClean = document.getElementById('service_calc');
const afterRepair = document.getElementById('after_repair_select');
const form = document.getElementById('form_calc');

let price;

form.addEventListener("change",  (e) => {
    const event = e.target;
    if(typeClean.value === 'Экспресс уборка') {
        if(meters.value <= 50) {
            price = 2500;
        } else if (meters.value > 50 && meters.value <= 70) {
            price = 3000
        } else if (meters.value > 70 && meters.value <= 90) {
            price = 3500
        } else if (meters.value > 90 && meters.value <= 120) {
            price = 4000
        } else if (meters.value > 120) {
            price = (Number(meters.value)-120) * 75 + 4000
        }
    }
    if(typeClean.value === 'Генеральная уборка') {
        if(meters.value <= 50) {
            price = 4000;
        } else if (meters.value > 50 && meters.value <= 70) {
            price = 5000
        } else if (meters.value > 70 && meters.value <= 90) {
            price = 6500
        } else if (meters.value > 90 && meters.value <= 120) {
            price = 7000
        } else if (meters.value > 120) {
            price = (Number(meters.value)-120) * 90 + 7000
        }
    }

    if(typeClean.value === 'VIP уборка') {
        console.log(meters.value);
        if(meters.value <= 50) {
            price = 13000
        } else if (meters.value > 50 && meters.value <= 70) {
            price = 17000
        } else if (meters.value > 70 && meters.value <= 90) {
            price = 21000
        } else if (meters.value > 90 && meters.value <= 120) {
            price = 24000
        } else if (meters.value > 120) {
            price = (Number(meters.value) - 120) * 160 + 24000
        }
    }
    sumPrice(price);
});

const sumPrice = (price) => {
    const sum = document.getElementById('sum_price');
    sum.innerText = price;
}