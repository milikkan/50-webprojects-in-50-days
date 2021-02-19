const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.parentNode.classList.toggle("active");
  });
});
