const inputTimer = document.querySelector("#input-timer")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const resetButton = document.querySelector("#reset")

const timer = document.querySelector("#timer")

let counter = 0

let hours = 0
let minutes = 0
let seconds = 0
let pauseTimer = false

inputTimer.addEventListener("input", () => {
    const hasCaracteresRegex = /\D+/g
    inputTimer.value = inputTimer.value.replace(hasCaracteresRegex, "")
})

startButton.addEventListener("click", () => {
    
    
    // Encerra qualquer timer iniciado anteriormente
    if (pauseTimer == false && minutes !== 0){
        
        // Pega o valor do tempo em minutos
        minutes = Number(inputTimer.value)
        
        clearInterval(counter)
        
        // Torna o input vazio
        inputTimer.value = ""

        // Inicia a variável de horas e segundos
        while (minutes >= 60){
            hours++
            minutes = minutes - 60
        }

        seconds = 0

        console.log(`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);

        
        // Exibe no visor o timer correndo
        timer.innerText = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

        // Cria o timer partindo do valor inserido
        counter = setInterval(() => {
            
            if ((hours <= 0 && minutes <= 0 && seconds <= 0) || pauseTimer === true){
                clearInterval(counter)
                if (hours === 0 && minutes === 0 && seconds === 0){
                    alert("Cronômetro encerrado!")
                }
            } else {
            
                if (minutes === 0 && seconds === 0 && hours > 0){
                    hours--
                    minutes = 59
                    seconds = 60
                }

                if (hours >= 0 && minutes > 0 && seconds === 0){
                    minutes--
                    seconds = 60
                }

                // Decrementando o timer!
                seconds--
                
                timer.innerText = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
        
            }   


        }, 1000)
    } else {
        return
    }

    
    
})

pauseButton.addEventListener("click", () => {

    pauseTimer = !pauseTimer

    if (pauseTimer === true || (hours === 0 && minutes === 0 && seconds === 0)){
        clearInterval(counter)
    } else {
            counter = setInterval(() => {
        
                if ((hours === 0 && minutes === 0 && seconds === 0) || pauseTimer === true){
                    clearInterval(counter)
                    if (hours === 0 && minutes === 0 && seconds === 0){
                        alert("Timer encerrado!")
                    }
                } else {
                    
                    if (minutes === 0 && seconds === 0 && hours > 0){
                        hours--
                        minutes = 59
                        seconds = 60
                    }

                    if (hours >= 0 && minutes > 0 && seconds === 0){
                        minutes--
                        seconds = 60
                    }

                    
                    seconds--
                    
                    timer.innerText = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
            
                }   


        }, 1000)
    }

})

resetButton.addEventListener("click", () => {

    clearInterval(counter)

    pauseTimer = true

    hours = 0
    minutes = 0
    seconds = 0

    inputTimer.value = ""

    timer.innerText = "00:00:00"

})