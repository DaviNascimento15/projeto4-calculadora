function toggleTheme() {
    let body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.innerHTML += value;
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '';
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').innerHTML;
        let result = eval(expression);
        document.getElementById('display').innerHTML = result;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Erro';
    }
}
