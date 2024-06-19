const pinPart = Array.from(document.getElementsByClassName("pinPart"));

const fileName = window.location.pathname.split("/").pop();

if (window.innerWidth <= 480 && fileName === `index.html`) {
  pinPart.forEach(
    (x) =>
      (x.style.backgroundImage = `url("./AllPageDesign/Lines/${Math.floor(
        Math.random() * 11 + 1
      )}.png")`)
  );
} else if (window.innerWidth <= 480 && fileName === `Archiv.html`) {
  pinPart.forEach(
    (x) =>
      (x.style.backgroundImage = `url("../AllPageDesign/Lines/${Math.floor(
        Math.random() * 11 + 1
      )}.png")`)
  );
}
