const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    const active = document.querySelector(".active");
    panel.classList.add("active");
    active.classList.remove("active");
  });
});
