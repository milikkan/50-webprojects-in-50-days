const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let filterBlur = 30;

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  filterBlur -= 0.3;
  bg.style.filter = `blur(${filterBlur}px)`;
};

let interval = setInterval(blurring, 30);
