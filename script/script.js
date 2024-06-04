let price = document.querySelectorAll('input')[0];
let calc = document.querySelector('button');
let userRate = document.querySelectorAll('input')[1];
let time = document.querySelectorAll('input')[2]
let answer = document.querySelector('span');

calc.addEventListener('click', ()=>{
    let rate = parseFloat(userRate.value.replace('%','')); // converts string from input into float and replaces '%' with nothing.
    let interest = (price.value * rate * time.value) / 100; //calculation for a simple interest
    answer.innerText = 'Simple interest: R' + interest.toFixed(2); //displaying the answer
})