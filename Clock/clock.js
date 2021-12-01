const sechand = document.querySelector('.second-hand')
const minhand = document.querySelector('.minute-hand')
const hourhand = document.querySelector('.hour-hand')


function setDate(){
    const now  = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const hourInDegree = ((hours/12)*360)+90
    const minuteinDegree = ((minutes/60)*360)+90
    const secondInDegree = ((seconds/60)*360)+90
    sechand.style.transform=`rotate(${secondInDegree}deg)`
    minhand.style.transform=`rotate(${minuteinDegree}deg)`
    hourhand.style.transform=`rotate(${hourInDegree}deg)`
}

setInterval(setDate, 1000);
