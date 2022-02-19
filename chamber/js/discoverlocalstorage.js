const visitsDisplay = document.querySelector('#local-storage');
let lastVisitedDate = Number(window.localStorage.getItem('last-visited'));

const calculation = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisitedDate;

let numberOfDays = daysBetween / calculation;

if (numberOfDays == 0) {
	visitsDisplay.textContent = "This is your first visit!";
} else {
	visitsDisplay.textContent = Math.round(numberOfDays);
}

// store the new number of days
localStorage.setItem('last-visited', Date.now());