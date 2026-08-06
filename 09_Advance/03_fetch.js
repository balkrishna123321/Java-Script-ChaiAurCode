/*Fetch API:  The Fetch API is the modern way to send HTTP requests in JavaScript. It is used to communicate with servers and APIs. 
fetch() is a built-in JavaScript function that sends an HTTP request and returns a Promise.
Example: fetch("https://api.github.com/users/octocat"); This sends a GET request to the GitHub API.

fetch returns a Promise.
const promise = fetch(url);
console.log(promise);
Output: Promise { <pending> } Why pending? Because the browser is still waiting for the server.

Reading Data
fetch("https://api.github.com/users/octocat")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
});
Why response.json()? The server sends data as JSON. JavaScript cannot directly use JSON text. So, response.json() converts JSON into a JavaScript object. but it is not an object It returns another Promise.

Using async/await
Instead of .then().
async function getUser(){
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    console.log(data);
}
getUser(); This looks like synchronous code but works asynchronously.

Error Handling
Always use try...catch.
async function getUser(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
HTTP Methods Summary:
Method	    Purpose
GET	        Read Data
POST	    Create Data
PUT     	Replace Data
PATCH   	Update Data
DELETE	    Delete Data

in image fetch(2).png: js engine me bas memory heap or call stack hote h but yha kuch spacial type k bhi function hote h jese settimeout(), setInterval() etc ((These functions are Browser APIs (or Node.js APIs), not part of the JavaScript engine.))
ye function jab call hote h to directly call stack me na jakar registercall back banate h or task queue me chale jate h((The callback does not immediately go to the queue.
It first waits inside the Browser API until the timer finishes.)) jha par 1 event loop hota h jo continuously check 
karta rahta h ki queue empty to nhi h ya queue me kya aaya h then usko timelimit k bad call stack me bhej deta h exicute hone k liye 

isi tarah fetch bhi 1 spacial function h jo pahle exicute hota h as compare to other spacial function kyuki fetch me spacial queue banti h jisko priority queue/ microTast queue((Promise callbacks are placed in the Microtask Queue, which has higher priority than the Callback Queue.))
bhi kahte h jise jyada priority milti h just like VIP line then ye call stack me upr se jati h or sabse pahle exicute hoti h 

const response = fetch(url), object{}  fetch me , lga k object bhi dal sakte h 

Promise internal machanism: (see image fetch.png) fetch basically 2 part me devide hota h 1st memory space ko reserve kera h variable or data k liye  or 2nd web browser/node ki API request handle karne k liye
1st one is memory me space reserve krta h ex.data isi me 2 array hote h pahla onfulfiled[] and dusra onRejection[] jaha onfulfiled[] promise k resolution/resolve ko leta h 
or onRejection[] jo h vo rejection/reject ko leta h ye dono array hote h or inme directly value push krna allow nahi h inko access nahi kr skte ye dono private h 
2nd one is web browser api handle krega ya node based uske bad yaha se jati h 1 network request jisko directly nahi  send kr skte bich me koi 1 resourse chaiye hota h
resourse ya to browser de raha hoga ya nodeJS yha se milti h network request ab ya to data network pr jayega ya nahi jayega agar jayega to response aayega
or vo response hamesha onfulfiled[] nahi gai to onRejection[] error404 bhi onfulfiled[] me hi jata h((404 is still a valid HTTP response we can manually throw an error..))

vo jo data tha vo memory me reserve ho jata h data variable me/kisi bhi variable ka name dedo uske bad vo data hamne global memory me jo response = fetch(url) banaya tha 
vo sara data is response me chala jata h 

flow:

fetch()

↓

Creates Promise

↓

Returns Promise Immediately

↓

Browser API Sends Network Request

↓

Server Responds

↓

Promise Settled

↓

Fulfilled
or
Rejected

↓

Microtask Queue

↓

Event Loop

↓

Call Stack
*/