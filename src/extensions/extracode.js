totalTime = newHours + convertMinutes
console.log(totalTime)
totalTime2 = totalTime.toString()
console.log(totalTime2)
let newhms = totalTime2.split('.')
console.log(newhms)
finalTime = newhms[0] + ':' + newhms[1]
console.log(finalTime)
return finalTime


convertHours = newHours.toString()
console.log(convertHours)
convertMinutes = newMinutes.toString()
console.log(convertMinutes)
finalTime = convertHours + ':' + convertMinutes
return finalTime

newMinutes = totalMinutes % 60
console.log(newMinutes)
convertMinutes = (newMinutes / 100).toFixed(2)
console.log(convertMinutes)
totalTime = newHours + convertMinutes
console.log(totalTime)
totalTime2 = totalTime.toString()
console.log(totalTime2)
let newhms = totalTime2.split('.')
console.log(newhms)
finalTime = newhms[0] + ':' + newhms[1]
console.log(finalTime)
return finalTime

convertMinutes = newMinutes / 100
console.log(convertMinutes)
totalTime = newHours + convertMinutes
console.log(totalTime)
totalTime2 = totalTime.toString()
console.log(totalTime2)
let newhms = totalTime2.split('.')
console.log(newhms)
finalTime = newhms[0] + ':' + newhms[1]
console.log(finalTime)
return finalTime

unction newTime(string, number) {
  let hms = string.split(':')
  console.log(hms)
  hours = parseInt(hms[0])
  console.log(hours)
  minutes = parseInt(hms[1])
  console.log(minutes)
  totalMinutes = minutes + number
  console.log(totalMinutes)
  minutesToHours = Math.floor(totalMinutes / 60)
  console.log(minutesToHours)
  newHours = hours + minutesToHours
  console.log(newHours)
  newMinutes = totalMinutes % 60
  console.log(newMinutes)
  convertMinutes = newMinutes / 100
  console.log(convertMinutes)
  totalTime = newHours + convertMinutes
  console.log(totalTime)
  totalTime2 = totalTime.toString()
  console.log(totalTime2)
  let newhms = totalTime2.split('.')
  console.log(newhms)
  finalTime = newhms[0] + ':' + newhms[1]
  console.log(finalTime)
  return finalTime
}