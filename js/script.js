let body = document.querySelector(".page-body");
let containerPopup = document.querySelector(".popup-container");
let popupOpenClose = function (isClose, selectorName) {
  if (isClose) {
    //если попап закрыт
    let scrollPosition = window.pageYOffset; //текущая позиция на странице
    body.classList.add("page-overflow"); //запрет на скролл страницы
    body.style.top = "-" + scrollPosition + "px"; // добавить положение со значением прокрутки
    selectorName.classList.add("popup-visible"); //сделать попап видимым
  } else {
    //если попап открыт
    let openPopup = document.querySelector(".popup-visible"); //найти текущий открытый попап
    openPopup.classList.remove("popup-visible"); //скрыть попап
    body.classList.remove("page-overflow"); //разрешить скролл
    window.scroll(0, scrollPosition); //скролл страницы до нужного значения
  }
};
//добавление товара в корзину
let payButtons = document.querySelectorAll(".button-pay");
let orderPopup = document.querySelector(".order-popup");
for (i = 0; i < payButtons.length; i++) {
  let payButton = payButtons[i];
  payButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupOpenClose(true, orderPopup);
  });
}

//Закрытие попапа
let closeButtons = document.querySelectorAll(".close-popup"); //на крестик
for (let i = 0; i < closeButtons.length; i++) {
  let closeButton = closeButtons[i];
  closeButton.addEventListener("click", function () {
    popupOpenClose(false);
  });
}
document.addEventListener("keydown", function (evt) {
  //на esc
  if (evt.keyCode === 27) {
    popupOpenClose(false);
  }
});
containerPopup.addEventListener("click", function () {
  popupOpenClose(false);
});

//Попап обратной связи
let contactButton = document.querySelector(".contacts-button");
let contactPopup = document.querySelector(".contact-popup");
contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOpenClose(true, contactPopup);
});
//Попап карты
let mapButton = document.querySelector(".map-button");
let mapPopup = document.querySelector(".map-popup");
mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOpenClose(true, mapPopup);
});
