import { Animal } from './animal.js'

class TreeFrog extends Animal {

    constructor(name, colour, news, pohlavie) {
        super(name, colour, news);
        this.pohlavie = pohlavie;
        this.weather = this.#createWeatherForecast();
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
        const forecast = "bude pekne"
        if (this._dead) {
            this.informWorld('nič nebude predpovedať ...');
        } else {

            

            /*const apiKey = 'af82958cf398ec6278f79b8fcf35e384';  
            const mestoKrajina = 'Bardejov,SK' 
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric')
                .then(resp => {
                    if (!resp.ok) {
                        return (resp.statusText + " " + resp.status)
                    } else {
                        return resp.json()
                    }
                })
                .then(json => {
                    

                    this.weather.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " " + json.main.temp +
                    "<br>" + json.name + "<br>" + json.weather[0].description)
                })
                .catch(error => {
                    console.log(error)
                });*/
                
        }
        const apiKey = '290526a576cd425b8f30356b3d538ba5';
        const krajina = 'Bardejov,SK'
        fetch('https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=+ 290526a576cd425b8f30356b3d538ba5 +')
       

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