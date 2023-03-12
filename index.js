let weather = 'd84cbac3c1fb2a3b4e720807e7781736';

my_fun('gonda')
function search() {
  city_name = this.fetchWeather(document.querySelector(".search-bar").value);
  console.log(city_name)

}

function my_fun(city_name){
    
    let cardHTML = '';
    let url = "https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=API_key";
    url = url.replace("city_name", city_name);
    url = url.replace("API_key", weather);
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,description,temp,humidity,speed);
        
        document.querySelector(".city").innerHTML = "weather in " + name;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      temp = parseFloat(temp) - 273.15;
     temp = temp.toFixed(2)
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    })
    
  };

document
.querySelector(".search button")
.addEventListener("click", function(e){
 console.log(e);
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") { 

      my_fun(event.target.value)
    }
});

// weather.fetchWeather("Denver");
    
        