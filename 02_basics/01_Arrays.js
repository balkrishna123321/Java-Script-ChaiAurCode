// Arrays: An Array is a special object used to store multiple values in a single variable. js arrays are recyzable(can add elements after allocation)
// in js arrays can contain a mix of different tata types
let arr= [0, 1, 2, 3, 4, 5]
console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]
//Access array elements
console.log(arr[2]); //2 
// Change Array Elements
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // [ 'Apple', 'Banana', 'Mango' ]
fruits[1] = "Orange";
console.log(fruits); // [ 'Apple', 'Orange', 'Mango' ]
// Arrays declared with const can still be modified. You just can't reassign the variable itself.
const arr1 = [1, 2];
arr1.push(3); //  Allowed
console.log(arr1); // [ 1, 2, 3 ]
// arr1 = [4, 5]; //  Not allowed

// Array Properties: length
console.log(arr1.length); // 3

// Common Array Methods: 1)push(): Adds elements to the end. 2. pop():Removes the last element., 3. unshift(): Adds elements to the beginning.
const fruits1 = ["Apple", "Banana"];
fruits1.push("Mango");
console.log(fruits1); // [ 'Apple', 'Banana', 'Mango' ]
fruits1.pop();
console.log(fruits1); // [ 'Apple', 'Banana' ]
fruits1.unshift("papaya")
console.log(fruits1); // [ 'papaya', 'Apple', 'Banana' ]
// 4. shift(): Removes the first element. 5. includes(): Checks if an element exists. 6. indexOf(): Returns the index of an element. If not found: return -1
fruits1.shift();
console.log(fruits1); // [ 'Apple', 'Banana' ]
// 7. join(): Converts an array into a string.
console.log(fruits1.join(", ")); // Apple, Banana typeof:string

// Slice vs Splice (Very Important)
// slice(): Returns a new array. Original array is not changed.
const arrr = [1, 2, 3, 4, 5];
const result = arrr.slice(1, 4); //last index is excluded
console.log(result); //[2,3,4]
console.log(arrr); // [1,2,3,4,5]

// splice(): Changes the original array. Can remove, replace, or insert elements.
const arrr1 = [1, 2, 3, 4, 5];
const result1 = arrr1.splice(1, 2); 
console.log(result1); // [ 2, 3 ]
console.log(arrr1);     // [ 1, 4, 5 ]

//Merge Arrays: 1)concat()
const result2 = arrr.concat(arrr1);
console.log(result2); 
/*Output [
           1, 2, 3, 4,
           5, 1, 4, 5
         ] */
// Spread Operator (...)
const a1 = [1, 2];
const a2 = [3, 4];
const aresult = [...a1, ...a2];
console.log(aresult); // [ 1, 2, 3, 4 ]

//Nested Arrays
const a3 = [1, 2, [3, 4], [5, 6]];
console.log(a3); // [ 1, 2, [ 3, 4 ], [ 5, 6 ] ]
console.log(a3[2][1]); //4
console.log(a3[1][1]); //undefined
console.log(a3[2][0]); //3

//Flatten Arrays
const a4 = [1, 2, [3, [4, 5]]];
console.log(a4.flat(2)); // [ 1, 2, 3, 4, 5 ]

//Check if Value is an Array
console.log(Array.isArray([1, 2, 3])); //true
console.log(Array.isArray("Hello","bk"));   //false

//***************Create Arrays******** */
//Array.from() , Array.of()
console.log(Array.from("Hello")); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(Array.of(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]


//***************Loop Through Arrays******** */
// 1) for...of
const fruits3 = ["Apple", "Banana", "Mango"];
for (const fruit of fruits3) {
    console.log(fruit);
}
// Apple
// Banana
// Mango

// 2) for-each()
fruits3.forEach(function (fruit) {
    console.log(fruit);
});
// Apple
// Banana
// Mango

//3)Arrow function:
fruits3.forEach((fruit) => {
    console.log(fruit);
});
// Apple
// Banana
// Mango

//Difference Between map() and forEach()
// map(): Returns a new array.
const a5 = [1, 2, 3];
const myresult = a5.map((num) => num * 2);
console.log(myresult); // [ 2, 4, 6 ]

//forEach(): Executes a function for each element and Returns undefined.
const myresult1 = a5.forEach((num) => num * 2);
console.log(myresult1); // undefined
// Use map() when you need a new transformed array and forEach() when you just need to perform an action on each element.