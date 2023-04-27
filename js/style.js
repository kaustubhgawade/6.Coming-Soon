let counter = document.getElementById('days');
let theDate = new Date('02/26/2024'); // mm/dd/yyyy
let currentDate = new Date();

let daysLeft = theDate.getTime() - currentDate.getTime();
daysLeft = Math.ceil(daysLeft / (24*60*60*1000));
console.log(daysLeft);

counter.innerText = daysLeft;




