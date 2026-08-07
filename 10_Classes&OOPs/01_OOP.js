//object litteral
const user = {
    username:"Balkrishna",
    age:21,
    loginCount:8,
    signnedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
    }
}
console.log(user); //{ print full object}
console.log(user.username); //Balkrishna
console.log(user.getUserDetails()); //Got user details from database + undefined

//man lo yaha ak or object h user2 or usme bhi username:"bk" h or mene map() method lagaya h to usko kese pta chalega ki kis username pr lagana h
// to yha aata h this concept(current context k liye)
const user1 = {
    username:"BK",
    age:22,
    loginCount:10,
    signnedIn: false,
    getUserDetails: function(){
        console.log(`Name of user is: ${this.username}`);
        //console.log(this); //print current context: yaha par object hi current context h abhi to full object print karega
    }
}
console.log(user1.getUserDetails()); //Name of user is BK + undefined
console.log(this); //print {}(empty object) means global context me abhi kuch nahi h khali object h, kyuki hamne nodejs ko browser se nikal liya h but
//yahi (console.log(this); )agar me console me print karvau to vha ka current context me window h to vo window object print krega jo ki global object h 

//agar user2,user3... banane h to pura copy krna padega or value change krni padegi solution? constructor function
//new keyword: ye new context banane me kam aata h or isi ko ham constructor function bolte h jo allow krta h ki 1 object se multiple instances bna skte h
function alluser(username, age, loginCount, signnedIn){
    this.username = username   //where username with this keyword is a variable and the other username are parameter passed value(argument)
    this.age = age
    this.loginCount = loginCount
    this.signnedIn = signnedIn
    //also write function in it
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this  //pass the object  define implicitly not need to be write
}
const user2 = new  alluser("balkrishna", 20, 5, true)
const user3 = new  alluser("bk", 21, 6, false)
const user4 = new  alluser("ak", 22, 7, true)
console.log(user2);  // alluser { username: 'balkrishna', age: 20, loginCount: 5, signnedIn: true, greetings: [Function (anonymous)] }  if we dont use new keyword it override the user3 and next 
console.log(user3);  //alluser { username: 'bk', age: 21, loginCount: 6, signnedIn: false, greetings: [Function (anonymous)] }
console.log(user4);  //alluser { username: 'ak', age: 22, loginCount: 7, signnedIn: true, greetings: [Function (anonymous)] }
console.log(user2.constructor); //print: [Function: alluser]  kyuki constructor means khud k bare me refrence means alluser is a function
console.log(user2 instanceof alluser) //true yes user2 is a instance of alluser object
console.log(user2 instanceof Object); //true




  
  



