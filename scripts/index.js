import Card from './card.js'
import FormValidator from './formValidator.js'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const root = document.querySelector('.root');
const profilePopup = document.querySelector('.popup_type_profile');
const elmPopup = document.querySelector('.popup_type_elements');
const profilePopupBtn = document.querySelector('.profile-info__edit-button');
const editPopupBtn = document.querySelector('.profile__add-button')
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__field_name_title');
const jobInput = formElement.querySelector('.popup__field_name_description');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__description');
const popupProfile = document.querySelector('.popup__form_profile')
const imagePopup = document.querySelector('.popup_type_image')
const popupCard = document.querySelector('.popup__form_card')
const placeArticle = document.querySelector('.elements')
const popupCardName = document.querySelector('.popup__field_name_heading')
const popupCardLink = document.querySelector('.popup__field_name_link')


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_type_block',
  inputErrorClass: 'popup__field_state_invalid',
  errorClass: 'error'
}

const validatorProfilePopup = new FormValidator(validationConfig, profilePopup);
const validatorElmPopup= new FormValidator(validationConfig, elmPopup);

  validatorProfilePopup.enableValidation();
  validatorElmPopup.enableValidation();

//открытие оставляю
function openPopup(modal) {
  modal.classList.add('popup_open')
  root.addEventListener('keydown', keyHandler)
}

//закрытие попапа оставляю
function closePopup() {
const activeModal = document.querySelector('.popup_open')
if (activeModal) {
  activeModal.classList.remove('popup_open')
}
root.removeEventListener('keydown', keyHandler)
}

//закрытие попапа через крестик  оставляю
function closePopupBtn(evt) {
  const closeBtn = evt.target;
  if (closeBtn.classList.contains('popup__button-close')) {
    popupCard.reset();
    closePopup ()
  }
}

//закрытие попапа через оверлей  оставляю
function closeClickOverlay(evt) {  
 if (evt.target === evt.currentTarget) {
  closePopup()
 }
}

//закрытие попапа через Esc  оставляю
function keyHandler(evt) { 
if (evt.key === 'Escape') {
  closePopup()
}
}

//вставка значений в попап при открытии редактора профиля
function openProfilePopup() { 
  openPopup (profilePopup)
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
}

//редактирование профиля  оставляю
function handlerProfileSubmit(evt) { 
  evt.preventDefault();
    
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup()
}

//создание карточки в попапе "создать" 
function createProfileCards(data) {
  const newCard = new Card(data.name, data.link, '#element-template').render()
 
  return newCard
}

//перебор массива
const renderElements = () => {
  initialCards.forEach((item)=> {
    placeArticle.append(createProfileCards(item));
  })
}

renderElements()

popupCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  const data = {
    name: popupCardName.value,
    link: popupCardLink.value
  }
  placeArticle.prepend(createProfileCards(data))
  evt.currentTarget.reset()
  closePopup()
})

root.addEventListener('click', closePopupBtn)
profilePopup.addEventListener('click', closeClickOverlay)
elmPopup.addEventListener('click', closeClickOverlay)
imagePopup.addEventListener('click', closeClickOverlay)
popupProfile.addEventListener('submit', handlerProfileSubmit)
profilePopupBtn.addEventListener('click', openProfilePopup)

editPopupBtn.addEventListener('click', () => {
  const submitButton = elmPopup.querySelector('.popup__button-save')
  openPopup(elmPopup)
  validatorElmPopup.blockButton(submitButton)
})