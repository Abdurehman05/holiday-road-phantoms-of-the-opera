

export const weatherHTML = (weatherObj) => {
    let d = weatherObj.dt_txt
    let c = weatherObj.main.temp - 273.15
    let f = (c * 1.8) + 32
    let fTotal = Math.round(f)

    return `
        <section id="weather">
            <div>${d}</div>
            <div>Fahrenheit Temp: ${fTotal}</div>
            <div>Humidity: ${weatherObj.main.humidity}%</div>
            <div>${weatherObj.weather[0].description}</div>
            <br>
        </section>
    `
}