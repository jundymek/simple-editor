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


const backside = document.querySelector('.main');
const fromLocalStorage = document.querySelector('.button--load--js')
fromLocalStorage.addEventListener('click', () => {
    firstInput.value = localStorage.getItem(firstNameField);
    secondInput.value = localStorage.getItem(lastNameField);
    firstNameValue = localStorage.getItem(firstNameField);
    lastNameValue = localStorage.getItem(lastNameField);
    backside.classList.toggle('main--visible');
})

const backsideExit = document.querySelector('.backside__exit--js')
backsideExit.addEventListener('click', () => {
    backside.classList.toggle('main--visible');
})
// localStorage.clear()
