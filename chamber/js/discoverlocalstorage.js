const visitsDisplay = document.querySelector('#local-storage');
const lastVisitedDate = localStorage.getItem('last-visted');

function calculation() {1000 * 60 * 60 * 24};

let daysBetween = Date.now() - lastVisitedDate;

let numberOfDays = Number(daysBetween / calculation());
Math.round(numberOfDays);

if (numberOfDays !== 0) {
	visitsDisplay.textContent = numberOfDays;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of days.
numberOfDays++;
// store the new number of days
localStorage.setItem('last-visited', Date.now());