import { weatherHTML } from './weather.js'
import { getWeather, useWeather } from './WeatherProvider.js'

const eventHub = document.querySelector(".container")
eventHub.addEventListener("parkSelected", event => {
    weatherList()
})

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
        let d = singleWeather.dt_txt
        const [prefix, date] = d.split(" ")
        if (date === "12:00:00") {
            return weatherHTML(singleWeather);
        }
    })
    domElement.innerHTML = HTMLArray.join("")
}
