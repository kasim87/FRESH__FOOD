const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);

  modal.style.display = "none";
  document.body.style.overflow = "";
};

const openModel = (modalSelector, modalTimerId) => {
  const modal = document.querySelector(modalSelector);

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
};

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) =>
    btn.addEventListener("click", () => openModel(modalSelector, modalTimerId)),
  );

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.hasAttribute("data-close")) {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.style.display === "block") {
      closeModal(modalSelector);
    }
  });

  const showModelByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModel(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModelByScroll);
    }
  };

  window.addEventListener("scroll", showModelByScroll);
}

export default modal;
export { closeModal, openModel };
