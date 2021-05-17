


// api fetch function 
const weatherApiOne = {
    key: "ef9314b7a313587fcfcf80da5ad175c7",
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast"
}

const searchInputBoxOne = document.getElementById('input-box');

// Event Listener Function on Keypress

searchInputBoxOne.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {
        console.log(searchInputBoxOne.value);
        getWeatherReport(searchInputBoxOne.value);
        document.querySelector('.weather-body').style.display = "block";

    }
});



// Get weather report 

function getWeatherReport(city) {
    fetch(`${weatherApiOne.baseUrl}?q=${city}&units=metric&appid=${weatherApiOne.key}`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}




// first weather data
// Show Weather Report 

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.city.name}, ${weather.city.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.list[0].main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `min: ${Math.round(weather.list[0].main.temp_min)}&deg;C | max: ${Math.round(weather.list[0].main.temp_min)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.list[0].weather[0].main}`;

    let date = document.getElementById('date');
    date.innerHTML = `${weather.list[0].dt_txt}`;



    // Show icon image from api 

    let icon = document.getElementById('img').src = "http://openweathermap.org/img/wn/".concat(weather.list[0].weather[0].icon).concat("@2x.png");

    console.log(icon);


    // Dynamic background-Image

    if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/clouds.jpg')";

    } else if (weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('images/snowy.jpg')";

    } else if (weatherType.textContent == 'Clear') {

        document.body.style.backgroundImage = "url('images/clear sky.jpeg')";

    } else if (weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('images/rainy.jpg')";

    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";

    } else if (weatherType.textContent == 'Thunderstrom') {

        document.body.style.backgroundImage = "url('images/thunderstrom.jpg')";

    } else if (weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";

    } else if (weatherType.textContent == 'Smoke') {

        document.body.style.backgroundImage = "url('images/smoke.jpg')";

    } else if (weatherType.textContent == 'Dust') {

        document.body.style.backgroundImage = "url('images/dust.jpg')";

    } else if (weatherType.textContent == 'Fog') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";

    } else if (weatherType.textContent == 'Sand') {

        document.body.style.backgroundImage = "url('images/dust.jpg')";

    } else if (weatherType.textContent == 'Ash') {

        document.body.style.backgroundImage = "url('images/volcanic.jpg')";

    } else if (weatherType.textContent == 'Squall') {

        document.body.style.backgroundImage = "url('images/clouds.jpg')";

    } else if (weatherType.textContent == 'Tornado') {

        document.body.style.backgroundImage = "url('images/tornado.jpg')";

    } else if (weatherType.textContent == 'Drizzle') {

        document.body.style.backgroundImage = "url('images/drizzle.jpg')";

    }



///first box
let temperatureone = document.getElementById('tempone');
temperatureone.innerHTML = `${Math.round(weather.list[1].main.temp)}&deg;C`;

let minMaxTempone = document.getElementById('min-maxone');
minMaxTempone.innerHTML = `min: ${Math.round(weather.list[1].main.temp_min)}&deg;C | max: ${Math.round(weather.list[1].main.temp_min)}&deg;C`;

let weatherTypeone = document.getElementById('weatherone');
weatherTypeone.innerText =  `${weather.list[1].weather[0].main}`;

let dateone = document.getElementById('dateone');
dateone.innerHTML = `${weather.list[1].dt_txt}`;



// Show icon image from api 

let iconone = document.getElementById('imgone').src = "http://openweathermap.org/img/wn/".concat(weather.list[1].weather[0].icon).concat("@2x.png");
   
console.log(iconone);



//second box 
let temperaturetwo = document.getElementById('temptwo');
temperaturetwo.innerHTML = `${Math.round(weather.list[2].main.temp)}&deg;C`;

let minMaxTemptwo = document.getElementById('min-maxtwo');
minMaxTemptwo.innerHTML = `min: ${Math.round(weather.list[2].main.temp_min)}&deg;C | max: ${Math.round(weather.list[2].main.temp_min)}&deg;C`;

