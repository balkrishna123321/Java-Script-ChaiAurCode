/* Control Flow/logic flow in JavaScript: Control Flow means the order in which JavaScript executes your code. Normally, JavaScript executes code from top to bottom.
But sometimes we want to like :1)Execute code only if a condition is true. 2)Repeat code multiple times(loops). 3)Skip some code(continue). 4)Stop execution(break). This is called Control Flow.
Types of Control Flow:There are mainly three types: 1)Conditional Statements(Decision Making), 2)Loops(Iteration), 3)Jump Statements
1. Conditional Statements: Conditional statements allow JavaScript to make decisions. if Statement where If the condition is false, the block is skipped. */
let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
} //JavaScript checks from top to bottom and stops when the first condition is true.
/*
Comparison Operators:
| Operator | Meaning                     |
| -------- | --------------------------- |
| `==`     | Equal (checks value only)   |
| `===`    | Strict Equal (value + type) |
| `!=`     | Not Equal                   |
| `!==`    | Strict Not Equal            |
| `>`      | Greater Than                |
| `<`      | Less Than                   |
| `>=`     | Greater Than or Equal       |
| `<=`     | Less Than or Equal          |

Logical Operators: AND(&&): Returns true only if both conditions are true. , OR(||):Returns true if at least one condition is true. ,NOT(!):Reverses the boolean value. */
const userLoggedIn= true
const hasDebitCard = true
if(userLoggedIn && hasDebitCard){
    console.log("Allow to shoping");
}else{
    console.log("You are not allowed");
    
} //Allow to shoping

const loggedInFromGoogle = true
const loggedInFromEmail = false
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`you are Logged in succesfully`);
} //you are Logged in succesfully 

/*Truthy and Falsy Values: JavaScript converts values to true or false in conditions.
Falsy Values: There are only 8 falsy values: false, 0, -0, 0n(BigInt), "", null, undefined, NaN Ex- 
Truthly Values: " ", abc", "0", "false", 'false', [], {}, function(){}    */

const user1 = "";
const user2 = "";
const arr1 = [];
const emptyObj = {}
if (user1) {
    console.log("Hello");
} else if (user2) {
    console.log("user 2 has something value"); 
} else if(arr1.length===0){
    console.log("array is empty ");  //array is empty 
}else {
    console.log("no value is matching all false case");
}
if(Object.keys(emptyObj).length===0){  //Object.keys(emptyObj) this convert obj into arr then simply appay .length property
    console.log("Object is empty");
} // Object is empty

//Nullish Coalescing Operator (??): Returns the right value only if the left value is null or undefined.
let num1 = 4 ?? 5
console.log(num1);       //4
let num2 = null ?? 5
console.log(num2);       //5
let num3 = undefined ?? 6
console.log(num3);       //6

let username = null;
console.log(username ?? "Guest"); //Guest

//Ternary Operator: Short form of if...else.
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); //Adult

//switch Statement: Used when checking one value against many possible cases.
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break; //Without break, execution continues to the next cases.

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid");
} //Tuesday


// Loops: Loops repeat code. 1)for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//nested for loop
for (let i = 1; i <= 5; i++) {
    console.log(`outer value ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`inner value ${j} and outer value ${i}`);
    }
}
//2)while-loop:
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
let myarr = ["ak", "bk", "dk", "ck"]
let sarr = 0;
while(sarr<myarr.length){
    console.log(`element value is ${myarr[sarr]}`);
    sarr++
}
//do...while: Runs at least once.
let j = 11;
do {
    console.log(j);
    j++;
} while (j <= 10); //11
//break: Stops the loop immediately. continue: Skips the current iteration.

//  Loop Types: 1)for...of: Used for arrays and strings.
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value); // 10, 20, 30 
}
//2)for...in: Used for objects.
const user = {
    name: "Balkrishna",
    age: 20
};
for (const key in user) {
    console.log(key, user[key]);
} //name Balkrishna
  //age 20
