/*Promises: A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value. Three States 1)Pending 2)Fulfilled or 3)Rejected  :   promises ko create or consume kiya jata h
Creating Promise: */
const promise1 = new Promise(function(resolve,reject){  //call back function where we do an Async task like: DB(database) call, cryptography, network etc
    setTimeout(function(){
        console.log("Async task is done")  //print Async task is done after 1 sec
        resolve()
    }, 1000)
}); 
//consuming promises: then:resolve (then is only connected to resolve directly)
promise1.then(function(){
    console.log("promises consumed");
    
}) //print: Async task is done  promises consumed

//create and consume ko 1 me bhi kr skte h
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 done")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 is resolved");
    
}) //print: Async task is done  promises consumed  Async task 2 done  Async 2 is resolved

//if data come from any network then need to pass it 
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "balkrishna", email:"bk@gmail.com"})  //Resolve ke andar object pass kiya.
    },1000)
})
promise3.then(function(user){ 
    console.log(user) //user me wahi object aa jayega. { userName: 'balkrishna', email: 'bk@gmail.com' }
})

//callback hell
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "balkrishna", password: "1234"})
        } else {
            reject("ERROR: Something went wrong") 
        }
    }, 1000)
})
promise4
.then(function(user){                                      //chaining
    console.log(user) //{ userName: 'balkrishna', password: '1234' }
    console.log(user.userName) //balkrishna
    return user.userName
})
.then(function(userName){
    console.log(userName) //balkrishna
})
.catch(function(error){
    console.log(error); //ERROR: Something went wrong if error=true he to  
}).finally(function(){  //finally block is always exicute 
    console.log("The promise is either resolved or rejected");
    
})

//promise handle by async and await
const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true
        if(!error){
            resolve({username:"javascript", password:"12345js"})
        } else {
            reject("ERROR: Js error went wrong")
        }
    }, 1000)
})
async function consumerPromise5() {
    try{
        const response = await promise5
        console.log(response);
    }catch(error){
        console.log(error); 
    }
}
consumerPromise5() //"ERROR: Js error went wrong" when error true otherwise  { username: 'javascript', password: '12345js' }


//taking data from network
async function getAllUsers() {
    try{
        const response = await fetch('https://api.github.com/users/balkrishna123321')
        //console.log(response); //print response but not in valid format
        const data = await response.json() //json me convert hone me time lagta h isliye isko bhi await krvana padega
        console.log(data)
    }
    catch(error){
        console.log("E: ",error);
    }
}
getAllUsers() //url k andar ka data nhi aaya? kyuki kuch chije time leti h load hone me

//isi format ko .then or .catch format me kese likhenge?
fetch('https://api.github.com/users/balkrishna123321')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
//pahle vala code ka result bad me aara h or bad vale ka pahle aara h kyuki pahle vale me 1 second ka setTimeOut lgaya hua h 