let weatherTypetwo = document.getElementById('weathertwo');
weatherTypetwo.innerText =  `${weather.list[2].weather[0].main}`;

let datetwo = document.getElementById('datetwo');
datetwo.innerHTML = `${weather.list[2].dt_txt}`;



// Show icon image from api 

let icontwo = document.getElementById('imgtwo').src = "http://openweathermap.org/img/wn/".concat(weather.list[2].weather[0].icon).concat("@2x.png");
   
console.log(icontwo);


//third box
let temperaturethird = document.getElementById('tempthird');
temperaturethird.innerHTML = `${Math.round(weather.list[3].main.temp)}&deg;C`;

let minMaxTempthird = document.getElementById('min-maxthird');
minMaxTempthird.innerHTML = `min: ${Math.round(weather.list[3].main.temp_min)}&deg;C | max: ${Math.round(weather.list[3].main.temp_min)}&deg;C`;

let weatherTypethird = document.getElementById('weatherthird');
weatherTypethird.innerText =  `${weather.list[3].weather[0].main}`;

let datethird = document.getElementById('datethird');
datethird.innerHTML = `${weather.list[3].dt_txt}`;



// Show icon image from api 

let iconthird = document.getElementById('imgthird').src = "http://openweathermap.org/img/wn/".concat(weather.list[3].weather[0].icon).concat("@2x.png");
   
console.log(iconthird);



//fourth box
let temperaturefourth = document.getElementById('tempfourth');
temperaturefourth.innerHTML = `${Math.round(weather.list[4].main.temp)}&deg;C`;

let minMaxTempfourth = document.getElementById('min-maxfourth');
minMaxTempfourth.innerHTML = `min: ${Math.round(weather.list[4].main.temp_min)}&deg;C | max: ${Math.round(weather.list[4].main.temp_min)}&deg;C`;

let weatherTypefourth = document.getElementById('weatherfourth');
weatherTypefourth.innerText =  `${weather.list[4].weather[0].main}`;

let datefourth = document.getElementById('datefourth');
datefourth.innerHTML = `${weather.list[4].dt_txt}`;



// Show icon image from api 

let iconfourth = document.getElementById('imgfourth').src = "http://openweathermap.org/img/wn/".concat(weather.list[4].weather[0].icon).concat("@2x.png");
   
console.log(iconfourth);



//fifth box
let temperaturefifth = document.getElementById('tempfifth');
temperaturefifth.innerHTML = `${Math.round(weather.list[5].main.temp)}&deg;C`;

let minMaxTempfifth = document.getElementById('min-maxfifth');
minMaxTempfifth.innerHTML = `min: ${Math.round(weather.list[5].main.temp_min)}&deg;C | max: ${Math.round(weather.list[5].main.temp_min)}&deg;C`;

let weatherTypefifth = document.getElementById('weatherfifth');
weatherTypefifth.innerText =  `${weather.list[5].weather[0].main}`;

let datefifth = document.getElementById('datefifth');
datefifth.innerHTML = `${weather.list[5].dt_txt}`;



// Show icon image from api 

let iconfifth = document.getElementById('imgfifth').src = "http://openweathermap.org/img/wn/".concat(weather.list[5].weather[0].icon).concat("@2x.png");

console.log(iconfifth);


//sixth box
let temperaturesixth = document.getElementById('tempsixth');
temperaturesixth.innerHTML = `${Math.round(weather.list[6].main.temp)}&deg;C`;

let minMaxTempsixth = document.getElementById('min-maxsixth');
minMaxTempsixth.innerHTML = `min: ${Math.round(weather.list[6].main.temp_min)}&deg;C | max: ${Math.round(weather.list[6].main.temp_min)}&deg;C`;

let weatherTypesixth = document.getElementById('weathersixth');
weatherTypesixth.innerText =  `${weather.list[6].weather[0].main}`;

let datesixth = document.getElementById('datesixth');
datesixth.innerHTML = `${weather.list[6].dt_txt}`;



