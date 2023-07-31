// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive :D');

function logger() {
    console.log('my name is Joshua charles')

}
logger();
logger();
logger();


function fruitProcessor(orange, pineapple) {
    const juice = (`while coming from the market, please buy ${orange} oranges and ${pineapple} pineapples`)
    return juice;
}
const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);
New = typeof ('5')
console.log(New);


// //function declaration
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge(1991)
// // console.log (age1);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;

// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);


// Arrow Functions
// const calcAge3 = birthYear => 2037 = birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// a function to calculate how many years a person has left until retirement. we need to cal. the age, retirement age minus the currentage all based on the birthyear.

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(1991, 'Joshua'));
console.log(yearsUntilRetirement(1980, 'Bonny'));
