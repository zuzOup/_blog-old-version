const data = window.data;
const reversed = data.reverse();

/*random pins*/

const pinImg = document.getElementsByClassName("pinImg");

for (let i = 0; i < pinImg.length; i++) {
  pinImg[i].src = `./public/pins/${Math.floor(Math.random() * 6 + 1)}.png`;

  /*rotate pins*/

  if (window.innerWidth <= 2500 && window.innerWidth > 1024) {
    //desktop
    pinImg[i].style.transform = `translate(${Math.floor(
      Math.random() * 12 + 1
    )}vw) rotate(${Math.floor(Math.random() * 21 - 10)}deg)`;
  } else if (window.innerWidth <= 480) {
    //mobile
    pinImg[i].style.transform = `translate(${Math.floor(
      Math.random() * 58 + 1
    )}vw) rotate(${Math.floor(Math.random() * 21 - 10)}deg)`;
  } else if (window.innerWidth > 480 && window.innerWidth <= 1024) {
    // tablet

    pinImg[i].style.transform = `translate(${Math.floor(
      Math.random() * 28 + 1
    )}vw) rotate(${Math.floor(Math.random() * 21 - 10)}deg)`;
  } else {
    //big desktop 2500px
    pinImg[i].style.transform = `translate(${Math.floor(
      Math.random() * 325 + 1
    )}px) rotate(${Math.floor(Math.random() * 21 - 10)}deg)`;
  }
}

/*rotate polaroids + add pointer*/

const polaroidUnit = document.getElementsByClassName("polaroidUnit");

for (let i = 0; i < polaroidUnit.length; i++) {
  polaroidUnit[i].style.transform = `translate(${Math.floor(
    Math.random() * 10 + 1
  )}px) rotate(${Math.floor(Math.random() * 13 - 6)}deg)`;
}

/*add right href to a*/
const openArticle = document.getElementsByClassName("openArticle");
for (let i = 0; i < openArticle.length; i++) {
  openArticle[i].href = `./Articles/Article${reversed[i].code}.html`; //
}

/*pictures in polaroids*/
const polaroidImg = document.getElementsByClassName("polaroidImg");

for (let i = 0; i < polaroidImg.length; i++) {
  polaroidImg[i].innerHTML = `<img src="https://picsum.photos/1000/750"/>`; //src="./Articles/${reversed[i].code}/${reversed[i].minipicture}"
}

/*text in polaroid*/
const polaroidArticleName = document.getElementsByClassName("polaroidArticleName");
for (let i = 0; i < polaroidArticleName.length; i++) {
  let dayFix = new Date(reversed[i].date);
  dayFix.setDate(dayFix.getDate() + 1);

  polaroidArticleName[i].innerHTML = `<h2>${
    reversed[i].title
  }</h2><h3>${dayFix.toLocaleDateString("cs-cz")}</h3>`;
}
