const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;
const step = 1;

function increment() {
    counterValue += step;
    value.textContent = counterValue;
}

function decrement() {
    counterValue -= step;
    value.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);