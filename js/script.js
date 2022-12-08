//
// Burger menu
//

//create overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay-bg");
document.querySelector("body").prepend(overlay);

export const showBurgerMenu = () => {
  const burgerWrapper = document.querySelector(".burger-menu");
  const burgerMenu = document.querySelector(".burger-menu-card");

  //const pageWrapper = document.querySelector(".page-wrapper");
  //console.log(document.querySelector("body"));

  burgerWrapper.addEventListener("click", () => {
    burgerWrapper.classList.toggle("open");
    burgerMenu.classList.toggle("show-burger-card");
    overlay.classList.toggle("show-overlay");
  });

  overlay.addEventListener("click", () => {
    burgerWrapper.classList.remove("open");
    burgerMenu.classList.remove("show-burger-card");
    overlay.classList.remove("show-overlay");
  });
};

window.addEventListener("load", showBurgerMenu);

//
//  Carousel
//

const carouselGallery = document.querySelector("#carousel");
const content = document.querySelector("#content");
const contentLeft = document.querySelector("#content-left");
const contentRight = document.querySelector("#content-right");
const nextButton = document.querySelector("#next");
const prevButon = document.querySelector("#prev");

function getArray(el) {
  let clonedContent = el.cloneNode(true);
  const cards = clonedContent.querySelectorAll(".card");
  return [...cards];
}

function cloneContent(el) {
  let array = getArray(content);
  array.map((card) => {
    el.append(card);
  });
}

(() => {
  cloneContent(contentRight);
  cloneContent(contentLeft);
})();

//window.addEventListener("load", carousel);

//
// Testimonials popup when width <= 640px
//
const popup = document.querySelector(".testimonials-popup");
const reviews = document.querySelectorAll(".test-card-review");
const close = document.querySelector(".testimonials-popup-close");
//console.log(close);
//console.log(popup);
//console.log(reviews);

const createPopup = (e) => {
  const clickedPopup = e.target;
  const parent = clickedPopup.parentNode;
  const card = parent.parentNode;
  const userName = card.querySelector(".user-name").innerHTML;
  const userImg = card.querySelector(".user-img").src;
  const userLoc = card.querySelector(".user-location").innerHTML;
  const userRev = card.querySelector(".user-review").innerHTML;
  //console.log(userImg);
  const createdCard = document.createElement("div");
  createdCard.classList.add("test-card-popup");
  const createdInner = document.createElement("div");
  createdInner.innerHTML = `
    <div class="col test-card-dsc">
      <div class="row flex">
        <div class="col">
          <img class="user-img" src="${userImg}" alt="user">
        </div>
        <div class="col test-name-loc">
            <div class="row">
                <p class="user-name">${userName}</p>
            </div>
            <div class="row">
                <p class="user-location small-paragraph">
                    ${userLoc}
                </p>
            </div>
        </div>
      </div>
      <div class="row test-card-review">
        <p class="user-review small-paragraph">
            ${userRev}
        </p>
      </div>
    </div>
  `;
  createdCard.appendChild(createdInner);
  popup.appendChild(createdCard);
  popup.classList.add("show-popup");
  overlay.classList.add("show-overlay");
};

function removePopup() {
  const hasElement = document.querySelectorAll(".test-card-popup");
  hasElement.forEach((elem) => {
    console.log("removing previous popup");
    elem.remove();
  });
}

function closePopup() {
  popup.classList.remove("show-popup");
  removePopup();
  overlay.classList.remove("show-overlay");
}

overlay.addEventListener("click", closePopup);

// only allow popup when page width < 640px - reload required

if (window.innerWidth < 640) {
  console.log("page width less than 640px - can create popup");
  for (let rev of reviews) {
    rev.addEventListener("click", createPopup);
  }
}

close.addEventListener("click", closePopup);

//review.addEventListener("click", createPopup);

//alert reminder
const setAlert = () => {
  const alerted = localStorage.getItem("alerted") || "";
  if (alerted != "yes") {
    alert("Hi. Please give me time till Friday to finish task. Thanks!");
    localStorage.setItem("alerted", "yes");
  }
};

window.addEventListener("load", setAlert);
