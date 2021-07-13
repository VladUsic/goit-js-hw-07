const nameInput = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

nameInput.addEventListener('input', inputData);

function inputData(event) {
    span.textContent = event.currentTarget.value;
    if (span.textContent === '') {
        span.textContent = 'незнакомец';
    }
};