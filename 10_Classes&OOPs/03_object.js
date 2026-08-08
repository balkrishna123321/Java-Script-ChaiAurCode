function multipleby5 (num){
    return num*5
}
console.log(multipleby5(5)) //25
multipleby5.power = 2
console.log(multipleby5(5)) //25
console.log(multipleby5.power); //2   mtlb function function bhi h or object bhi h kyuki end me sari chije(array,string,function) object se hi hoke jati h
console.log(multipleby5.prototype); //{}

function createUser(username, score){
    this.username=username
    this.score=score
}
//we know function is beheave like a object to kya me kuch additional functionality inject krva skta hu? jese array me .length() function hota h 
// and prototype se bahut sari functionality milti h bydefault eg map(), slice(), etc. to ha me krva skta hu kyuki at the end ye bhi to object h or
//  object k pas functionality hoti h. with the help of prototype we can inject functionality like increment and use it in multiple user
createUser.prototype.increment = function(){
    this.score++  //use this word kyuki finction confuse ho jayega ki kis user ka score badana h.  after this jo bhi is function ko use krega uska score bad jayega
}
createUser.prototype.printMe = function(){
    console.log(`print my Score is: ${this.score}`);
}
const user1 = new createUser("balkrishna", 99)  //use new keyword: 
const user2 = new createUser("bk", 98)
user1.printMe() //print my Score is: 99
user2.printMe() //print my Score is: 98
//new keyword: behind the scene? 1)new object create hota h 2)uska reference banta h yha pr reference createuser() function h
//3)prototype linked prototype property of constructor function with newly created object kyuki js classes k through constructer function nahi deti h ye new keyword k through deti h
//pahle ase hi likhte the isi vajah se classes ka syntext aaya js me 4)constructor call 5) newly object mil jata h