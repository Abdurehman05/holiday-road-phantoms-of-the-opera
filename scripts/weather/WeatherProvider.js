import keys from '/scripts/.Settings.js'

let weather = []


export const useWeather = () => {
    return weather.slice()
}

export const getWeather = () => {
    return fetch("http://api.openweathermap.org/data/2.5/forecast?q=denver&appid=afe601516cf0d5860c30724d152831a2")
    .then(response => response.json())
    .then(parsedResponse => {
        weather = parsedResponse.list
    })
}