"use strict"; //treat all js code as a newer version
//alert(3+2) //we are using nodejs, not browser
console.log(3+4);
console.log("bk");

//prefer docqumentation to study deep: 1)mdm(recommended) 2)tc39

//Data type: A data type defines the kind of value a variable can store. JavaScript has 8 data types, divided into Primitive(7) and Non-Primitive (Reference) types.
// 1)number:store int and decimal value >= 2 to power 53, 2)string: Stores text inside single quotes (''), double quotes (""), or backticks (` `).
// 3)boolean: Represents true or false. 4)null: Represents an intentional/standalone empty value. it is empty not " " or undefined  5)undefined: A variable declared but not assigned any value. 
// 6)symbol(ES6):Used to create unique identifiers. 7)BigInt:Used for very large integers.
// || Non-Primitive (Reference) 1)object 2)array, 3)function

//typeof: Checking Data Types

let price = 99.99;  
let age = 21
let name = "bk";
let isLoggedIn = true
let num = null
let day ;
let state = ""
let temprature = 0
let bigNumber = 12n
console.table([price, age, name, isLoggedIn, num, day, bigNumber, state, temprature]);

console.log(typeof 10);             // number
console.log(typeof "Hello");        // string
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof Symbol());       // symbol
console.log(typeof 10n);            // bigint
console.log(typeof {});             // object
console.log(typeof []);             // object
console.log(typeof function(){});   // function
console.log(typeof null);           // object (JavaScript bug): This is a historical bug in JavaScript that has been kept for backward compatibility
console.log(typeof 1234567891234567899); //number  