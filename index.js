const d = document;
const faqList = d.querySelector(".faq__list");

faqList.addEventListener("click", function (e) {
  if(containsClass(e.target,'question') || containsClass(e.target,'faq__question') || containsClass(e.target,'icon-plus') || containsClass(e.target,'icon-minus')) {
    console.log(true)
  }
});

const containsClass = (target, className) => {
  return target.classList.contains(className);
};
