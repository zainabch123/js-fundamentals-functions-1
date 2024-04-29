// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below

function count(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    result.push(i)
  }
  return result
}

console.log(count(1, 10))

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function transformString(string, number) {
  let text = string.toUpperCase()
  for (let i = 0; i < number; i++) {
    text = text + '!'
  }

  return text
}

console.log(transformString('disaster', 2))
console.log(transformString('emergency', 5))
console.log(transformString('not too bad', 1))

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function newTime(string, number) {
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
  let newHours = (hours + minutesToHours) % 24
  console.log(newHours)
  newMinutes = totalMinutes % 60
  console.log(newMinutes)
  convertMinutes = newMinutes / 100
  console.log(convertMinutes)
  totalTime = (newHours + convertMinutes).toFixed(2)
  console.log(totalTime)
  totalTime2 = totalTime.toString()
  console.log(totalTime2)
  let newhms = totalTime2.split('.')
  console.log(newhms)
  if (newhms[0] === '0') {
    newhms[0] = '00'
  } else {
    newhms = newhms
  }
  console.log(newhms)
  finalTime = newhms[0] + ':' + newhms[1]
  console.log(finalTime)
  return finalTime
}

console.log(newTime('23:50', 30))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: count, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: transformString, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: newTime // etc
}
