const popup = document.querySelector('.popup')
const popupOpenBtn = document.querySelector('.profile-info__edit-button')
const popupCloseBtn = popup.querySelector('.popup__button-close')

function popupToggle () {
    popup.classList.toggle('popup_open')
}

popupOpenBtn.addEventListener('click', popupToggle)
popupCloseBtn.addEventListener('click', popupToggle)


let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__descripton')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.


// Получите значение полей jobInput и nameInput из свойства value
    nameInput.value;
    jobInput.value;

// Выберите элементы, куда должны быть вставлены значения полей
     let profileName = document.querySelector('.profile-info__name')
     let profileJob = document.querySelector('.profile-info__description')
    
// Вставьте новые значения с помощью textContent
     profileName.textContent = nameInput.value;
     profileJob.textContent = jobInput.value;
}

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);