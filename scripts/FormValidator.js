export default class FormValidator {
    constructor (data, form) {
        this._form = form;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass =  data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
    }

    _isValidForm() {
        const inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
        return !inputList.some(inputElement => {
            return !inputElement.validity.valid
        })
    }

    _showError(errorElement, inputElement) {
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);
    }
    
    _hideError(errorElement, inputElement) {
        errorElement.textContent = '';
        inputElement.classList.remove(this._inputErrorClass);
        console.log('work hide')
    }

    //активная/заблокированная кнопка
    _toggleButtonState(button){
        if(this._isValidForm()) {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
            console.log('active')
        } else {
            button.classList.add(this._inactiveButtonClass)
            button.disabled = true;
            console.log('not active')
        }
    }

    resetValidation() {
        const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        const submitButton = this._form.querySelector(this._submitButtonSelector);
        
        this._toggleButtonState(submitButton);
        inputList.forEach((inputElement) => {
            const errorElement = this._form.querySelector(`#${inputElement.id}-error`); 
            this._hideError(errorElement, inputElement)
        })
        console.log('work')
    }

    _checkInputValidity (inputElement) {
        const isInputNotValid = !inputElement.validity.valid
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`); 

        if (isInputNotValid) {
          this._showError(errorElement, inputElement);
        } else {
          this._hideError(errorElement, inputElement);
        }
    }

    _setEventListeners() {
        const inputList = this._form.querySelectorAll(this._inputSelector);
        const submitButton = this._form.querySelector(this._submitButtonSelector);

        Array.from(inputList).forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(submitButton);
            });
        });

        this._form.addEventListener('submit', (evt) => { 
            evt.preventDefault()
        })
    }

    enableValidation() {
        this._setEventListeners();
    }
}