export default class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._card = null;
        this._popup = document.querySelector('.popup_type_image');
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    //вставляем данные
    render() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._card = this._getTemplate();
        const putLike = this._card.querySelector('.element__logo-like');
        const deleteCard = this._card.querySelector('.element__logo-delete');

        // Добавим данные
        this._card.querySelector('.element__image').src = this._link;
        this._card.querySelector('.element__image').alt = this._name;
        this._card.querySelector('.element__title').textContent = this._name;

        this._setEventListeners(putLike, deleteCard)

        // Вернём элемент наружу
        return this._card;
    }

    //открытие попапа с картинкой
     _openPopupImage() {
         this._popup.querySelector('.popup__image').src = this._link;
         this._popup.querySelector('.popup__image-title').textContent = this._name;
         this._popup.classList.add('popup_open');
    }

    //обработчик событий
    _setEventListeners(putLike, deleteCard) {
        this._card.querySelector('.element__image').addEventListener('click', () => {
            this._openPopupImage()
        });

        putLike.addEventListener('click', () => {
            putLike.classList.toggle('element__logo-like_active');
        })

        deleteCard.addEventListener('click', () => {
            this._card.remove();
            this._card.innerHTML = '';
        })
      }
}