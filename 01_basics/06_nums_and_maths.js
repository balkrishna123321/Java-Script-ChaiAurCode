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
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Math Object: The Math object provides mathematical constants and functions.
console.log(Math);