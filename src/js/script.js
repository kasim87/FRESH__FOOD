import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import calc from "./modules/calc";
import cards from "./modules/cards";
import form from "./modules/forms";
import slider from "./modules/slider";
import { openModel } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModel(".modal", modalTimerId),
    5000,
  );

  tabs(".tabheader__item", ".tabcontent", "tabheader__item_active");
  timer("2026-06-29");
  modal("[data-modal]", ".modal", modalTimerId);
  calc();
  cards();
  form("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    currentCounter: "#current",
    totalCounter: "#total",
  });
});
