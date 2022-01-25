'use strict';

//Input for the Celcius to Fahrenheit conversion
const inputCelcius = document.getElementById('input-c');
//Input for the Fahrenheit to Celcius conversion
const inputFahrenheit = document.getElementById('input-f');
//Button for the Celcius to Fahrenheit conversion
const convertFahrenheit = document.getElementById('button-f');
//Button for the Fahrenheit to Celcius conversion
const convertCelcius = document.getElementById('button-c');
//Output for the Celcius to Fahrenheit conversion
const outputFahrenheit = document.getElementById('output-f');
//Output for the Fahrenheit to Celcius conversion
const outputCelcius = document.getElementById('output-c');
//Body
const body = document.querySelector('body');
//Dark mode button
const button = document.getElementById('dark');
//Section
const section = document.querySelector('section');

function convertToFahrenheit(number) {
    if (number === '') {
        outputFahrenheit.innerText = "Please enter a number.";
    } else {    
        if (isNaN(number)) {
            outputFahrenheit.innerText = "Invalid input.";
        } else {

        }
    }
}

convertFahrenheit.addEventListener('click', function() {
    const number = inputCelcius.value.trim();
    if (number === '') {
        outputFahrenheit.innerText = "Please enter a number.";
    } else {    
        if (isNaN(number)) {
            outputFahrenheit.innerText = "Invalid input.";
        } else {
            let output = (number * 1.8 + 32).toFixed(2);
            outputFahrenheit.innerText = `${number}°C is ${output}°F.`;
        }
    }
});

convertCelcius.addEventListener('click', function() {
    const number = inputFahrenheit.value.trim();
    if (number === '') {
        outputCelcius.innerText = "Please enter a number.";
    } else {    
        if (isNaN(number)) {
            outputCelcius.innerText = "Invalid input.";
        } else {
            let output = ((number - 32) * 5 / 9).toFixed(2);
            outputCelcius.innerText = `${number}°F is ${output}°C.`;
        }
    }
});

button.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    inputCelcius.classList.toggle('dark-mode');
    inputFahrenheit.classList.toggle('dark-mode');
    outputCelcius.classList.toggle('dark-mode');
    outputFahrenheit.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode'))
        button.innerText = "Light Mode";
    else
        button.innerText = "Dark Mode";
});