//setTimeout()
//setInterval

function getRandomNumber(){
    console.log(Math.floor(Math.random()*100))
}

// setInterval(getRandomNumber,5000)

// setTimeout(getRandomNumber,5000)

let interval=setInterval(getRandomNumber,500) //stops after 5000 ms

function stop(){
    clearInterval(interval)
}

setTimeout(stop,5000)



