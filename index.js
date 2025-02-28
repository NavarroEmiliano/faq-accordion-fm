const d = document;
const questionBtns = d.querySelectorAll(".faq__question");
const allAnswers = d.querySelectorAll('.faq__answer')

questionBtns.forEach((element) => {
  element.addEventListener("click", function () {
    const minusIcon = element.querySelector('.icon-minus');
    const plusIcon = element.querySelector('.icon-plus')
    cleanAnswers()

    minusIcon.classList.toggle('hidden');
    plusIcon.classList.toggle('hidden');
    const answer = element.nextElementSibling
    answer.classList.toggle('show-answer')
  });
});

const cleanAnswers = () => {
    allAnswers.forEach(element => {
        element.classList.remove('show-answer')
    })
}
