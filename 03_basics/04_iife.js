//IIFE (Immediately Invoked Function Expression)
// An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it is created. Instead of defining a function and calling it later:
// normal function

function greet() {
    console.log("Hello");
}
greet();//Hello we callint it then it run
//in IIFE
(function () { //Named IIFE
    console.log("Hello IIFE"); //Hello IIFE
})();
// IIFEs are mainly used to: 1)Execute code immediately. 2)Avoid polluting the global scope.
//Notice the function is wrapped inside ().: This makes it a function expression instead of a function declaration.
(()=>{
    console.log("Hello arrow function");
})(); //Hello arrow function
// if you want to give variable
((name)=>{
    console.log(`Hello ${name} arrow function`);
})('bk'); //Hello bk arrow function