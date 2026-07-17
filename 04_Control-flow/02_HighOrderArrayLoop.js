/*Higher-Order Array Loops in JavaScript: Higher-order array methods are functions that take another function (callback) as an argument. They make working with arrays easier, cleaner, and more readable.
means if you have array obeasly you need to iterate it so we implement some method to iterate it easily eg are:-
The most commonly used higher-order array methods are:
forEach()
map()
filter()
reduce()
find()
findIndex()
some()
every()
sort()
What is a Higher-Order Function?: A Higher-Order Function is a function that: Takes another function as an argument, or Returns a function.*/
const numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num);
}); //1  2  3 
//Here: forEach() is the higher-order function. and The anonymous function is the callback function.
// Callback Function: A callback is a function passed as an argument to another function.

//1. forEach(): Executes a callback for every element. Example
const arr = [10, 20, 30];
arr.forEach(function(value) {
    console.log(value);
}); //10  20  30 
//by arrow function
arr.forEach( (item) => {
    console.log(item); //10  20  30
})
//Access Index: give value and index both
arr.forEach((value, index) => {
    console.log(index, value);
});/*0 10
     1 20
     2 30 */
arr.forEach((value, index, array) => {
    console.log(array);
});/*[ 10, 20, 30 ]
[ 10, 20, 30 ]
[ 10, 20, 30 ]*/
//what if the function is not there but we want to print it?
function printme(item1) {
    console.log(item1);
}  
arr.forEach(printme) //10  20  30

//if we have data like array in object[{}]?
const myCodingArr = [
    {
    name:"bk",
    course:"js",
    language:"java",
    },
    {
    name:"ak",
    course:"html",
    language:"html",
    },
    {
    name:"sk",
    course:"python",
    language:"py",
    },
] 
myCodingArr.forEach( (value) => {
    //console.log(value); // give all the objects with key and value
    console.log(value.language); // java  html  py
    
})


//maps: map is a Object hold key and value pair. Creates a new array by transforming each element it is unique in the map no duplicate value
const map = new Map()
map.set("IN", "India")
map.set("US", "United states of America")
map.set("FR", "France")
map.set("IN", "India") //duplicate value not taken
console.log(map);/*Map(3) {
  'IN' => 'India',
  'US' => 'United states of America',
  'FR' => 'France'
} */
for(const key of map){
    console.log(key);
}/*[ 'IN', 'India' ]
[ 'US', 'United states of America' ]
[ 'FR', 'France' ] */
for(const [key, value] of map){
    console.log(key, ": ", value);
}/*IN :  India
US :  United states of America
FR :  France */

// what if we have object and print through for of loop
const myobject = {
    "name": "balkrishna",
    "section": "B"
}
// for(const [key, value] of myobject){  //myobj(Object) is not itrable by for of loop
//     console.log(key, ": ", value);
    
// } use for in loop for object iteration
//  Loop Types: 1)for...of: Used for arrays and strings.
const arr1 = [10, 20, 30];
for (const value of arr1) {
    console.log(value); // 10, 20, 30 
}
const greeting = "Hellow world !"
for(const greet of greeting){
    console.log(greet); //print each char of greeting in next line 
}/*H
e
l
l
o
w
 
w
o
r
l
d
 
!*/
    

//2)for...in: Used for objects.
const user = {
    name: "Balkrishna",
    age: 20
};
for (const key in user) {
    console.log(key, user[key]);
} //name Balkrishna
  //age 20
// use for-in loop for array
const myarr = ["a1", "a2", "a3", "a4"]
for(const key in myarr){
    //console.log(key); //0  1  2  3 : print only key(index) of arr
    console.log(key, myarr[key]); //print key(index) and value of array 
    
    
}
// to kya ham ab map me bhi for-in loop lga skte h? nhi kyuki Map object h or itratable nhi h to for-in loop nhi lga skte 
