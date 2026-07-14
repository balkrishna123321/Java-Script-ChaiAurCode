// An Object is a collection of key-value pairs. Key (Property): Name of the property. and Value: Data stored in that property.
// Objects are used to represent real-world entities like a user, product, car, employee, etc.

//Creating Objects: 1) Object Literal (Recommended)
const user = {
    name: "Balkrishna Patidar",
    age: 20,
    city: "Ratlam"
};
console.log(user.age); //20
console.log(user["age"]); //20 (Recomended): in object (user) age:20 the word age is also store as string you can write it as "age"=20
console.log(user); // { name: 'Balkrishna Patidar', age: 20, city: 'Ratlam' }

// 2. Object Constructor: when we create obj using constructor singalton object is created
const user1 = new Object();
user1.name = "Balkrishna";
user1.age = 20;
console.log(user1); // { name: 'Balkrishna', age: 20 }

// Access Object Properties
// 1. Dot Notation
console.log(user.name); // Balkrishna Patidar
console.log(user.age);  // 20
// 2. Bracket Notation
console.log(user["name"]); // Balkrishna Patidar
console.log(user["age"]);  // 20

// Add New Properties/Update properties
const user2 = {
    name: "BK"
}
user2.age=21  //adding age
user2.name="Balkrishna" //updating name
console.log(user2); //{ name: 'Balkrishna', age: 21 }
// Delete Properties
delete user2.age
console.log(user2); //{ name: 'Balkrishna' }

// Freeze Object: Prevents changes to an object.
Object.freeze(user2)
user2.name="Patidar" //we can't change name after freeze
console.log(user2); //{ name: 'Balkrishna' }

//Objects methods: Objects can contain functions called methods.
const user3 = {
    name: "Balkrishna Patidar",
    greet: function () {
        console.log("Hello!");
    }
};
user3.greet(); // Hello!
console.log(user3); // { name: 'Balkrishna Patidar', greet: [Function: greet] }
console.log(user3.greet); // [Function: greet]
console.log(user3.greet()); //Hello! with undefined in next line? pta nhi kha se aara h? so ye aara h:
//There is no return statement in function So JavaScript automatically returns : undefined


// this Keyword: this refers to the current object.
const user4 = {
    name: "Balkrishna",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};
user4.greet(); // Hello Balkrishna : we are refrancing name from the obj in function
// Note: Avoid using arrow functions as object methods when you need this, because arrow functions don't have their own this.

//Nested Objects
const user5 = {
    name: "Balkrishna Patidar",
    address: {
        city: "Ratlam",
        state: "Madhya Pradesh"
    }
};
console.log(user5.address) //{ city: 'Ratlam', state: 'Madhya Pradesh' }
console.log(user5.address.city); //Ratlam

//Merge Objects: 1) Object.assign()
const bothUser = Object.assign({}, user4, user5);
console.log(bothUser); // Output:
/* {
  name: 'Balkrishna Patidar',
  greet: [Function: greet],
  address: { city: 'Ratlam', state: 'Madhya Pradesh' }
} */
//2) Spread Operator (recomended)
const bothUserSpread = {...user4, ...user5}
console.log(bothUserSpread); //Output
/* {
  name: 'Balkrishna Patidar',
  greet: [Function: greet],
  address: { city: 'Ratlam', state: 'Madhya Pradesh' }
} */


// agar kisi symbol ko as a key object me use krna h/ declear krna h to kese hoga?
const mySym = Symbol("key1") //symbol
const jsUser = {
    name : "Balkrishna",
    age : 20,
    [mySym] : "myKey1",
}
//console.log(jsUser.mySym); //myKey1 but not use as a key it is a string
//console.log(typeof jsUser.mySym); //string but we want symbol: use brackets on [mysym] in obj and also in calling
console.log(jsUser[mySym]); //myKey1
console.log(typeof mySym); //symbol
console.log(typeof jsUser.name); //string
console.log(jsUser); // { name: 'Balkrishna', age: 20, Symbol(key1): 'myKey1' } where mysym as a Symbol(key1): 'myKey1'


// Object Methods: 1) Object.keys(): Returns all keys. 2)Object.values(): Returns all values. 3)Object.entries(): Returns key-value pairs.
const jsuser1 = {
    name: "Balkrishna",
    age: 20,
    email: "balkrishna@google.com",
};
console.log(Object.keys(jsuser1)); // [ 'name', 'age', 'email' ] where datatype is array you put all the key in a array and access it using loop. can do same as values and entries
console.log(Object.values(jsuser1)); // [ 'Balkrishna', 20, 'balkrishna@google.com' ]
console.log(Object.entries(jsuser1)); /* Array in array [ 
  [ 'name', 'Balkrishna' ],
  [ 'age', 20 ],
  [ 'email', 'balkrishna@google.com' ]
] */
console.log(jsuser1); // { name: 'Balkrishna', age: 20, email: 'balkrishna@google.com' }
//4) hasOwnProperty(): Checks if a property exists.
console.log(jsuser1.hasOwnProperty("name")); // true
console.log(jsuser1.hasOwnProperty("add"));  //false

const jsuser2 = [  // we receive data like this in arrays of objects of multiple users data so how we access it? 
    {
        id:"0",
        name:"ak",
        mail:"bk@gmail.com",
    },
    {
        id:"1",
        name:"dk",
        mail:"bk@gmail.com",
    },
    {
        id:"2",
        name:"bk",
        mail:"bk@gmail.com",
    },
]
console.log(jsuser2[2]); // { id: '2', name: 'bk', mail: 'bk@gmail.com' }  //access using user order index number
console.log(jsuser2[1].name); //dk








