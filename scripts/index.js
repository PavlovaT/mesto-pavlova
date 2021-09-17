const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.profile-info__edit-button')
const popupCloseBtn = popup.querySelector('.popup__button-close')

let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__field_name_title')
let jobInput = formElement.querySelector('.popup__field_name_description')

let profileName = document.querySelector('.profile-info__name')
let profileJob = document.querySelector('.profile-info__description')



function popupToggle () {
    popup.classList.toggle('popup_open');
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}

function popupClose () { 
          popup.classList.remove('popup_open') 
     }

function formSubmitHandler (evt) {
     evt.preventDefault();
    
     profileName.textContent = nameInput.value;
     profileJob.textContent = jobInput.value;

    popupClose() 
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpenBtn.addEventListener('click', popupToggle)
popupCloseBtn.addEventListener('click', popupClose)