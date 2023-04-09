export default function ModalOpener() {
  const modalIcon = document.getElementById("modal-icon");
  const modal = document.getElementById("modal");

  const closeModal = function () {
    modalIcon.classList.remove("active");
    modal.classList.add("hidden");
    window.removeEventListener("scroll", scrollToggle);
  };

  const openModal = function () {
    modalIcon.classList.add("active");
    modal.classList.remove("hidden");
    window.addEventListener("scroll", scrollToggle);
  };

  modalIcon.addEventListener("click", () => toggleModal());

  const toggleModal = (e) => {
    console.log("click");
    modal.classList.contains("hidden") ? openModal() : closeModal();
  };

  const scrollToggle = (e) => {
    window.scrollTo(0, 0);
  };
}
