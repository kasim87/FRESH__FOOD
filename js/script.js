window.addEventListener("DOMContentLoaded", () => {
  //Tabs

  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  const showHideTabsContent = (indexNum = 0) => {
    tabsContent.forEach(
      (item, i) => (item.style.display = i === indexNum ? "block" : "none"),
    );

    tabs.forEach((item, i) =>
      i === indexNum
        ? item.classList.add("tabheader__item_active")
        : item.classList.remove("tabheader__item_active"),
    );
  };

  tabs.forEach((item, index) =>
    item.addEventListener("click", () => showHideTabsContent(index)),
  );

  showHideTabsContent();

  //Timer

  const deadline = "2026-06-28";

  const getTimeRemain = (endTime) => {
    let days, hours, minutes, seconds;
    const t = Date.parse(endTime) - Date.parse(new Date());

    if (t < 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const setClock = (time) => {
    const days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds");

    const updateClock = () => {
      const t = getTimeRemain(time);

      days.textContent = t.days < 10 ? `0${t.days}` : t.days;
      hours.textContent = t.hours < 10 ? `0${t.hours}` : t.hours;
      minutes.textContent = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
      seconds.textContent = t.seconds < 10 ? `0${t.seconds}` : t.seconds;

      if (t.total <= 0) {
        clearInterval(interval);
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
  };

  setClock(deadline);

  //Modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[data-close]");

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

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal) {
      closeModal();
    }
  });

  const modelTimer = setTimeout(openModel, 3000);

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
});
