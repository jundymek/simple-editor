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
toLocalStorage.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(toLocalStorage)
    localStorage.setItem(firstNameField, firstNameValue);
    localStorage.setItem(lastNameField, lastNameValue);
});


const backside = document.querySelector('.main');
const fromLocalStorage = document.querySelector('.button--load--js')
fromLocalStorage.addEventListener('click', (e) => {
    e.preventDefault()
    firstNameValue = localStorage.getItem(firstNameField);
    lastNameValue = localStorage.getItem(lastNameField);
    backside.classList.toggle('main--visible');
    const tableFirstItem = document.querySelector('.table-item--js')
    const tableSecondItem = document.querySelector('.table-item--second--js')
    tableFirstItem.innerHTML = firstNameField
    tableSecondItem.innerHTML = lastNameField
    const tableFirstValue = document.querySelector('.table-value--js')
    const tableSecondValue = document.querySelector('.table-value--second--js')
    tableFirstValue.innerHTML = firstNameValue
    tableSecondValue.innerHTML = lastNameValue
})

const backsideExit = document.querySelector('.backside__exit--js')
backsideExit.addEventListener('click', (e) => {
    e.preventDefault();
    backside.classList.toggle('main--visible');
})
// localStorage.clear()
