const input = document.querySelector('#validation-input');
input.addEventListener('blur', notFocus);

function notFocus() {
    const setLength = Number(input.dataset.length);
    let enteredLength = input.value.length;

    if (setLength === enteredLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
    };
};