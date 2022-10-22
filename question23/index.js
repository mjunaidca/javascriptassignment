// Conditional Tests

let time = 'true money';
let wealth = 'money';
console.log(time !== wealth); // checking if variables are Not Equal
console.log(time === wealth); // checking if variables are Equal
console.log(time == 'true money'); // checking if variable is equal to that value
console.log(time != 'true money'); // checking if variables is NOT equal to a particular string
console.log(wealth == 'money'); // checking if variable is equal to that value
console.log(wealth != 'money'); // checking if variables is NOT equal to a particular string
console.log(wealth == 'money' || time == 'money' ? true : false); // checking if either of the variable is equal to that value
console.log(wealth == 'money' && time == 'money' ? true : false); // checking if both of the variables are equal to that value
console.log(typeof time == typeof wealth ? true : false); // checking the type of variable
console.log(typeof time !== typeof wealth); // matching variable types