const burgerMenu = document.getElementById("burgerMenu");
//console.log(burgerMenu);

const bubble = document.getElementsByClassName("bubble");
//console.log(bubble);

const burger = document.getElementsByClassName("burger");

burgerMenu.addEventListener("click", bubbleToggle);

function bubbleToggle() {
  //console.log("ahoj");
  burgerMenu.classList.toggle("activeBurger");
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].classList.toggle(`bubble${i + 1}`);
  }
  for (let i = 0; i < burger.length; i++) {
    burger[i].classList.toggle("cross");
  }
}
