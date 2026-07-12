// Type Conversion means converting a value from one data type to another. Implicit Conversion (Automatic) – JavaScript converts values automatically.
// Explicit Conversion (Manual) – You convert values yourself using functions like Number(), String(), and Boolean().

let score = "99abc" //string
console.log(typeof score)
console.log(typeof (score))

// convertion: string to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN: not a number
//Number(Score):33, Number(33abc):NaN, Number(null):0, Number(undefined):NaN, Number(true):1, Number(false):0, Number(""):0

console.log(Boolean(1));      // true
console.log(Boolean(0));      // false

console.log(Boolean(""));     // false
console.log(Boolean("Hello")); // true

console.log(Boolean(null));   // false
console.log(Boolean(undefined)); // false


let age = 20;
let ageString = String(age);
console.log(ageString);         // 20
console.log(typeof ageString);  // string

console.log("1"+2); //12

console.log("1" + 2 + 2+2+"3"); //"12"+2="122"+2="1222"+"3"="12223"