const toggleIcon = document.getElementById("toggle");

toggleIcon.addEventListener("click", () =>
  toggleIcon.parentNode.classList.toggle("active")
);
