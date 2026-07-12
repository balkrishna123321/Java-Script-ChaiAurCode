/* JavaScript uses two types of memory:1)Stack Memory 2)Heap Memory
The difference depends on the type of data being stored.
1. Stack Memory: Stack memory stores Primitive Data Types. (Number,String,Boolean,Null,Undefined,Symbol,BigInt)
Characteristics: Fast access, Stores actual values, Each variable gets its own copy, Changes to one variable do not affect another Example- */
let myName = "Balkrishna";
let anotherName = myName;
anotherName = "Patidar";

console.log(myName); //Balkrishna
console.log(anotherName); //Patidar
/* Memory Diagram: Stack Memory
myName --------> "Balkrishna"
anotherName ---> "Patidar"
Explanation: anotherName = myName creates a copy of the value. Changing anotherName does not change myName.

2. Heap Memory: Heap memory stores Reference (Non-Primitive) Data Types. Reference types include:(Object,Array,Function)
Characteristics: Stores objects and arrays, Variables store the reference (address), not the actual object, Multiple variables can point to the same object Example-*/
let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl"
};
let userTwo = userOne;
userTwo.email = "xyz@gmail.com"; 

console.log(userOne.email); //xyz@gmail.com
console.log(userTwo.email); //xyz@gmail.com
/*Memory Diagram:
Stack                     Heap

userOne ------\
               \--------> {
userTwo ------/            email: "xyz@gmail.com"
                            upi: "user@ybl"
                          }

Explanation:
userTwo = userOne does not create a new object. Both variables point to the same object in heap memory.
Changing the object through one variable is visible through the other. */