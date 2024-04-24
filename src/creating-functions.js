// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function plusOne(a) {
  return a + 1;
}

console.log(plusOne(1));

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalStrings(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalStrings('hello'));

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function smileyString(word1) {
  let capitalword = word1[0].toUpperCase() + word1.slice(1);
  let combinedWords = "Hi, " + capitalword + " :)";
  return combinedWords;
}
console.log(smileyString('edward'));

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

const array1 = ['edward'];
const array2 = ['edward', 'aiyana'];
const array3 = [ 1 ];
const array4 = [1, 'edward'];

console.log(typeof array3[0]);

function arrayTypes(arr) {
  let stringCount = 0;
  for (let i = 0; i<arr.length; i++) {
    if (typeof arr[i] === typeof 'string') {
      stringCount = stringCount + 1;
    } else if (typeof arr[i] === typeof 2) {
      console.log(4);
      stringCount = stringCount;
    }
  } return stringCount;
}

console.log(arrayTypes(array1));
console.log(arrayTypes(array2));
console.log(arrayTypes(array3));
console.log(arrayTypes(array4));

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

const obj1= {};
const obj2 = {aiyana: 'fantastic'};
const obj3 = {edward: 'fabulous'}  

function addingEdward(object) {
  if (object.edward === undefined) {
    object.edward = 'amazing';
    return object;
  } else {
    return object; 
  }
}

console.log(addingEdward(obj3));

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: plusOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalStrings, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smileyString, // etc
  d: arrayTypes,
  e: addingEdward
}
