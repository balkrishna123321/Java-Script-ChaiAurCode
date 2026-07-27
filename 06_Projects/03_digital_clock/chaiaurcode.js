const clock = document.querySelector('#clock'); //Selects the <div id="clock"> element.

setInterval(() => {  //Runs the function repeatedly.
    const date = new Date(); //Gets the current date and time.
    clock.innerHTML = date.toLocaleTimeString(); //Displays only the current time inside the #clock div.
}, 1000); //Updates the clock every 1000 milliseconds (1 second).