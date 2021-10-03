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

const profilePopupBtn = document.querySelector('.profile-info__edit-button')
const editPopupBtn = document.querySelector('.profile__add-button')

const profilePopup = document.querySelector('.popup_type_profile')
const elmPopup = document.querySelector('.popup_type_elements')

const root = document.querySelector('.root')
const formElement = document.querySelector('.popup__form')
const nameInput = formElement.querySelector('.popup__field_name_title')
const jobInput = formElement.querySelector('.popup__field_name_description')

const profileName = document.querySelector('.profile-info__name')
const profileJob = document.querySelector('.profile-info__description')

const placeArticle = document.querySelector('.elements')
const imagePopup = document.querySelector('.popup_type_image')
const placeImage = imagePopup.querySelector('.popup__image')
const placeTitle = imagePopup.querySelector('.popup__image-title')
const saveBtn = document.querySelector('.popup__button-save')

const popupProfile = document.querySelector('.popup__form_profile')
const popupCard = document.querySelector('.popup__form_card')
const popupCardName = document.querySelector('.popup__field_name_heading')
const popupCardLink = document.querySelector('.popup__field_name_link')

function openPopup (modal) { //открытие
    modal.classList.add('popup_open')
}

function closePopup () { //закрытие попапа
  const activeModal = document.querySelector('.popup_open')
  if (activeModal) {
    activeModal.classList.remove('popup_open')
  }
}

function closePopupBtn (evt) { //закрытие попапа через крестик
  const closeBtn = evt.target;
  if (closeBtn.classList.contains('popup__button-close')) {
    closePopup ()
  }
}

function openProfilePopup () { //вставка значений в попап при открытии редактора профиля
    openPopup (profilePopup)
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}

function handlerProfileSubmit (evt) { //редактирование профиля
    evt.preventDefault();
      
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(evt)
}

function createCard (data) { //вставка темплейта
    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
    const imagePopupBtn = cardElement.querySelector('.element__image')

    imagePopupBtn.src = data.link
    imagePopupBtn.alt = data.name
    cardElement.querySelector('.element__title').textContent = data.name

    const imagePopup = document.querySelector('.popup_type_image')

    imagePopupBtn.addEventListener('click', ()=> {
      openImagePopup(data) 
    })

    cardElement.addEventListener("click", event => { //лайки на карточках
        const like = event.target
        if (like.className === 'element__logo-like') {
            like.classList.add('element__logo-like_active')
        } else if (like.classList.contains('element__logo-like_active')) {
            like.closest('.element__logo-like').classList.remove('element__logo-like_active')
        }
      });

    cardElement.addEventListener('click', deleteCard)

    return cardElement
}

function createProfileCards (evt) { //создание карточки в попапе "создать"
    evt.preventDefault();

    const data = {
      name: popupCardName.value,
      link: popupCardLink.value
    }

    placeArticle.prepend(createCard(data))
    evt.currentTarget.reset()

    closePopup(evt)
}

function renderCards () { //карточки из массива
  initialCards.forEach((item) => {
    placeArticle.append(createCard(item))
  })
}

renderCards ()

function openImagePopup(data) { //открытие попапа с картинкой
    placeImage.src = data.link
    placeImage.alt = data.name
    placeTitle.textContent = data.name;

    openPopup(imagePopup)
}

function deleteCard (evt) { //удаление карточки
  evt.preventDefault();
  const cardElement = evt.currentTarget.closest('.element')

  if (evt.target.classList.contains('element__logo-delete')) {
    cardElement.remove()
  }
}

popupCard.addEventListener('submit', createProfileCards)
popupProfile.addEventListener('submit', handlerProfileSubmit)

root.addEventListener('click', closePopupBtn)

profilePopupBtn.addEventListener('click', openProfilePopup)
editPopupBtn.addEventListener('click', () => openPopup (elmPopup))