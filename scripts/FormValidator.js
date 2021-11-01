export default class FormValidator {
    // constructor (data, form) {
    //     
    // }
}




// const toggleButtonState = (button, isActive, config) => {
//     if(isActive) {
//         button.classList.remove(config.inactiveButtonClass);
//         button.disabled = false;
//         console.log('active')
//     } else {
//         button.classList.add(config.inactiveButtonClass);
//         button.disabled = 'disabled';
//         console.log('not active')
//     }
// }

// function showError(errorElement, inputElement, config) {
//     errorElement.textContent = inputElement.validationMessage
//     inputElement.classList.add(config.inputErrorClass)
// }

// function hideError(errorElement, inputElement, config) {
//     errorElement.textContent = ''
//     inputElement.classList.remove(config.inputErrorClass)
// }

// const checkInputValidity = (formElement, inputElement, config) => {
//     const isInputNotValid = !inputElement.validity.valid
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     if(isInputNotValid) {
//         showError(errorElement, inputElement, config)
//     } else {
//         hideError(errorElement, inputElement, config)
//     }
// }

// const setEventListers = (formElement, config) => {
//     const inputList = formElement.querySelectorAll(config.inputSelector)
//     const submitButton = formElement.querySelector(config.submitButtonSelector)

//     Array.from(inputList).forEach(inputElement => {
//         inputElement.addEventListener('input', (evt) => {
//             checkInputValidity(formElement, inputElement, config)
//             toggleButtonState(submitButton, formElement.checkValidity(), config)
//         })
//     })

//     formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault()
//     })
// }

// const enableValidation = (config) => {
//     const forms = document.querySelectorAll(config.formSelector)
    
//     Array.from(forms).forEach(formElement => {
//         setEventListers(formElement, config)
//     })
// }

// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__field',
//   submitButtonSelector: '.popup__button-save',
//   inactiveButtonClass: 'popup__button-save_type_block',
//   inputErrorClass: 'popup__field_state_invalid',
//   errorClass: 'error'
// }

// enableValidation(validationConfig)