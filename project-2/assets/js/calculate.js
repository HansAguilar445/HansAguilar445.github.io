'use strict';

//All the different important variables
const input = document.getElementById('input');
const output = document.getElementById('output');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const clearI = document.getElementById('clearI')
let equation = '';
let operationActive = false;
let decimalActive = false;
let piActive = false;
let calculated = false;

numbers.forEach(element => {
    element.addEventListener('click', function() {
        if (element.value.includes('Pi')) {
            if (!piActive) {
                output.innerText = Math.PI.toFixed(5);
            }
            piActive = true;
        }
        else {
            if (!piActive) {
                if (calculated && !operationActive) {
                    clearCalc();
                    calculated = false;
                }
                if (output.innerText === '0') {
                    if (element.value.includes('.')) {
                        output.innerText += element.value;
                        decimalActive = true
                    } else {
                        output.innerText = element.value;
                    }
                } else {
                    if (element.value.includes('.')) {
                        if (!decimalActive) {
                            output.innerText += element.value;
                            decimalActive = true;
                        }
                    } else
                        output.innerText += element.value;
                }
            }
        }
    });
});

operations.forEach(element => {
    element.addEventListener('click', function() {
        if (operationActive) {
            if (equation.charAt(equation.length-1) === ' ') {
                //Removes other operations
                for (let i = 0; i < 3; i++) {
                    let equationSplit = equation.split('');
                    equationSplit.pop();
                    equation = equationSplit.join('');
                }
            } 
        } else {
            //Sets up the next part
            equation += output.innerText;
            input.innerText = equation;
            operationActive = true;
            decimalActive = false;
            piActive = false;
        }
        if (element.value.includes('^')) {
            equation += ' ** ';
            
        } else {
            equation += ` ${element.value} `;
        }   
        input.innerText = equation;
        output.innerText = '0';
    });
});

clear.addEventListener('click', function() {
    clearCalc();
});

equals.addEventListener('click', function() {
    calculate();
});

function clearCalc() {
    equation = '';
    output.innerText = '0';
    input.innerHTML = '&nbsp;';
    decimalActive = false;
    operationActive = false;
    calculated = false;
    piActive = false;
}

function calculate() {
    equation += output.innerText;
    let result = Function('return ' + equation)();
    equation += ' = ';
    input.innerText = equation;
    equation = '';
    output.innerText = result.toFixed(5);
    calculated = true;
    decimalActive = false;
    operationActive = false;
}

clearI.addEventListener('click', function() {
    output.innerText = '0';
    decimalActive = false;
    piActive = false;
});