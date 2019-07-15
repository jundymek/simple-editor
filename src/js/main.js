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

const toLocalStorage = document.querySelector('.button--save-js');
toLocalStorage.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(toLocalStorage)
    localStorage.setItem(firstNameField, firstNameValue);
    localStorage.setItem(lastNameField, lastNameValue);
});


const backside = document.querySelector('.main');
const fromLocalStorage = document.querySelector('.button--load-js')
const tableFirstValue = document.querySelector('.table__td--js')
const tableSecondValue = document.querySelector('.table__td--second-js')
fromLocalStorage.addEventListener('click', (e) => {
    const tableFirstItem = document.querySelector('.table__th--js')
    const tableSecondItem = document.querySelector('.table__th--second-js')
    e.preventDefault()
    firstNameValue = localStorage.getItem(firstNameField);
    lastNameValue = localStorage.getItem(lastNameField);
    backside.classList.toggle('main--visible');
    tableFirstItem.innerHTML = firstNameField
    tableSecondItem.innerHTML = lastNameField
    tableFirstValue.innerHTML = firstNameValue
    tableSecondValue.innerHTML = lastNameValue
})

const backsideExit = document.querySelector('.backside__exit--js')
backsideExit.addEventListener('click', (e) => {
    e.preventDefault();
    backside.classList.toggle('main--visible');
})

const clearLocalstorage = document.querySelector('.button--clear-js')
clearLocalstorage.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    tableFirstValue.innerHTML = '';
    tableSecondValue.innerHTML = '';
})
