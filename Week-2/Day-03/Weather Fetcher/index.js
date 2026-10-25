const data = async () => {
    console.log("Fetching Wheather...")
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true")
        const json = await response.json()
        const temperature = json.current_weather.temperature
        const windSpeed = json.current_weather.windspeed
        console.log("Current Temp:", temperature)
        console.log("Wind Speed:", windSpeed)
    } catch (err){
    console.log("Error", Error.name)
}
}

data()