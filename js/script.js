var city = document.getElementById("city");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var searchIcon = document.getElementById("search-icon");
var searchInput = document.getElementById("search-location");
var bodyImage = document.getElementById("image");


async function checkWeather(search){
    
    let api_key="a7289cd0411c3bf33bd09d5510cd88f7"
    let api_url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`
    

    let response = await fetch(api_url)

    let data = await response.json();
    
    console.log(data);

    city.innerHTML=data.name;
    temp.innerHTML=Math.floor(data.main.temp) + "°C";
    humidity.innerHTML=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + "km/h";


    if(data.weather[0].main='Cloud'){
        bodyImage.src='img/weather-app.png'
    }
    else if(data.weather[0].main='Clear'){
        bodyImage.src='img/weather-app.png'
    }
    else if(data.weather[0].main='Rain'){
        bodyImage.src='img/weather-app.png'
    }
    else if(data.weather[0].main='Drizzle'){
        bodyImage.src='img/weather-app.png'
    }
    else if(data.weather[0].main='Mist'){
        bodyImage.src='img/weather-app.png'
    }
    else if(data.weather[0].main='Haze'){
        bodyImage.src='img/weather-app.png'
    }
}
// checkWeather()


searchIcon.addEventListener("click",function(){
    checkWeather(searchInput.value);
})

