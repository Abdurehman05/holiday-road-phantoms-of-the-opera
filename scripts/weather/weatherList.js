import {weatherHTML} from './weather.js'
import {getWeather, useWeather} from './WeatherProvider.js'


export const weatherList = () => {
    getWeather()
    .then(() => {
        const appWeather = useWeather()
        render(appWeather)
    })
}

const render = aWeatherArray => {
    const domElement = document.querySelector(".weatherContainer");

    let HTMLArray = aWeatherArray.map(singleWeather => {
        return weatherHTML(singleWeather);
    })
    domElement.innerHTML = HTMLArray.join("")
}
