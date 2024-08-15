µ
const apiKey = "3a21506d1c85175d84c454c839847298";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(respone.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";
    } else {

        let data = await respone.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = 'images/clouds.png';
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
        }

        document.querySelector(".weather").style.display = "block";
        }
    }

    
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
