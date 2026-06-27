function modal() {
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  const openModel = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    clearInterval(openModel);
  };

  modalTrigger.forEach((btn) => btn.addEventListener("click", openModel));

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.hasAttribute("data-close")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  const modelTimer = setTimeout(openModel, 10000);

  const showModelByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModel();
      window.removeEventListener("scroll", showModelByScroll);
    }
  };

  window.addEventListener("scroll", showModelByScroll);
}

export default modal;
