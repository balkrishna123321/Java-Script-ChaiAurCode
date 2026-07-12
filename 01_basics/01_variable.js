/*JavaScript is a dynamically typed language.
What is Dynamically Typed? A dynamically typed language is one where you don't need to declare the data type of a variable. JavaScript determines the type automatically at runtime. */

/*variable:A variable is a container used to store data. You can store numbers, text, booleans, objects, arrays, etc., in a variable.
JavaScript provides three ways to declare variables:1) const (Recommended for fixed values, cant change) 2)let (Can be reassigned, Cannot be redeclared in the same scope, Block-scoped.) 
3)var (Old way):Can be reassigned, Can be redeclared, Function-scoped.*/
const accountId = 103
let accountEmail = "bk@gmail.com"
var accountPassword = "123456" // not recommended because of block-scope and functional-scope({scope}): it also change var value in scope:loops,if-else etc
accountCity = "ratlam" //not recommended
let accountState; //undefined-variable: print:undefined
 
//accountId = 104 //can't do this TypeError: Assignment to constant variable.
accountEmail = "balkrishna@gmail.com"
accountPassword = "100000"
accountCity = "gurgaon"
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity); instead of this do this as table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



