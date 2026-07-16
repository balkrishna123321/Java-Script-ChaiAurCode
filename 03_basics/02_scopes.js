// Global Scope and Local Scope in JavaScript: Scope determines where a variable can be accessed in your program
// JavaScript mainly has: 1)Global Scope 2)Local Scope (Function Scope) 3)Block Scope (let and const) ← Very Important
//1. Global Scope: A variable declared outside all functions and blocks is in the global scope. It can be accessed from anywhere in the program.
let name = "Balkrishna";
function greet() {
    console.log(name); //Bakrishna
}
console.log(name); //Balkrishna
greet();
/*Global Scope
│
├── name = "Balkrishna"
│
├── greet()
│      │
│      └── can access name
│
└── console.log(name)
Since name is global, everyone can use it.*/
// Note: global scope in browser(inspect) and node(in vs node 01../02..) are differently behave So variables declared with var, let, or const are module-scoped, not truly global.

//2. Local Scope (Function Scope): Variables declared inside a function are available only inside that function.
function greet1() {
    let message = "Hello";

    console.log(message); //Hello
}
greet1(); 
//console.log(message); //ReferenceError: message is not defined : because we can't access it outside the function: The variable is destroyed after the function finishes.

//Variable Shadowing: A local variable with the same name as a global variable shadows (hides) the global variable inside that scope
let name1 = "Global";
function test() {
    let name1 = "Local";

    console.log(name1); 
}
test(); //Local   //Inside the function, JavaScript uses the nearest variable.
console.log(name1); //Global  

//Block Scope: A block is anything inside { }.
{
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a); //ReferenceError: a is not defined   let is Block Scoped
//console.log(b); //ReferenceError: b is not defined   const is Block Scoped
console.log(c); //30  var is NOT a Block Scoped  This is one reason why var is generally avoided in modern JavaScript.


// Nested Functions: An inner function can access variables from its outer function.
function one() {
    const username = "Balkrishna";
    console.log("one "+username)
    function two() {
        const website = "YouTube";
        console.log("two "+website);
    }
    two(); // two Youtube
}
one(); //one Balkrishna 
// two() //ReferenceError: two is not defined   Outer Function Can't  Access Inner Variables

// Lexical Scope: Functions remember the scope in which they were created.
function outer() {
    let message = "Hello";
    function inner() {
        console.log(message);
    }
    inner();
}
outer(); //Hello  : This behavior is called lexical scope.


//Nested Blocks
let a = 1;
{
    let b = 2;
    {
        let c = 3;
        console.log(a); //1
        console.log(b); //2
        console.log(c); //3
    }
}
// Scope Chain: JavaScript searches for variables from inside → outside.
let a1 = "Global";
function one1() {
    let b1 = "Outer";
    function two1() {
        let c1 = "Inner";
        console.log(c1); // Inner
        console.log(b1); // Outer
        console.log(a1); // Global
    }
    two1();
}
one1();

if(true){
    const username = "bk"
    if(username==="bk"){
        const course = " youtube"
        console.log(username+course);  //bk youtube
    }
    // console.log(course); // ReferenceError: course is not defined
}
//console.log(username); //ReferenceError: username is not defined

// Search order: two1() → looks for c1 → if not found, looks in one1() for b1 → if not found, looks in Global for a1.
/*var vs let vs const
| Feature   | `var`    | `let`     | `const`   |
| --------- | -------- | --------- | --------- |
| Scope     | Function | Block     | Block     |
| Reassign  | ✅ Yes  | ✅ Yes    | ❌ No     |
| Redeclare | ✅ Yes  | ❌ No     | ❌ No     |
| Hoisted   | Yes     | Yes (TDZ)  | Yes (TDZ) |
*/

//Expression: In JavaScript, there are two common ways to create a function:1) Function Declaration , 2)Function Expression
// 1. Function Declaration: A function is declared using the function keyword followed by a function name. 1)Has a name. 2)Hoisted completely. 3)Can be called before it is defined.
// 2. Function Expression: A function is stored in a variable. 1)Function is treated like a value. 2)Usually assigned to a variable. 3)Not fully hoisted.
console.log(addOne(5)) //6
function addOne(num){ //this is a function declaration
    return num+1
}
console.log(addOne(5)); //6 we can write this line before function declaration it also work but in expression

// console.log(addTwo(5)) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){  // this is also a function called function Expression because it store in variable
    return num+2 
}
console.log(addTwo(5)); //7   we can not write this line before function initialization in function expression it doesnot work because here we store the value in variable not only declare
 