
const weatherIcon = document.querySelector("#weather-icon")
const hourDisplay = document.querySelector("#hour")
const cityDisplay = document.querySelector("#city")

// Acessar API de clima e inserir na aplicação
const API_KEY = "4533dc1e6ea94ac0b4d211614252306" 

const GET_GEOLOCATION = navigator.geolocation.getCurrentPosition((position) => {
    
    const LATITUDE = position.coords.latitude 
    const LONGITUDE = position.coords.longitude 

    // URL construída para fazer a requisição
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY} &q=${LATITUDE},${LONGITUDE}&aqi=no`
    
    fetch(URL).then((response) => {
        return response.json()
    }).then((data) => {
        // Retorna os dados de clima aqui

        let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`

        // Dados de clima
        let temperature = data.current.temp_c
        let icon = data.current.condition.icon

        // Arredondando a temperatura
        temperature = Math.floor(temperature)

        // Dados de localização
        let city = data.location.name

        weatherIcon.src = icon
        hourDisplay.innerText = `${temperature}°C`
        cityDisplay.innerText = city

    })
})

