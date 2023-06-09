export function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.right >= 0 &&
    rect.bottom >= 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
