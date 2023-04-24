export const CurrentPage = () => {
  const current = location.pathname;
  const links = document.querySelectorAll("nav ul a");

  links.forEach((link) => {
    if (link.href.includes(current)) {
      link.classList.add("activePage"); // добавляем класс "activePage" к текущей странице
    }
  });
};
