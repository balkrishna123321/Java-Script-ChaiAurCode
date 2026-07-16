/*How JavaScript Executes Code

JavaScript is a single-threaded, synchronous language. This means:
Single-threaded: One operation at a time. Synchronous: Executes code line by line in order (unless asynchronous APIs like setTimeout are involved).

Whenever JavaScript runs a program, it creates an Execution Context.
What is an Execution Context?: An Execution Context is the environment in which JavaScript executes code.
It contains: Variables, Functions, The value of this, Scope information
Think of it as a box where JavaScript stores everything needed to execute your code.

Types of Execution Context: There are three types:
1. Global Execution Context (GEC): Created first when the program starts.
let a = 10;
function greet() {}
console.log(a);
JavaScript first creates the Global Execution Context. 
In browsers: this === window
In Node.js: this === global
2. Function Execution Context (FEC): Whenever a function is called:
function greet() {
    console.log("Hello");
}
greet();
JavaScript creates a new Execution Context for greet(). When the function finishes, that context is removed.
3. Eval Execution Context: Created only when eval() is used.
Almost never used in modern JavaScript.: Every Execution Context Has Two Phases

Every execution context runs in 2 phases.
Execution Context
        │
        ▼
+----------------------+
| Memory Creation Phase|
+----------------------+
        │
        ▼
+----------------------+
| Execution Phase      |
+----------------------+

Phase 1: Memory Creation Phase: Also called the Creation Phase. JavaScript scans the code. It allocates memory for:
Variables, Functions
During the Memory Creation Phase: Notice: Variables are initialized as undefined

Phase 2: Execution Phase: Now JavaScript executes code line by line.
Memory becomes a → 10, b → 20, add → function from  a → undefined, b → undefined,

Step 1: Global Execution Context Created: Global Execution Context in this keyword
Step 2: Memory Creation Phase: Memory x → undefined, y → undefined, add → function, result → undefined
Step 3: Execution Phase: x = 5, y = 10, result = add(5,10)
Now JavaScript needs to execute: add(5,10) : ye 1 alag exicution context(space) bna lega
Function Call: Whenever a function is called: JavaScript creates Function Execution Context
Memory Creation Phase of Function: Parameters are treated like variables. a → undefined, b → undefined
Execution Phase of function: a = 5, b = 10, return 15 Function returns 15
Global context receives: result = 15 then Function Execution Context is destroyed/delete.

Final Memory: x → 5, y → 10, result → 15 add → function
What Happens Internally?
Global Context → add() is called → Function Execution Context is created → Code executes → Return value is sent back → Function Execution Context is destroyed → Control returns to Global Context.



*******************Call Stack*****************
JavaScript uses a Call Stack to keep track of execution contexts. LIFO: Last In First Out Ex: */
function one() {
    console.log("One");
}
function two() {
    one();
}
function three() {
    two();
}
one()
two()
three(); //                                                 One  
/*                                                           ↓
Call Stack: Global             one                          Two
                                ↓   (LIFO:                   ↓    (LIFO:
one       one(exicute)         Two   remove one             Three  remove One 
 ↓     →                 →      ↓    remove two)    →        ↓     remove Two
Global      Global            Global                       Global  remove Three)

What Happens to Memory? Whenever a function finishes: Function Execution Context →Destroyed: Its local variables disappear.
Complete Flow Diagram:
                        Program Starts
                                │
                                ▼
                        Global Execution Context
                                │
                                ▼
                        Memory Creation Phase
                                │
                                ▼
                        Execution Phase
                                │
                                ▼
                        Function Call
                                │
                                ▼
                        New Function Execution Context
                                │
                                ▼
                        Memory Creation Phase
                                │
                                ▼
                        Execution Phase
                                │
                                ▼
                        Return Value
                                │
                                ▼
                        Destroy Function Context
                                │
                                ▼
                        Continue Global Execution
                                │
                                ▼
                        Program Ends
                                │
                                ▼
                        Call Stack Empty

*/