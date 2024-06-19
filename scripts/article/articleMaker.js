/*Number of article*/
const articleNumber = window.location.pathname.split("/Article").pop().split(".")[0];
//console.log(articleNumber);

/*import via html from articlesData*/
const data = window.data[articleNumber];

/*Title + date + push body*/
document.getElementById("articleTitle").innerHTML = data.title;

function newDate(date) {
  let day = new Date(date);
  day.setDate(day.getDate() + 1);
  return day.toLocaleDateString("cs-cz");
}

const day = newDate(data.date);
document.getElementById("articleDate").innerHTML = day;

const days = -(new Date("2022-10-19") - new Date(data.date)) / (1000 * 60 * 60 * 24);
document.title = `Na rok Toronťákama - Den ${days}`;

/*body*/
const bodyHTML = document.getElementById("articleBody");
const bodyData = data.body.split(/\n/);

function htmlPush(bodyData) {
  const body = [];
  let imgCounter = 0;
  let gridMaker = [];
  let gridCounter = 0;
  let youtubeCounter = 0;
  for (let i = 0; i < bodyData.length; i++) {
    /* 
    
    Plain article <p>...</p>
      */
    if (bodyData[i][5] === "p" && bodyData[i + 1][9] !== "a") {
      body.push(bodyData[i]);
    } else if (bodyData[i][5] === "i") {
      imgCounter++;
      /*
      
      
        /*article with wrap image 
   
   */ if (bodyData[i][9] === "a") {
        const divImgWrap = `<div class='divImgWrap'><img src="https://picsum.photos/1000/750"/>${
          // src="./${articleNumber}/${imgCounter}.jpg"
          bodyData[i - 1]
        }</div>`;
        body.push(divImgWrap);

        /*
        
        plain image <img full> 
        */
      } else if (bodyData[i][9] === "f") {
        body.push(`<img src="https://picsum.photos/1000/750"/>`); // src="./${articleNumber}/${imgCounter}.jpg"
        /*
        
        image gallery <img grid*rows* { grid-area: x/x/x/x;}>  3:2 -> 3:1.95
        */
      } else if (bodyData[i][9] === "g") {
        gridMaker.push(bodyData[i]);
        let gridNumber = bodyData[i][13];

        if (bodyData[i].charCodeAt(14) >= 48 && bodyData[i].charCodeAt(14) <= 57) {
          gridNumber += bodyData[i][14];
        }

        if (bodyData[i + 1][9] !== "g") {
          gridCounter++;
          const imgGridMaker = gridMaker.map((x) => x.substr(17, 25));
          let innerGrid = "";

          for (let j = 0; j < imgGridMaker.length; j++) {
            innerGrid =
              innerGrid +
              `<div style="${imgGridMaker[j]}"><img src="https://picsum.photos/1000/750"/> /></div>`; //src="./${articleNumber}/${imgCounter - imgGridMaker.length + j + 1}.jpg"
          }

          if (window.innerWidth <= 480) {
            const divMaker = `<div
            class="grid grid${gridCounter}"
            style="grid-template-rows:repeat(${gridNumber},${
              (window.innerWidth - 65) / 6
            }px);"
          >
           ${innerGrid} 
          </div>`;

            body.push(divMaker);
          } else {
            const divMaker = `<div
              class="grid grid${gridCounter}"
              style="grid-template-rows:repeat(${gridNumber},154px);"
            >
             ${innerGrid} 
            </div>`;

            body.push(divMaker);
          }
          gridMaker = [];
        }
      }
      /*

      Youtube tag <youtube>
      */
    } else if (bodyData[i][5] === "y") {
      body.push(data.youtube[youtubeCounter]);
      youtubeCounter++;
    } /*

    link
    */ else if (bodyData[i][5] === "a") {
      body.push(bodyData[i]);
    }
  }
  return body.join("");
}
