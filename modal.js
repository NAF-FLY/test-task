let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".popup");
let messageText = document.querySelector(".main-message");
let messageText1 = document.querySelector(".main-message1");
let openPopupButtons = document.querySelectorAll(".button-more");
let closePopupButton = document.querySelector(".close-popup");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    messageText.classList.add("hide");
    messageText1.classList.remove("hide");
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

closePopupButton.addEventListener("click", () => {
  messageText1.classList.add("hide");
  messageText.classList.remove("hide");
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

// navigation

let items = document.getElementsByClassName("items");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let itemIndex = 1;
showItems(itemIndex);

function plusItem(n) {
  showItems((itemIndex += n));
}

function showItems(n) {
  if (n > items.length) {
    itemIndex = 1;
  }
  if (n < 1) {
    itemIndex = items.length;
  }
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  items[itemIndex - 1].style.display = "block";
  dots[itemIndex - 1].className += " active";
}

prev.addEventListener("click", () => {
  plusItem(-1);
});

next.addEventListener("click", () => {
  plusItem(1);
});
