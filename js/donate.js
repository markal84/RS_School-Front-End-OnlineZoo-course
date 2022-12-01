const amounts = document.querySelectorAll(
  ".progress-bar-graph-amount-inputs input"
);
const labels = document.querySelectorAll("label");
//console.log(amounts);

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
}

amounts.forEach((el) => {
  el.addEventListener("click", selectAmount);
});

// label 100 selected by default on page load

for (let label of labels) {
  if (label.getAttribute("for") === "100") {
    label.classList.add("orange");
    label.nextElementSibling.style.setProperty("--zero-opacity", "1");
  }
}

// put selected amount value in amout input

//amount input to max 4 numbers

const anotherAmount = document.querySelector("#donateField");
//console.log(anotherAmount);

anotherAmount.addEventListener("input", (e) => {
  console.log(e.target.value);
  const maxLength = 4;
  if (e.target.value.length >= maxLength) {
    console.log("exeedded - find something to prevent more characters");
    return false;
  }
});
