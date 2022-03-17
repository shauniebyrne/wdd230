const visitsDisplay = document.querySelector('#local-storage');
let lastVisitedDate = Number(window.localStorage.getItem('last-visited'));

const calculation = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisitedDate;

let numberOfDays = daysBetween / calculation;

if (numberOfDays == 0) {
	visitsDisplay.textContent = "This is your first visit!";
} else if (numberOfDays > 0 && numberOfDays < 1) {
	visitsDisplay.textContent = "It hasn't even been a day since your last visit"
} else {
	visitsDisplay.textContent = Math.round(numberOfDays);
}

// store the new number of days
localStorage.setItem('last-visited', Date.now());