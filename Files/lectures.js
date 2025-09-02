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

//So now we can use this
console.log(new Date(2142256980000)); //2023-11-19T15:23:00.000Z