import * as flsFunctions from "./modules/functions.js";
import ModalOpener from "./modules/modal.js";
import { CountUp } from "countup.js";
import faqOpener from "./modules/faqOpener.js";

flsFunctions.isWebP();

ModalOpener();

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
faqList.addEventListener("click", (e) => faqOpener(e));
