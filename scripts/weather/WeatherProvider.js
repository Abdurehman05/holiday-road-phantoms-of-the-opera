import Settings from "../Settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}

export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=denver&appid=${Settings.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weather = parsedResponse.list
    })
}