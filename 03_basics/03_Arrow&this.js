const user = {
    name:"balkrishna",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name}, Welcome to the website`);
        console.log(this);  // 
    }
}
user.welcomeMessage(); // balkrishna, Welcome to the website
//our current context is line 1 to 8(in yelow braces{}) so if you want to refer current context use this. keyword
//now we change our current context(value)
user.name = "bk"
user.welcomeMessage() //bk, Welcome to the website
console.log(this); //{} print empty object{}// In Node.js modules, top-level 'this' is {} (module.exports). In the browser, top-level 'this' refers to the window object. so Node wraps every file inside a module
/*
balkrishna, Welcome to the website
{
  name: 'balkrishna',   //L6: console.log(this);  show the current contex is this
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
bk, Welcome to the website
{ 
    name: 'bk',   //L6: console.log(this);  show the current contex is this after change the context
    price: 999,
    welcomeMessage: [Function: welcomeMessage] 
} */


function chai(){
    const userName="BalkrishnaPatidar";
    console.log(this.userName); //undefine: 'userName' is a local variable, not a property of 'this'. Therefore this.userName is undefined.
    //console.log(this); //<ref *1> Object [global]:  In non-strict mode (Node.js), 'this' inside a normal function refers to the global object.  In strict mode, it is undefined.
    
}
chai() 

//Arrow function
const chai1 = () => {
    const userName="BalkrishnaPatidar";
    console.log(this.userName); // undefine 
    console.log(this); //{}
    
}
chai1() 
//basic arrow function: explicit return
const addTwo = (num1, num2) =>{
    return num1+num2
}
console.log(addTwo()); //NaN
console.log(addTwo(5,5)); //10

//implicit return arrow function: remove parenthesis{}, return :  used more in react
const addTwo2 = (num1, num2) => (num1+num2)
console.log(addTwo2(5,5)); //10 
//if you want to return object 
const addTwo3 = () => ({username:"balkrishna"})
console.log(addTwo3()); // { username: 'balkrishna' }

const myArray = [2, 4, 7, 9, 3, 0, 1];
myArray.forEach((item) => (console.log(item)));




