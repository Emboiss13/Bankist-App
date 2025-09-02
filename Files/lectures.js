'use strict';

//Conversion
//console.log(Number('23'));
//console.log(+'23');

//Create a date
//console.log(new Date('2020-01-01'));
//console.log(new Date('December 24, 2015'));
//console.log(new Date(2037, 10, 19, 15, 23));
//console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

//This is how we got the date data for our transactions
console.log(future.toISOString());

//Time stamps
console.log(future.getTime()); //2142256980000

//So now we can use these milliseconds
console.log(new Date(2142256980000)); //2023-11-19T15:23:00.000Z

//1000 milliseconds = 1 second
//60 seconds = 1 minute
//60 minutes = 1 hour
//24 hours = 1 day
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

console.log(calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 31))); // 12