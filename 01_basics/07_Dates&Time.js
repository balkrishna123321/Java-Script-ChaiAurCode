// The Date object is used to work with dates and times in JavaScript.
// You can: 1)Get the current date and time, 2)Create custom dates, 3)Extract day, month, year, hours, minutes, etc. 4)Format dates 5)Compare dates 6)Get timestamps

//Creating a Date: 1)Current Date and Time
const today = new Date();
console.log(today); //2026-07-13T19:13:34.940Z but today is 14, it happen because of Z in last JavaScript internally stores dates in UTC(Universal time Coordinated). India is UTC +5:30.
console.log(typeof today); // object

// 2. Create Date from String
const date1 = new Date("2026-07-15");
console.log(date1); //2026-07-15T00:00:00.000Z
//3. Create Date using Year, Month, Day: Remember: Months are start from 0th-indexed. January(0), February(1), etc
// 4. Create Date with Time
const myDate = new Date(2026, 6, 14, 10, 30, 45);
console.log(myDate); //2026-07-14T05:00:45.000Z

//*******Displaying Dates********** */
//toString()
const date2 = new Date();
console.log(date2.toString()); //Tue Jul 14 2026 00:48:11 GMT+0530 (India Standard Time)
// toDateString()
console.log(new Date().toDateString()); //Tue Jul 14 2026
// toTimeString()
console.log(new Date().toTimeString()); // 00:57:09 GMT+0530 (India Standard Time)
// toLocaleString()
console.log(new Date().toLocaleString()); // 14/7/2026, 12:58:11 am
// toLocaleDateString()
console.log(new Date().toLocaleDateString()); // 14/7/2026
// toLocaleTimeString()
console.log(new Date().toLocaleTimeString()); //12:59:49 am

// Getting Individual Parts
const date = new Date();
//year
console.log(date.getFullYear()); // 2026
// Month
console.log(date.getMonth()); // 6 Returns 0–11.
// Date (Day of Month)
console.log(date.getDate()); //14
// Day of Week
console.log(date.getDay()); //2 Return 0-6 : sunday-saturday

//Hours, minute, seconds, milliseconds
console.log(date.getHours()); //1
console.log(date.getMinutes()); //5
console.log(date.getSeconds()); //17
console.log(date.getMilliseconds()); //31

// Timestamp: A timestamp is the number of milliseconds since January 1, 1970 (UTC).
console.log(Date.now()); // 1783971478449
console.log(Math.floor(Date.now() / 1000)); //1783971587: Convert Milliseconds to Seconds

// Compare Dates
const d1 = new Date("2026-07-14");
const d2 = new Date("2026-07-20");
console.log(d1 < d2); //true

// Custom Date Formatting
const date3 = new Date();
console.log(
    `${date3.getDate()}-${date3.getMonth() + 1}-${date3.getFullYear()}`  //We add 1 because getMonth() returns values from 0 to 11.
); //14-7-2026