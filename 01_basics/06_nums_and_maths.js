//JavaScript has only one number type for most numeric values: Number (integers and floating-point values). It also has BigInt for very large integers.

const score = 400 //autometically detect its a type of number but you can define explicitly also
console.log(score); //400 autometically define its a number
console.log(typeof score); //type: number


// You can also create a number using the Number constructor(ecplicitly).
const num1 = new Number(400)
console.log(num1); //[Number: 400]  : specificaly cast it is a number
console.log(typeof num1); //type: object
// Note: Normally, use primitive numbers (let x = 100;) instead of new Number().

// Number Methods: 1)toString(): Converts a number to a string.
console.log(num1.toString()); //400
console.log(typeof num1.toString()); //string : number convert into string so we have multiple properties of it ex- .length, .concat etc
console.log(num1.toString().length); //3

// 2) toFixed(): Returns a string with a fixed number of decimal places.
const num = 123.45664784;
console.log(num.toFixed(2)); //123.46

// 3. toPrecision(): Returns a number with a specified number of significant digits.
const num2 = 1223.8966;
console.log(num2.toPrecision(6)); //1223.90
console.log(num2.toPrecision(4)); //1224
console.log(num2.toPrecision(3)); //1.22e+3 where 1.22 is precise value and +3 is exponential value

//4. toLocaleString(): Formats numbers according to a locale.
const num3 = 123456789;
console.log(num3.toLocaleString());        // US locale (depends on system)
console.log(num3.toLocaleString('en-US')); // 123,456,789 : Output (US locale)
console.log(num3.toLocaleString('en-IN')); // 12,34,56,789 : Indian format
// Number Properties
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991


//*********************Maths******************* */
console.log("Maths");

// from math library: Math Object: The Math object provides mathematical constants and functions.
console.log(Math); // Object [Math] {}
// Common Math Methods: 1) Math.abs(): Returns the absolute (positive) value.
console.log(Math.abs(-10)); //10
//2) Math.round(): Rounds to the nearest integer.
console.log(Math.round(4.6)); //5
console.log(Math.round(4.4)); //4

// 3) Math.ceil(): Rounds up. 4) Math.floor(): Rounds down. 5) Math.trunc(): Removes the decimal part.
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.trunc(4.95)); //4

//6. Math.sqrt(): Returns the square root. 7) Math.pow(): Raises a number to a power.
console.log(Math.sqrt(6025)); //77.62087348130012
console.log(Math.pow(2, 3)); //8

//8. Math.min() and Math.max()
console.log(Math.min(2, 4, 1, 9)); //1
console.log(Math.max(2, 4, 1, 9)); //9
//9. Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());


// Random Number Between 1 and 10
const random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Random Number Between Any Range: Example: 10 to 20
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Formula: Math.floor(Math.random() * (max - min + 1)) + min  :  This generates a random integer between min and max (both inclusive).

//Useful Math Constants
console.log(Math.PI); //3.141592653589793
console.log(Math.E);  //2.718281828459045
console.log(Math.SQRT2);  //1.4142135623730951