// Show icon image from api 

let iconsixth = document.getElementById('imgsixth').src = "http://openweathermap.org/img/wn/".concat(weather.list[6].weather[0].icon).concat("@2x.png");

console.log(iconsixth);


//seventh box
let temperatureseventh = document.getElementById('tempseventh');
temperatureseventh.innerHTML = `${Math.round(weather.list[7].main.temp)}&deg;C`;

let minMaxTempseventh = document.getElementById('min-maxseventh');
minMaxTempseventh.innerHTML = `min: ${Math.round(weather.list[7].main.temp_min)}&deg;C | max: ${Math.round(weather.list[7].main.temp_min)}&deg;C`;

let weatherTypeseventh = document.getElementById('weatherseventh');
weatherTypeseventh.innerText =  `${weather.list[7].weather[0].main}`;

let dateseventh = document.getElementById('dateseventh');
dateseventh.innerHTML = `${weather.list[7].dt_txt}`;



// Show icon image from api 

let iconseventh = document.getElementById('imgseventh').src = "http://openweathermap.org/img/wn/".concat(weather.list[7].weather[0].icon).concat("@2x.png");

console.log(iconseventh);



//eighth box
let temperatureeighth = document.getElementById('tempeighth');
temperatureeighth.innerHTML = `${Math.round(weather.list[8].main.temp)}&deg;C`;

let minMaxTempeighth = document.getElementById('min-maxeighth');
minMaxTempeighth.innerHTML = `min: ${Math.round(weather.list[8].main.temp_min)}&deg;C | max: ${Math.round(weather.list[8].main.temp_min)}&deg;C`;

let weatherTypeeighth = document.getElementById('weathereighth');
weatherTypeeighth.innerText =  `${weather.list[8].weather[0].main}`;

let dateeighth = document.getElementById('dateeighth');
dateeighth.innerHTML = `${weather.list[8].dt_txt}`;



// Show icon image from api 

let iconeighth = document.getElementById('imgeighth').src = "http://openweathermap.org/img/wn/".concat(weather.list[8].weather[0].icon).concat("@2x.png");

console.log(iconeighth);



//ninth box
let temperatureninth = document.getElementById('tempninth');
temperatureninth.innerHTML = `${Math.round(weather.list[9].main.temp)}&deg;C`;

let minMaxTempninth = document.getElementById('min-maxninth');
minMaxTempninth.innerHTML = `min: ${Math.round(weather.list[9].main.temp_min)}&deg;C | max: ${Math.round(weather.list[9].main.temp_min)}&deg;C`;

let weatherTypeninth = document.getElementById('weatherninth');
weatherTypeninth.innerText =  `${weather.list[9].weather[0].main}`;

let dateninth = document.getElementById('dateninth');
dateninth.innerHTML = `${weather.list[9].dt_txt}`;



// Show icon image from api 

let iconninth = document.getElementById('imgninth').src = "http://openweathermap.org/img/wn/".concat(weather.list[9].weather[0].icon).concat("@2x.png");

console.log(iconninth);



//tenth box
let temperaturetenth = document.getElementById('temptenth');
temperaturetenth.innerHTML = `${Math.round(weather.list[10].main.temp)}&deg;C`;

let minMaxTemptenth = document.getElementById('min-maxtenth');
minMaxTemptenth.innerHTML = `min: ${Math.round(weather.list[10].main.temp_min)}&deg;C | max: ${Math.round(weather.list[10].main.temp_min)}&deg;C`;

let weatherTypetenth = document.getElementById('weathertenth');
weatherTypetenth.innerText =  `${weather.list[10].weather[0].main}`;

let datetenth = document.getElementById('datetenth');
datetenth.innerHTML = `${weather.list[10].dt_txt}`;



// Show icon image from api 

let icontenth = document.getElementById('imgtenth').src = "http://openweathermap.org/img/wn/".concat(weather.list[10].weather[0].icon).concat("@2x.png");

console.log(icontenth);


    

}





