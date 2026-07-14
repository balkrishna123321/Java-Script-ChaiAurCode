// Destructuring: of Arrays and objects
//Object destructuring: is a feature introduced in ES6 that lets you extract properties from an object and store them in variables.

//Without Destructuring:
const course = {
    courseName: "JavaScript",
    price: 999,
    instructor: "Hitesh"
};
// const instructor = course.instructor;
// console.log(instructor); // Hitesh

// with Destructuring
//const { instructor } = course;  // is equivalent to: const instructor = course.instructor;
//console.log(instructor); // Hitesh

//Destructure Multiple Properties:
const {instructor, price, courseName} = course;
console.log(instructor); //Hitesh
console.log(price);//99
console.log(courseName); //javascript

// Rename Variables(key): Sometimes you want a different variable name.
const { instructor: teacher } = course;
console.log(teacher); // Hitesh  
console.log(instructor); //Hitesh

// Default value: undefined
const { instructor1, age = 20, gender } = course;
console.log(instructor1);  // undefined
console.log(age); // 20
console.log(gender); //undefined


//********* Loop Through Objects********* */
//Objects are not iterable with for...of. Instead use for...in.
const user = {
    name: "Balkrishna Patidar",
    age: 21,
    city: "Ratlam"
};
for (const key in user) {
    console.log(key);
}/* Output:
name
age
city  */ //for access value use user[key] instead of user.key
for (const key in user) {
    console.log(key, user[key]);
}/* Output:
name Balkrishna Patidar
age 21
city Ratlam  */ 

// Rule:
// object.property → fixed property name.
// object[property] → variable/dynamic property name.

// 3. Optional Chaining (?.)
//console.log(user.address.email); //give error: Cannot read properties of undefined (reading 'email') but we do not want this
// Solution
console.log(user.address?.email); // give undefined Instead of throwing an error, JavaScript safely returns undefined.


//***************4. JSON vs Object***************
//Many beginners think they are the same, They are related but different. */
// JavaScript Object: Exists inside JavaScript. and Can contain methods.
const user1 = {
    name: "Balkrishna",
    greet() {
        console.log("Hello");
    }
};

// JSON: JSON stands for JavaScript Object Notation
/* Rules:
Keys must be inside double quotes.
Cannot contain functions.
Used to exchange data between applications (client ↔ server). */

//Object → JSON
const user2 = {
    name: "Balkrishna",
    age: 20
};
const json = JSON.stringify(user2);
console.log(json);  // {"name":"Balkrishna","age":20}
console.log(typeof json); // string
//Notice that after JSON.stringify(), the result is a string, not an object.

//JSON → Object
const json1 = '{"name":"Balkrishna","age":20}';
const obj = JSON.parse(json1);
console.log(obj); //{ name: 'Balkrishna', age: 20 }
console.log(typeof obj); //object

//Why Do We Need JSON? Suppose your React app sends data to a Node.js server.
// Suppose your React app sends data to a Node.js server.
// Object in JavaScript
const user6 = {
    name: "Balkrishna",
    age: 20
};
// Before sending it over the internet, it is converted to JSON: using JSON.stringify(user);
// The server receives the JSON string and converts it back into an object: using const obj = JSON.parse(json);
// This is how data is commonly exchanged in web applications.

/* Diff between JavaScript Object and JSON?
| JavaScript Object                                       | JSON                                              |
| ------------------------------------------------------- | ------------------------------------------------- |
| Stored in JavaScript memory                             | Text format (string)                              |
| Can contain functions, methods, and `undefined`         | Cannot contain functions or `undefined`           |
| Keys may be quoted or unquoted (when valid identifiers) | Keys must always be enclosed in double quotes     |
| Type is `object`                                        | Type is `string` until parsed with `JSON.parse()` |
*/