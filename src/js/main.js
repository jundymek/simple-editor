"use strict";


const firstInput = document.querySelector('.form-field__input--js');
let firstNameValue = firstInput.value;
const firstNameField = firstInput.name;

const secondInput = document.querySelector('.form-field__input--js1');
let lastNameValue = secondInput.value;
const lastNameField = secondInput.name;

firstInput.addEventListener('keyup', (e) => {
    firstNameValue = e.target.value;
})

secondInput.addEventListener('keyup', (e) => {
    lastNameValue = e.target.value;
})

const toLocalStorage = document.querySelector('.button--save--js');
toLocalStorage.addEventListener('click', () => {
    console.log(toLocalStorage)
    localStorage.setItem(firstNameField, firstNameValue);
    localStorage.setItem(lastNameField, lastNameValue);
});

const fromLocalStorage = document.querySelector('.button--load--js')
fromLocalStorage.addEventListener('click', () => {
    firstInput.value = localStorage.getItem(firstNameField);
    secondInput.value = localStorage.getItem(lastNameField);
    firstNameValue = localStorage.getItem(firstNameField);
    lastNameValue = localStorage.getItem(lastNameField);
})
// localStorage.clear()
