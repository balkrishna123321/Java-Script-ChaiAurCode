// Type Conversion means converting a value from one data type to another. Implicit Conversion (Automatic) – JavaScript converts values automatically.
// Explicit Conversion (Manual) – You convert values yourself using functions like Number(), String(), and Boolean().

let score = "99abc" //string
//console.log(typeof score)
//console.log(typeof (score))

// convertion: string to number
let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN: not a number
//Number(Score):33, Number(33abc):NaN, Number(null):0, Number(undefined):NaN, Number(true):1, Number(false):0, Number(""):0

//console.log(Boolean(1));      // true
//console.log(Boolean(0));      // false

//console.log(Boolean(""));     // false
//console.log(Boolean("Hello")); // true

//console.log(Boolean(null));   // false
//console.log(Boolean(undefined)); // false


let age = 20;
let ageString = String(age);
//console.log(ageString);         // 20
//console.log(typeof ageString);  // string

//Operations
//console.log(2 + 2); // 4
//console.log(5 * 2); // 10
let value = 3
let negValue = -value
//console.log(negValue); //-3

let str1="hello"
let str2=" bk"
// console.log(str1+str2);

// console.log("1"+2) //12

// console.log("1" + 2 + 2); // "1"+2="12"+2="122"
// console.log(1+2+"3"); // 1+2=3, 3+"3"="33"
// console.log(3+4*5) //5*4=20, 20+3=23 
// console.log(3+4*5/3) // 5/3=1.66, 1.66*4=6.66, 6.66+3= 9.66
// console.log((3+4)*(5/3)); //11.66

// console.log(true); // true
// console.log(+true) //1 : tricky conversion(not recommanded)
// console.log(-true) //-1
// console.log(+"")   // 0
// console.log(-"")   //-0

let A = 50;
console.log(A++); // 50  Post Increment:first print the number then increment SA in decrement
console.log(A);   // 51

console.log(++A); //52 Pre Increment: first increment then print SA in decrement
console.log(A);   //52


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
console.log(x,y)
// Expected output: "x:4, y:3" before x --> 3, after x --> 4 and y --> 3 (in postincrement:return old value)

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
console.log(a,b)
// Expected output: "a:4, b:4" before a --> 3, after a --> 4 and b --> 4 (in preincrement: return new value)


