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
let bigNumber = 1234567895624562255n
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

//Symbol:use for unique eg id
const id = Symbol(123) //return type symbol
const anotherId = Symbol(123) // dekhne me same h but symbol use kiya h to nhi hogi 
console.log(id===anotherId); //false

//Array basics:
const name = ["balkrishna", "piyush", 'Adarsh', "tanuj"] //refrance type

//objects baiscs:
let myObj = {
    name: "Balkrishna",
    age: 21,
    roll: 103
}
//function basic: can treat as a variable
const myFunction = function(){
    console.log("hellow snt");
    
}

// Summary
/*datatype: two 1)primitive 2)non-primitive(refrance type)
Primitive data types in JavaScript are passed by value (call by value). This means when you assign or pass a primitive value, JavaScript creates a copy of the actual value. 
The original variable and the copied variable are independent, so changes made to one do not affect the other.
Eg- let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
returntype(typeof) of array:object, object:object and function:function h

*/