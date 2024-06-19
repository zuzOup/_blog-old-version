const dataLength = window.data.length;

/*is it full 4 polaroids -> how many fullLines + oddPolaroids */

let oddPolaroids = 0;
let fullLines = dataLength;

for (let i = 0; i < 4; i++) {
  if (fullLines % 4 !== 0) {
    oddPolaroids++;
    fullLines--;
  }
}

fullLines /= 4;

/*grab Line and copy*/
const main = document.querySelector("main");
let newMain = `<div class="line" >`;

for (let i = 0; i < fullLines; i++) {
  if (window.innerWidth > 480) {
    newMain += `<div class="photoContainer" style='background-image: url("../public/lines/${Math.floor(
      Math.random() * 11 + 1
    )}.png")' >`;
  } else {
    newMain += `<div class="photoContainer" >`;
  }

  newMain += `
      <div class="photoContainerUnit" >
      <div class="pinPart">
        <div class="pin">
          <img class="pinImg" />
        </div>
      </div>
      <div class="photoPart">
        <a class="openArticle">
          <div class="polaroidUnit">
            <div class="polaroidImg"></div>
            <div class="polaroidArticleName"></div></div
        ></a>
      </div>
    </div>
    <div class="photoContainerUnit">
      <div class="pinPart">
        <div class="pin">
          <img class="pinImg" />
        </div>
      </div>
      <div class="photoPart">
        <a class="openArticle">
          <div class="polaroidUnit">
            <div class="polaroidImg"></div>
            <div class="polaroidArticleName"></div></div
        ></a>
      </div>
    </div>
    <div class="photoContainerUnit">
      <div class="pinPart">
        <div class="pin">
          <img class="pinImg" />
        </div>
      </div>
      <div class="photoPart">
        <a class="openArticle">
          <div class="polaroidUnit">
            <div class="polaroidImg"></div>
            <div class="polaroidArticleName"></div></div
        ></a>
      </div>
    </div>
    <div class="photoContainerUnit">
      <div class="pinPart">
        <div class="pin">
          <img class="pinImg" />
        </div>
      </div>
      <div class="photoPart">
        <a class="openArticle">
          <div class="polaroidUnit">
            <div class="polaroidImg"></div>
            <div class="polaroidArticleName"></div></div
        ></a>
      </div>
    </div>
  </div>
</div>`;
}

if (oddPolaroids !== 0) {
  let polaroids = ``;
  for (let i = 0; i < oddPolaroids; i++) {
    polaroids += ` 
    <div class="photoContainerUnit">
    <div class="pinPart">
      <div class="pin">
        <img class="pinImg" />
      </div>
    </div>
    <div class="photoPart">
      <a class="openArticle">
        <div class="polaroidUnit">
          <div class="polaroidImg"></div>
          <div class="polaroidArticleName"></div></div
      ></a>
    </div>
  </div>`;
  } /*
  for(let i=0; i< 4-oddPolaroids;i++){
    polaroids+=
  }*/

  newMain += `<div class="line" >
     <div class="photoContainer" style='background-image: url("../public/lines/${Math.floor(
       Math.random() * 11 + 1
     )}.png")' >
            ${polaroids}
     </div>
   </div>`;
}

main.innerHTML = newMain;
