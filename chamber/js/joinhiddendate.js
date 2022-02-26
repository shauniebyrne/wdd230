let d = new Date();

// Hidden Current Date
document.getElementById('current-date').value = d.toDateString();

// Hidden Current Time
let hours = d.getHours();
let mins = d.getMinutes();
let seconds = d.getSeconds();
document.getElementById('current-time').value = `${hours}:${mins}:${seconds}`;

// go this idea from : https://stackoverflow.com/questions/39182400/current-date-and-current-time-in-hidden-fields