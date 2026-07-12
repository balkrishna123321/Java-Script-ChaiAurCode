//use to compare two value and return boolean (true/false)
//javascript allow us to compare two different datatypes
// 1) Equal (==) Checks if two values are equal after type conversion (type coercion).
console.log(5 == 5);      // true
console.log(5 == "5");    // true JavaScript converts "5" (string) to 5 (number)
console.log(true == 1);   // true
console.log(false == 0);  // true

//2) Strict Equal (===) Checks both value and data type.
console.log(5 === 5);      // true
console.log(5 === "5");    // false Type is different (number vs string)
console.log(true === 1);   // false

//3) Not Equal (!=) Checks if values are not equal after type conversion.
console.log(5 != 3);      // true: yes both are not equals
console.log(5 != "5");    // false : no both are equals?

//4. Strict Not Equal (!==) Checks both value and type.
console.log(5 !== "5");   // true
console.log(5 !== 5);     // false

//5. Greater Than (>)
console.log(10 > 5);   // true
console.log(5 > 10);   // false



//6. Less Than (<)
console.log(5 < 10);   // true
console.log(10 < 5);   // false

//7. Greater Than or Equal (>=)
console.log(10 >= 10);   // true
console.log(15 >= 10);   // true
console.log(5 >= 10);    // false

// Special Cases (Very Important)
//Strings are compared alphabetically (lexicographically) based on Unicode values.
console.log("apple" < "banana");   // true
console.log("cat" > "bat");        // true
console.log("apple"<"Apple");       // false
console.log("apple">"Apple");       //true

//2. null Comparisons
console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true For relational operators (>, <, >=, <=), null is converted to 0 thats why it is true.

//3. undefined Comparisons
console.log(undefined == 0);   // false
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false undefined does not convert to 0 in comparisons like null does.

//4. Boolean Comparison
console.log(true == 1);      // true
console.log(false == 0);     // true
console.log(true === 1);     // false
console.log(false === 0);    // false
//Best Practice✅ Use strict equality (===) and strict inequality (!==) whenever possible.




