

export const weatherHTML = (weatherObj) => {
    //console.log("weatherObject test", weatherObj)
    //let d = new Date(weatherObj.dt)
    let day = d.getDay()
    let options = { month: 'long', }
    let month = new Intl.DateTimeFormat('en-US', options).format(d)
    let year = d.getFullYear()
    //console.log(d)
    let d = weatherObj.dt_txt
    //console.log("date", d.toLocaleString('en-US'))
    // let day = d.getDay()
    // let options = {month: 'long',}
    // let month = new Intl.DateTimeFormat('en-US', options).format(d)
    // let year = d.getFullYear()
    // //console.log(d)
    // let n = d.toLocaleString(en,US,)
    // console.log(n)

    let c = weatherObj.main.temp - 273.15
    let f = (c * 1.8) + 32
    let fTotal = Math.round(f)

    return `
        <section id="weather">
            <div>${d}</div>
            
            <div>Fahrenheit Temp: ${fTotal}</div>
            <div>Humidity: ${weatherObj.main.humidity}%</div>
            <div>${weatherObj.weather[0].description}</div>
            <div>" " </div>
        </section>
    `
}