/*Every JavaScript object has an internal link to another object called its Prototype. Eg: Student → Parent → Grandparent → GreatGrandparent
If Student doesn't have something, it asks Parent. If Parent doesn't have it, it asks Grandparent. This is exactly how JavaScript works.

What is a Prototype? A Prototype is another object from which an object can inherit properties and methods. Example:
const user = {
    name: "Balkrishna"
}; user has a hidden link to another object.
user
 ↓
Prototype
JavaScript automatically creates this link.
What is prototype? Every function automatically gets a property called
function User(){}
JavaScript creates: User.prototype You can add methods here.
User.prototype.sayHello = function(){
    console.log("Hello");
};
Every object created using new User() can use sayHello()

Why Do We Need Prototypes? Imagine this constructor:
function User(name){
    this.name = name;
    this.login = function(){
        console.log("Login");
    };
}
Create users:
const u1 = new User("A");
const u2 = new User("B");
const u3 = new User("C");
Memory:
u1
 └── login()
u2
 └── login()
u3
 └── login()
Three users: Three copies of login(). Waste of memory.
Better Solution: Use Prototype.
function User(name){
    this.name = name;
}
User.prototype.login = function(){
    console.log("Login");
};
Now:
u1
↓
Prototype
↓
login()
↑
u2
↑
u3
Only ONE copy: All users share it.  Much faster and memory efficient.

What is __proto__? Very important. Many beginners confuse prototype and __proto__ They are NOT the same.
prototype: Belongs to Functions Example function User(){} console.log(User.prototype);
proto: Belongs to Objects Example const u1 = new User(); console.log(u1.__proto__);

Object.prototype: Every object ultimately inherits from Object.prototype
Example: const obj = {};
Can you do this? obj.toString(); Yes.
Did you create toString()? No.
Where did it come from? Object.prototype Example:
const user = {
    name: "Balkrishna"
};
console.log(user.hasOwnProperty("name"));
Did we write hasOwnProperty()? No.
It comes from: Object.prototype

Complete Prototype Chain
Object: Object → Object.prototype → null
Array: Array → Array.prototype → Object.prototype → null
Function: Function → Function.prototype → Object.prototype → null
Date: Date → Date.prototype → Object.prototype → null
Everything finally ends at null

Prototype Inheritance: Example
const animal = {
    eats:true
};
const dog = {
    bark:true
};
dog.__proto__ = animal;
console.log(dog.eats);
Output: true Why? Search
dog → eats? → No → animal → Yes → true
Dog inherited from Animal.

Constructor + Prototype:
function User(name){
    this.name=name;
}
User.prototype.login=function(){
    console.log("Login");
};
const u1=new User("A");
const u2=new User("B");
Memory: u1 → Prototype → login() <-- u2

Should We Use proto? No. Modern JavaScript recommends
Object.getPrototypeOf(obj) instead of obj.__proto__ And to change the prototype:
Object.setPrototypeOf(child, parent); because __proto__ is considered a legacy feature.


Why is JavaScript called Prototype-Based? Because objects inherit from other objects using prototypes instead of classes.
What is Prototype? An object used for inheritance and method sharing.
Difference between prototype and proto?
prototype belongs to constructor functions.
__proto__ is the hidden link from an object to its prototype.
What is Object.prototype? The top-level prototype from which almost all objects inherit common methods like:
toString(), hasOwnProperty(), valueOf()
Why use Prototype? Saves memory, Shares methods, Enables inheritance, Avoids duplicate functions.



*/