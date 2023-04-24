import * as flsFunctions from "./modules/functions.js";
import ModalOpener from "./modules/modal.js";
import { CountUp } from "countup.js";
import faqOpener from "./modules/faqOpener.js";
import { CurrentPage } from "./modules/currentPage.js";
import { isElementInViewport } from "./modules/isElementInViewport.js";

flsFunctions.isWebP();

ModalOpener();
CurrentPage();

window.onload = function () {
  const numb1 = document.getElementById("num1");
  const numb2 = document.getElementById("num2");

  var countUp = new CountUp("num1", numb1.innerText, {
    enableScrollSpy: true,
    // scrollSpyOnce,
  });
  var countUp2 = new CountUp("num2", numb2.innerText, {
    enableScrollSpy: true,
    // scrollSpyOnce,
  });
  countUp.start();
  countUp2.start();
};
//FAQ section - open questions when they clicked
const faqList = document.getElementById("faq-list");

faqList && faqList.addEventListener("click", (e) => faqOpener(e));

/////
const listItems = document.querySelectorAll(".tarif-card");
const middleIndex = Math.floor(listItems.length / 2); // индекс среднего элемента списка

listItems[middleIndex].classList.add("focused"); // устанавливаем фокус на средний элемент при загрузке страницы

listItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    listItems[middleIndex].classList.remove("focused");
    item.classList.add("focused"); // устанавливаем фокус на элемент, на который наведена мышь
  });
  item.addEventListener("mouseleave", () => {
    if (!document.activeElement.closest(".tarif-card")) {
      item.classList.remove("focused");
      listItems[middleIndex].classList.add("focused"); // убираем фокус, если курсор покинул список ul
    }
  });
});

//Find all elements needed to change opasity when scroll in view

const fadeElems = document.querySelectorAll(".fade-in-right");
window.addEventListener("scroll", function () {
  for (let i = 0; i < fadeElems.length; i++) {
    if (isElementInViewport(fadeElems[i])) {
      fadeElems[i].classList.add("visible");
    } else {
      fadeElems[i].classList.remove("visible");
    }
  }
});

//////////////////////
