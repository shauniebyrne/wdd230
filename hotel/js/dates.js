//Current Year and Last Modified Date
let currentDate = new Date();

document.getElementById('year').textContent = currentDate.getFullYear();
document.getElementById('changes-date').textContent = document.lastModified;