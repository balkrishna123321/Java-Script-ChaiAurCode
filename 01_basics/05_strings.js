// A String is a sequence of characters used to represent text. You can create a string using: Single quotes (' '), Double quotes (" "), Backticks (` `) - Template Literals
const Myname = new String("Balkrishna")   //rarely used
console.log(typeof Myname); //object : string is a object there not array


let name = "Balkrishna";
let city = 'Ratlam';
let college = `K.R. Mangalam University`;
let age = 21;

console.log(name);
console.log(city);
console.log(college);

//String Length: Use the .length property.
console.log(name.length); //10

//Access Characters: Strings use 0-based indexing.
console.log(name[0]); // B
console.log(name[4]); // r
console.log(name[9]); // a

//String Methods: 1)toUpperCase():Converts all characters to uppercase. 2)toLowerCase():Converts all characters to lowercase. 3)trim():Removes spaces from the beginning and end.
let name1 = "   Balkrishna patidar    ";
console.log(name.trim()); // Balkrishna
//4) 4. charAt(): Returns the character at a given index. 5)indexOf(): Returns the index of the first occurrence of a character or substring.
console.log(name.indexOf("a")); //1
//6)includes(): Checks if a string contains a substring. 7)startsWith() 8)endsWith() 9)slice(0,4):Balk 10)substring(), 11)replace():Replaces the first matching value. 12)replaceAll():Replaces all matching values.
console.log(name.includes("krishna")); //true
console.log(name.substring(2, 6)); //lkri
//13) .concat():Joins two or more strings. 14)repeat():Repeats a string.
console.log(name.concat(" "+city)); //Balkrishna Ratlam
console.log("Hi ".repeat(3)); //Hi Hi Hi 


//Template Literals (ES6): Template literals use backticks (Recommanded) (`).
console.log(`My name is ${name} and I am ${age} years old.`);

console.log(name.__proto__) // {} (object)
console.log(name.slice(-4,8)); //sh

let line = "My name is balkrishna patidar"
console.log(line.split(' ')); //split the line into array on the basis of space(' ')

// String Immutability: Strings are immutable in JavaScript: You cannot change a character directly.  To modify a string, create a new one


