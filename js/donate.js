const amounts = document.querySelectorAll(
  ".progress-bar-graph-amount-inputs label"
);
console.log(amounts);

//circles selector and amounts

function selectAmount(e) {
  let cicrleClicked = e.target;
  let orangeCircleSibling = cicrleClicked.nextElementSibling;
  //console.log(orangeCircles);
  //console.log(cicrleClicked);
  for (let i = 0; i < amounts.length; i++) {
    let orangeCircles = amounts[i].nextElementSibling;
    //console.log(label);
    orangeCircles.style.setProperty("--zero-opacity", "0");
    //console.log(inputTest);
    amounts[i].classList.remove("orange");
    //inputTest.style.setProperty("--zero-opacity", "0");
  }
  cicrleClicked.classList.add("orange");
  orangeCircleSibling.style.setProperty("--zero-opacity", "1");
}

amounts.forEach((el) => {
  el.addEventListener("click", selectAmount);
});

//amount input to max 4 numbers

const anotherAmount = document.querySelector("#donateField");
//console.log(anotherAmount);

anotherAmount.addEventListener("input", (e) => {
  console.log("click");
  if (e.target.value.length > 4) {
    return false;
  }
});
