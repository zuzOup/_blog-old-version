const arrow = document.getElementById("arrow");
const arrowBack = document.getElementById("arrowBack");

/*visible/hidden shadow of arrow*/

function visibleArrow() {
  arrowBack.style.visibility = "visible";
}

function hiddenArrow() {
  arrowBack.style.visibility = "hidden";
}

arrow.addEventListener("mouseover", visibleArrow);
arrow.addEventListener("mouseleave", hiddenArrow);

/*scroll to the top*/
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

arrow.addEventListener("mousedown", scrollToTop);
