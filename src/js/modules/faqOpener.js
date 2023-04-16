const faqOpener = (e) => {
  if (e.target.classList.contains("faq-ask")) {
    if (e.target.classList.contains("ask-open")) {
      e.target.classList.remove("ask-open");
      e.target.firstElementChild.innerText = "+";
      e.target.nextElementSibling.classList.remove("answer-open");
    } else {
      e.target.classList.add("ask-open");
      e.target.firstElementChild.innerText = "-";
      e.target.nextElementSibling.classList.add("answer-open");
    }
  }
};

export default faqOpener;
