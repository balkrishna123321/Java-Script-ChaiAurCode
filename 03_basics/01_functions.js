// Functions in JavaScript: A function is a block of reusable code that performs a specific task.
// Instead of writing the same code multiple times, you write it once inside a function and call it whenever needed.
// Function Syntax
function functionName() {
    // Code to execute
}
// Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet(); // Hello, World!

/***************Function Parameters and Arguments************ */
//Parameters: Variables defined in the function declaration.
//Arguments: Values passed when calling the function.
function greet1 (name){  // name is a parameter
    console.log(`Hello ${name}`);
}
greet1("Balkrishna");    // "Balkrishna" is an argument  Output: Hello Balkrishna
// Multiple Parameters
function add(a, b) {
    console.log(a + b);
}
add(10, 20); //30

// Return Statement: The return keyword sends a value back to the caller and stops function execution.
function add1(a, b) {
    return a + b;
    console.log("Hello"); //The console.log("Hello") never executes because return exits the function.
}
const result = add1(10, 20);
console.log(result); //30

//Default Parameters (ES6)
function greet2(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet2(); // Hello Guest
greet2("Balkrishna"); //Hello Balkrishna

// Function Expression: A function can be stored in a variable.
const greet3 = function () {
    console.log("Hello");
};
greet3(); //Hello
// Anonymous Function: A function without a name. The function itself has no name, but it is assigned to the variable greet.
//Arrow Functions (ES6): Shorter syntax for writing functions.
const greet4 = () => {
    console.log("Helloo");
};
greet4(); // Helloo
//Arrow Function with One Parameter
const square = (num) => {
    return num * num;
};
console.log(square(5)); // 25
// Implicit Return: If the function contains only one expression, you can omit return and braces.
const add3 = (a, b) => a + b;
console.log(add3(5, 3)); //8

//Regular Function vs Arrow Function
// Regular Function:
const user2 = {
    name: "Balkrishna",
    greet6: function () {
        console.log(this.name);
    }
};
user2.greet6();
//Arrow function:
const user3 = {
    name:"Balkrishna Patidar",
    greet7 : () =>{
        console.log(this.name);
    }
}
user3.greet7(); // undefined  Why? Arrow functions do not have their own this. They inherit this from the surrounding scope. 
// Rule: Use regular functions for object methods.

//Rest Parameters (...): Collect multiple arguments into an array.
function calculateCartPrice(...prices) {
    return prices;
}
console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ] as an array
// Normal + Rest Parameter
function calculateCartPrice(val1, val2, ...prices) {
    console.log(val1);
    console.log(val2);
    console.log(prices);
}
calculateCartPrice(100, 200, 300, 400, 500); /* output:
100
200
[ 300, 400, 500 ]*/ // Rule: The rest parameter must always be the last parameter.

//Passing Objects to Functions
const user = {
    username: "Balkrishna",
    price: 999
};
function handleObject(anyObject) {
    console.log(anyObject.username);
    console.log(anyObject.price);
}
handleObject(user); // Balkrishna  999  
