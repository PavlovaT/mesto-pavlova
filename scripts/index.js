const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.profile-info__edit-button')
const popupCloseBtn = popup.querySelector('.popup__button-close')

let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__field_name')
let jobInput = formElement.querySelector('.popup__field_descripton')

let profileName = document.querySelector('.profile-info__name')
let profileJob = document.querySelector('.profile-info__description')
let popupSave = popup.querySelector('.popup__button-save')



function popupToggle () {
    popup.classList.toggle('popup_open');
    nameInput.textContent = profileName.value;
    jobInput.textContent = profileJob.value;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.
    
// Вставьте новые значения с помощью textContent
     profileName.textContent = nameInput.value;
     profileJob.textContent = jobInput.value;
}

function popupClose () {
     popup.classList.toggle('popup')
}

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

popupOpenBtn.addEventListener('click', popupToggle)
popupCloseBtn.addEventListener('click', popupToggle)
popupSave.addEventListener('click', popupClose);