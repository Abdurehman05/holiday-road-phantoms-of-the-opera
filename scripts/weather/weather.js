

export const weatherHTML = (weatherObj) => {
    //console.log("weatherObject test", weatherObj)
    let d = new Date(weatherObj.dt)
    let day = d.getDay()
    let options = { month: 'long', }
    let month = new Intl.DateTimeFormat('en-US', options).format(d)
    let year = d.getFullYear()
    //console.log(d)
    // let n = d.toLocaleString(en,US,)
    // console.log(n)

    let c = weatherObj.main.temp - 273.15
    //console.log(c)
    let f = (c * 1.8) + 32
    //console.log(f)
    return `
        <section id="weather">
            <div>${month}/${day}/${year}</div>
            <div>Fahrenheit Temp: ${f}</div>
            <div>Humidity: ${weatherObj.main.humidity}%</div>
            <div>${weatherObj.weather[0].description}</div>
            <div>" " </div>
        </section>
    `
}