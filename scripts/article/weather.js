const latLongData = {
  Toronto: ["43.7001", "-79.4163"],
  Vienna: ["48.2085", "16.3721"],
  Praha: ["50.088", "14.4208"],
  Niagara: ["43.1001", "-79.0663"],
};

function repozition() {
  const weather = document.getElementById("weather");
  const topHeight = document.getElementById("bannerImg").offsetHeight;
  weather.style.left = `${(innerWidth - 1000) / 2 + 1000 - 70}px`;
  weather.style.top = `${topHeight - 50}px`;
  weather.style.visibility = "visible";
}

const weatherStatus = document.getElementById("weatherStatus");

function addSunny() {
  weatherStatus.innerHTML = `<div class="sunny">
  <div class="sunblock"><div class="sun"></div></div>
  <div class="beam"></div>
</div>`;
}

function addPartlyCloudy() {
  weatherStatus.innerHTML = `<div class="partlyCloudy">
  <div class="sunPart">
    <div class="sunblock"><div class="sun"></div></div>
    <div class="beam"></div>
    <div class="sunshade"></div>
  </div>
  <div class="cloudPart cloudPartPC">
    <div class="upperClouds upperCloudsPC cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="middleClouds middleCloudsPC cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="lowerClouds lowerCloudsPC cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
  </div>
</div>`;
}
function addCloudy() {
  weatherStatus.innerHTML = `<div class="cloudy">
  <div class="cloudPart">
    <div class="upperClouds upperCloudsC cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="middleClouds middleCloudsC cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="lowerClouds lowerCloudsC cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
  </div>
  <div class="leafyPart">
  <img class="leaf leaf1" src="../Weather/leaves-bolt/1.png" />
  <img class="leaf leaf2" src="../Weather/leaves-bolt/2.png" />
  <img class="leaf leaf3" src="../Weather/leaves-bolt/3.png" />
  <img class="leaf leaf4" src="../Weather/leaves-bolt/4.png" />
  <img class="leaf leaf5" src="../Weather/leaves-bolt/5.png" />
  <img class="leaf leaf6" src="../Weather/leaves-bolt/6.png" />
  </div>
</div>`;
}
function addRainy() {
  weatherStatus.innerHTML = `<div class="rainy">
  <div class="cloudPart">
    <div class="upperClouds upperCloudsR cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="middleClouds middleCloudsR cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="rainPart rainR">
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
    </div>
    <div class="lowerClouds lowerCloudsR cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
  </div>`;
}
function addUltraRainy() {
  weatherStatus.innerHTML = `<div class="cloudPart">
  <div class="upperClouds upperCloudsUR cloudContainer">
    <div class="cloud1"></div>
    <div class="cloud2"></div>
    <div class="cloud3"></div>
  </div>

  <div class="middleClouds middleCloudsUR cloudContainer">
    <div class="cloud1"></div>
    <div class="cloud2"></div>
    <div class="cloud3"></div>
  </div>
  <div class="rainPart rainUR1">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
  </div>
  <div class="bolt" id="bolt"><img src="../Weather/leaves-bolt/bolt.png" /></div>

  <div class="lowerClouds lowerCloudsUR cloudContainer">
    <div class="cloud1"></div>
    <div class="cloud2"></div>
    <div class="cloud3"></div>
  </div>
  <div class="rainPart rainPart2 rainUR2">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
  </div>
</div>
</div>`;
}
function addSnowy() {
  weatherStatus.innerHTML = `<div class="snowy">
  <div class="cloudPart">
    <div class="upperClouds upperCloudsS cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>

    <div class="middleClouds middleCloudsS cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="snowPart">
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
    </div>
    <div class="lowerClouds lowerCloudsS cloudContainer">
      <div class="cloud1"></div>
      <div class="cloud2"></div>
      <div class="cloud3"></div>
    </div>
    <div class="snowPart snowPart2">
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
    </div>
  </div>
</div>`;
}

/*blowing leaves*/

function restartLeaves() {
  const leaves = Array.from(document.getElementsByClassName("leaf"));
  leaves.forEach((leaf, i) => {
    leaf.classList.remove(`leaf${i + 1}`);
  });

  leaves.forEach((leaf) => void leaf.offsetWidth);
  leaves.forEach((leaf, i) => {
    leaf.classList.add(`leaf${i + 1}`);
  });
}
/*rain*/

