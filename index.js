const d = document;
const faqList = d.querySelector(".faq__list");

faqList.addEventListener("click", function(event) {
  const btnClicked = event.target.closest(".faq__question");

  if (!btnClicked) return;

  const iconPlus = btnClicked.querySelector(".icon-plus");
  const iconMinus = btnClicked.querySelector(".icon-minus");
  const answer = btnClicked.nextElementSibling;

  faqList.querySelectorAll(".faq__question").forEach((btn) => {
    if (btn !== btnClicked) {
      const otherIconPlus = btn.querySelector(".icon-plus");
      const otherIconMinus = btn.querySelector(".icon-minus");
      const otherAnswer = btn.nextElementSibling;

      otherIconPlus.classList.remove("hidden");
      otherIconMinus.classList.add("hidden");
      otherAnswer.classList.remove("show-answer");
    }
  });

  iconPlus.classList.toggle("hidden");
  iconMinus.classList.toggle("hidden");
  answer.classList.toggle("show-answer");
});
