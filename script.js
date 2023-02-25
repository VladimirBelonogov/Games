const heading = document.querySelector('h1');
const input = document.querySelector('input');
const button = document.querySelector('button');

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let firstNumber = randomIntFromInterval(2, 23);
let twoNumber = randomIntFromInterval(2, 23);
heading.textContent = `Сколько будет ${firstNumber} * ${twoNumber}?`;
button.addEventListener('click', (event) => {
    if(input.value == firstNumber * twoNumber){
        alert('Харош, ауууф, давай ещё разок!');
        firstNumber = randomIntFromInterval(2, 23);
        twoNumber = randomIntFromInterval(2, 23); 
        heading.textContent = `Сколько будет ${firstNumber} * ${twoNumber}?`;
        input.value = '';
    } else {
        alert('Братик, пересчитай, пример несложный.');
    }
});