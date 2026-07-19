const myarr = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
const result = myarr.forEach((item)=>{
    console.log(item); //1  2  3  4  5  6  7  8  9  10
    return item
})
// console.log(result); //undefined because for-each loop return nothing. 
// but i am not just want only print value or use this value maybe i want to do something other work and use for any other value use filter()

const newFilterNums = myarr.filter( (nums) => nums>4) //return all the values which satisfy the condition in an array like(nums>4)
console.log(newFilterNums); //[ 5, 6, 7, 8, 9, 10 ]
// but we write in scope then use return keyword
const newFilterNums2 = myarr.filter( (nums) => {
    return nums<6
})
console.log(newFilterNums2); //[ 1, 2, 3, 4, 5 ]

//but we want this in for-each loop: yes can do but thoda tricky h
const newForEachNums = []
myarr.forEach( (nums) => {
    if(nums>3 && nums<7){
        newForEachNums.push(nums)
    }
})
console.log(newForEachNums); //[ 4, 5, 6 ]


const Books = [
    { title:"Book One", genere:"History", publish: 1986, edition: 2002 },
    { title:"Book Two", genere:"Geography", publish: 1966, edition: 2002 },
    { title:"Book Three", genere:"Science", publish: 1986, edition: 2005 },
    { title:"Book Four", genere:"History", publish: 1996, edition: 2005 },
    { title:"Book Five", genere:"Geography", publish: 1976, edition: 2007 },
    { title:"Book Six", genere:"History", publish: 1966, edition: 2005 },
    { title:"Book Seven", genere:"History", publish: 1996, edition: 2007 },
    { title:"Book Eight", genere:"Geography", publish: 1976, edition: 2006 },
    { title:"Book Nine", genere:"Science", publish: 1986, edition: 2006 },
    { title:"Book Ten", genere:"History", publish: 1986, edition: 2002 },
]
const userBook = Books.filter( (bk) => (bk.genere==="History"))
console.log(userBook); //print all books bk.genere==="History"

let userBook1 = Books.filter( (bk) => (bk.edition>=2005))
console.log(userBook1); //print all books bk.edition>=2005

userBook1 = Books.filter( (bk) => {
    return bk.genere==="History" && bk.edition>=2005
})
console.log(userBook1);


//map()
const myNumbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
const newNumber = myNumbers.map( (num) => num+10 ) // map() autometically return 
console.log(newNumber); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//chaining on map 
const myChainNumbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
const newChainNumbers = myChainNumbers
    .map( (num) => num+10)
    .map( (num) => num+1) //this num is updated(num+10) then apply (num+1)
console.log(newChainNumbers); //[12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

//reduce():Reduces the array to a single value.
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myTotal = mynums.reduce( (acc, curr) => {
    console.log(`acc: ${acc} + curr: ${curr}`);
    return acc + curr
},0) //this 0 is initial value of acc/ accumulator 
console.log(myTotal); //at last 55

//what if we have object in array to add in shoping cart
const myShoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "MD course",
        price : 5999
    },
    {
        itemName : "DS course",
        price : 12999
    },
]
const myTotalBill = myShoppingCart.reduce( (acc, curr) => {
    console.log(`item Name ${curr.itemName} and price ${curr.price} `);
    return acc = acc+(curr.price);
},0)
console.log("Total bill pay: "+myTotalBill);
