const currentArticleNumber = Number(articleNumber);

const nextPhoto = document.getElementById("photoNPNext");
const nextText = document.getElementById("textNext");
const previousPhoto = document.getElementById("photoNPPrevious");
const previousText = document.getElementById("textPrevious");

const previousArticleNumber = currentArticleNumber - 1;
const nextArticleNumber = currentArticleNumber + 1;

function fillNP(number, photo, text, NP, arrow) {
  const dateNP = newDate(window.data[number].date);
  photo.innerHTML = `<img src='https://picsum.photos/1000/750'/>`; // src='./${number}/minipicture.jpg'
  text.innerHTML = `<span><span class='hiddenArrow NPtag'> ${arrow} </span><p class='NPtag'>${NP} článek</p><div class='fillerSpan'></div></span><span><p class='NPtitle'>${window.data[number].title}</p></span><span><p class='NPdate'>${dateNP}</p><div class='fillerSpan'></div></span>`;
}

/*previous Article - doesn't exist*/
if (currentArticleNumber === 0) {
  document.getElementById("previousNP").style.visibility = "hidden";
} /*exists*/ else {
  fillNP(previousArticleNumber, previousPhoto, previousText, "Předchozí", "<<<&nbsp;");
  const previousA = [
    document.getElementById("tinyPolaroidPrevious"),
    ...Array.from(previousText.querySelectorAll("p")),
    document.getElementById("spacerDivP"),
    previousText.querySelector(".hiddenArrow"),
  ];
  previousA.forEach((x) =>
    x.addEventListener("mouseover", function () {
      x.style.cursor = "pointer";
      document.getElementById("tinyPolaroidPrevious").style.transform = "rotate(-8deg)";

      previousA[1].style.color = "#ee2147";
      previousText.querySelector(".hiddenArrow").classList.add("notSoHiddenArrow");
    })
  );

  previousA.forEach((x) =>
    x.addEventListener("mouseleave", function () {
      document.getElementById("tinyPolaroidPrevious").style.transform = "none";
      previousA[1].style.color = "black";
      previousText.querySelector(".hiddenArrow").classList.remove("notSoHiddenArrow");
    })
  );
  document.getElementById("previousNP").href = `./Article${previousArticleNumber}.html`;
}
/*

next Article - doesn't exist
*/
if (currentArticleNumber === window.data.length - 1) {
  document.getElementById("nextNP").style.visibility = "hidden";
} /*exists*/ else {
  fillNP(nextArticleNumber, nextPhoto, nextText, "Následující", "&nbsp;>>>");

  const nextA = [
    document.getElementById("tinyPolaroidNext"),
    ...Array.from(nextText.querySelectorAll("p")),
    document.getElementById("spacerDivN"),
    nextText.querySelector(".hiddenArrow"),
  ];
  nextA.forEach((x) =>
    x.addEventListener("mouseover", function () {
      x.style.cursor = "pointer";
      document.getElementById("tinyPolaroidNext").style.transform = "rotate(8deg)";
      nextA[1].style.color = "#ee2147";
      nextText.querySelector(".hiddenArrow").classList.add("notSoHiddenArrow");
    })
  );
  nextA.forEach((x) =>
    x.addEventListener("mouseleave", function () {
      document.getElementById("tinyPolaroidNext").style.transform = "none";
      nextA[1].style.color = "black";
      nextText.querySelector(".hiddenArrow").classList.remove("notSoHiddenArrow");
    })
  );
  document.getElementById("nextNP").href = `./Article${nextArticleNumber}.html`;
}