function rainyFrequency() {
  const rainy = Array.from(document.getElementsByClassName("drop"));
  rainy.forEach((drop) => {
    drop.style.animationDelay = `${Math.round(Math.random() * 50) / 10}s`;
    drop.style.animationDuration = `${Math.round(Math.random() * 10 + 11) / 10}s`;
  });
}

function lightning() {
  const bolt = document.getElementById("bolt");
  bolt.classList.remove(`bolt`);
  void bolt.offsetWidth;
  bolt.classList.add(`bolt`);
}

/*snow*/

function snowyFrequency() {
  const snowy = Array.from(document.getElementsByClassName("snowflake"));
  snowy.forEach((snowflake) => {
    snowflake.style.animationDelay = `${Math.round(Math.random() * 50) / 10}s`;
    snowflake.style.animationDuration = `${Math.round(Math.random() * 10 + 35) / 10}s`;
  });
}

function addTemperature() {
  const meanTemperatureCont = document.getElementById("meanTemp");
  const minMaxTemperatureCont = document.getElementById("minMax");
  const feelsLikeTempCont = document.getElementById("feelsLike");
  const latLong = latLongData[data.latlong];
  fetch(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${latLong[0]}&longitude=${latLong[1]}&start_date=${data.date}&end_date=${data.date}&hourly=temperature_2m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York`
  )
    .then((blob) => blob.json())
    .then((response) => {
      minMaxTemperatureCont.innerHTML = `${Math.round(
        response.daily.temperature_2m_min[0]
      )}°|${Math.round(response.daily.temperature_2m_max[0])}°`;

      const feelsLike = response.hourly.apparent_temperature.slice(8, 20);

      feelsLikeTempCont.innerHTML = `${Math.round(
        feelsLike.reduce((a, c) => a + c, 0) / feelsLike.length
      )}°`;

      const meanTemp = response.hourly.temperature_2m.slice(8, 20);

      meanTemperatureCont.innerHTML = `${Math.round(
        meanTemp.reduce((a, c) => a + c, 0) / meanTemp.length
      )}°`;

      const wmo = response.hourly.weather_code.slice(10, 19);
      let wmoCount = {
        1: 0,
        2: 0,
        3: 0,
        50: 0,
        60: 0,
        70: 0,
      };

      let wmoRemade = [];

      wmo.forEach((x) => {
        if (x <= 1) {
          wmoRemade.push(1);
        } else if (x > 1 && x < 4) {
          wmoRemade.push(x);
        } else if (x >= 50 && x < 60) {
          wmoRemade.push(50);
        } else if (x >= 60 && x < 70) {
          wmoRemade.push(60);
        } else if (x >= 70) {
          wmoRemade.push(70);
        }
      });

      wmoRemade.forEach((x) => {
        wmoCount[x]++;
      });

      if (wmo.every((x) => x < 4)) {
        const whatWeather = wmo.reduce((a, c) => a + c, 0) / wmo.length;
        if (Math.round(whatWeather) === 3) {
          addCloudy();
          window.setInterval(restartLeaves, 10000);
        } else if (
          Math.round(whatWeather) === 2 ||
          (Math.round(whatWeather) <= 1 && wmoCount[1] < 5)
        ) {
          addPartlyCloudy();
        } else if (Math.round(whatWeather) <= 1) {
          addSunny();
        }
      } else if (
        wmoCount[50] < 3 &&
        wmoCount[60] < 3 &&
        wmoCount[70] < 3 &&
        wmoCount[50] + wmoCount[60] + wmoCount[70] < 3
      ) {
        addCloudy();
        window.setInterval(restartLeaves, 10000);
      } else if (wmoCount[70] >= 3) {
        addSnowy();
        snowyFrequency();
      } else if (wmoCount[50] >= 3) {
        addRainy();
        rainyFrequency();
      } else if (wmoCount[60] >= 3) {
        addUltraRainy();
        rainyFrequency();
        window.setInterval(lightning, 6000);
      }
    });
}

if (innerWidth >= 1250) {
  repozition();
  addTemperature();
}
