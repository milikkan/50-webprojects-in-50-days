const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
const numCircles = circles.length;

next.addEventListener("click", () => {
  currentActive += 1;
  if (currentActive > numCircles) {
    currentActive = numCircles;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive -= 1;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  const numActives = actives.length;

  progress.style.width = ((numActives - 1) / (numCircles - 1)) * 100 + "%";

  if (numActives == numCircles) {
    next.disabled = true;
  } else if (numActives == 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
