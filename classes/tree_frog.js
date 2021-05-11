import { Animal } from './animal.js'

class TreeFrog extends Animal {

    constructor(name, colour, news, pohlavie) {
        super(name, colour, news);
        this.pohlavie = pohlavie;
        this.weather = this.#createWeatherForecast();
        this.weatherForm = document.getElementById('weatherForm')
    
    this.weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    this.getActualWeatherForCity();
    
    })
    }

    #createWeatherForecast() {
        let weatherParagraph = document.getElementById("weather")
        if (!weatherParagraph) {
            weatherParagraph = document.createElement("p")
            weatherParagraph.id = "weather"
            document.body.appendChild(weatherParagraph)
            return weatherParagraph
        }
        return document.getElementById("weather")
    }

    makeForecast() {
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const apiKey = '290526a576cd425b8f30356b3d538ba5';
        const krajina = 'Bardejov,SK'
        fetch('https://api.opencagedata.com/geocode/v1/json?q='+city+'%2C%20'+state+'&key=290526a576cd425b8f30356b3d538ba5')
        .then((resp) => {
            if (!resp.ok) {
              return resp.statusText + " " + resp.status;
            } else {
               return resp.json();
           }
        })
          .then((json) => {
            console.log(json)
          const lat = json.results[0].geometry.lat
          const lng = json.results[0].geometry.lng
          const api = '290526a576cd425b8f30356b3d538ba5';
          fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat +'&lon='+ lng + '&exclude=hourly,daily,minutely,alerts' + '&appid=' +api +'&units=metric')
          .then((resp) => {
            if (!resp.ok) {
              return resp.statusText + " " + resp.status;
            } else {
               return resp.json();
           }
          })
          .then(jsonWeather => {
            this.weather.innerHTML += `<div id="weatherInfo"> 
            <p id="cityState">  ${city} ${state}  </p> 
            <br> <img id="img" src=\http://openweathermap.org/img/wn/${jsonWeather.current.weather[0].icon}@2x.png\> <br>
            <br> <p id="temp"> ${Math.round(jsonWeather.current.temp)} °C </p>
            <br> <p id="description"> ${jsonWeather.current.weather[0].description} </p>
            </div>`
            
            
        })
    
            
    
      })
    
       

    }

    informWorld(message) {
        super.informWorld(message);
        if (!this._dead) {
            this.news.innerHTML += (' kvak');
        }
    }

    makeSound() {
        if (this._dead) {
            this.informWorld('...+...');
        } else {
            this.informWorld(' kvaaaak');
        }

    }


}