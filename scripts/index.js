import Card from './Card.js'

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

//лишнее
// initialCards.forEach(data => {
//   const cardElement = new Card(data, '#element-template').render();
  
//   placeArticle.append(cardElement);
//   console.log('work')
// });

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

  closePopup(evt)
}

//создание карточки в попапе "создать"  ВОТ ЭТА ФУНКЦИЯ 
function createProfileCards(data) {
  const newCard = new Card(data.name, data.link, '#element-template').render()
  console.log(newCard)
  return newCard
}

//перебор массива  ВОТ ТУТ
const renderElements = () => {
  initialCards.forEach((item)=> {
    placeArticle.append(createProfileCards(item));
  })
  console.log(123)
}

renderElements()

//ВОТ ЗДЕСЬ СЛУШАТЕЛЬ
popupCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  createProfileCards()
  console.log(50)
})

root.addEventListener('click', closePopupBtn)
profilePopup.addEventListener('click', closeClickOverlay)
elmPopup.addEventListener('click', closeClickOverlay)
imagePopup.addEventListener('click', closeClickOverlay)
profilePopupBtn.addEventListener('click', openProfilePopup)
popupProfile.addEventListener('submit', handlerProfileSubmit)

editPopupBtn.addEventListener('click', () => {
  openPopup(elmPopup)

  // const submitButton = elmPopup.querySelector('.popup__button-save')
  // toggleButtonState(submitButton, false, validationConfig)
})