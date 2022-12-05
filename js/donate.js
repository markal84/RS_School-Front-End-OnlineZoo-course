// Imports

import { showBurgerMenu } from "./script.js";
window.addEventListener("load", showBurgerMenu);

// Constans

const amounts = document.querySelectorAll(
  ".progress-bar-graph-amount-inputs input"
);
const labels = document.querySelectorAll("label");
const anotherAmount = document.querySelector("#donateField");

// select circles

function selectAmount(e) {
  let cicrleClicked = e.target;
  let label = cicrleClicked.previousElementSibling;

  for (let i = 0; i < amounts.length; i++) {
    let lebels = amounts[i].previousElementSibling;
    lebels.classList.remove("orange");
    amounts[i].style.setProperty("--zero-opacity", "0");
  }
  cicrleClicked.style.setProperty("--zero-opacity", "1");
  label.classList.add("orange");

  // put selected amount value in amount input
  const amount = label.getAttribute("for");
  console.log(amount);
  anotherAmount.setAttribute("value", `${amount}`);
}

//add selectAmount event for circles

amounts.forEach((el) => {
  el.addEventListener("click", selectAmount);
});

// label 100 selected by default on page load

const setDefault = () => {
  for (let label of labels) {
    if (label.getAttribute("for") === "100") {
      label.classList.add("orange");
      label.nextElementSibling.style.setProperty("--zero-opacity", "1");
    }
  }
};

setDefault();

// select circles if value matach

const selectCircles = () => {
  for (let label of labels) {
    if (anotherAmount.value === label.getAttribute("for")) {
      label.classList.add("orange");
      label.nextElementSibling.style.setProperty("--zero-opacity", "1");
    } else {
      label.classList.remove("orange");
      label.nextElementSibling.style.setProperty("--zero-opacity", "0");
    }
  }
};

//amount input to max 4 numbers

anotherAmount.addEventListener("input", (e) => {
  console.log(e.target.value);
  const maxLength = 4;
  if (e.target.value.length > maxLength) {
    console.log("exeedded - find something to prevent more characters");
    return false;
  }
  selectCircles();
});
