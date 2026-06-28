export default function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
}) {
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    current = document.querySelector(currentCounter),
    total = document.querySelector(totalCounter);

  let slideIndex = 1;

  total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;

  const showSlides = (num) => {
    if (num > slides.length) slideIndex = 1;

    if (num < 1) slideIndex = slides.length;

    slides.forEach((item) => (item.style.display = "none"));

    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;

    slides[slideIndex - 1].style.display = "block";

    dots.forEach((item) => (item.style.opacity = ".5"));

    dots[slideIndex - 1].style.opacity = "1";
  };

  const plusSlider = (num) => showSlides((slideIndex += num));

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];

  indicators.classList.add("carousel-indicators");
  indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
      `;

  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;

    indicators.append(dot);
    dots.push(dot);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideIndex = index + 1;

      showSlides();
    });
  });

  prev.addEventListener("click", () => plusSlider(-1));

  next.addEventListener("click", () => plusSlider(1));

  showSlides(slideIndex);
}
