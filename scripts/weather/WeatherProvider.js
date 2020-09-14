import { getParks, useParks } from "../parks/ParkProvider.js"
import Settings from "../Settings.js"

let weather = []

export const useWeather = () => {
    return weather.slice()
}

export const getWeather = () => {
    let parks = useParks()
    const targetPark = parks.find(park => {
        return park.fullName === document.querySelector("#parkSelect").value
    })
    console.log("targetpark", targetPark)
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${targetPark.addresses[0].postalCode}&appid=${Settings.weatherKey}`)
        .then(response => response.json())
        .then(parsedResponse => {
            weather = parsedResponse.list
        })
}