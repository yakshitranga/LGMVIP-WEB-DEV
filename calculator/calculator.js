let result = document.getElementById('result');
let buttons = document.querySelectorAll('button[type="button"]');
let clearButton = document.getElementById('clear');

let currentOperation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === '=') {
            try {
                result.value = eval(currentOperation);
                currentOperation = result.value;
            } catch (e) {
                result.value = 'Error';
            }
        } else if (value === 'C') {
            result.value = '';
            currentOperation = '';
        } else {
            currentOperation += value;
            result.value = currentOperation;
        }
    });
});

clearButton.addEventListener('click', () => {
    result.value = '';
    currentOperation = '';
});