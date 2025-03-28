const form = document.getElementById('numberForm');
const outputDiv = document.getElementById('outputDiv');
const glassBox = document.querySelector('.glass-box');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('angka').value.trim();

    // Regex untuk format angka biasa & scientific number
    const numberPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

    let message = document.createElement('p');

    // Reset class shadow
    glassBox.classList.remove('correct', 'incorrect');

    if (numberPattern.test(inputValue)) {
        message.textContent = `Yes, it is a number`;
        message.classList.add('success');
        glassBox.classList.add('correct');
    } else {
        message.textContent = `No, it is not a number`;
        message.classList.add('error');
        glassBox.classList.add('incorrect');
    }

    outputDiv.innerHTML = '';
    outputDiv.appendChild(message);
});
