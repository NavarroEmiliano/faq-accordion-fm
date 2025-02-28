const d = document;
const questionBtns = d.querySelectorAll(".faq__question");

questionBtns.forEach((element) => {
  element.addEventListener("click", function () {
    const answer = element.nextElementSibling
    answer.classList.toggle('show-answer')
  });
});
