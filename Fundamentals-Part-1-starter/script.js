let js = 'amazing';
//if (js === 'amazing') alert('Javascript is FUN');


//40 + 4 + 45 - 10;
// console.log(40 + 4 + 45 - 10);
//dealing with values in Javascript
//this is a smallest piece of information we have we have in javasript
// let firstName = "Jonathan"
// console.log("firstName");
// console.log("firstName");
// console.log("firstName");

// let myFirstJob = 'Programmer'
// let myCurrentJob = 'Teacher'

// console.log(myFirstJob)
// console.log(myCurrentJob)

// let javascriptisFun = true;
// console.log(typeof javascriptisFun);
// console.log(typeof 35);
// console.log(typeof 'joshua');

// Dynamuc typing - changing from boolean to string

// javascriptisFun = 'YES!'
// console.log(typeof javascriptisFun);

// undefefined means an empty value
// when you declare an empty variable it holds a value of udefined
// let year;
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// const firstName = 'Joshua'
// const lastName = 'Njan'
// console.log(firstName + ' ' + lastName)

//maths operators
// const now = 1974;
// const ageJoe = 1984;
// const agePhilip = 1991;
// console.log(ageJoe, agePhilip);

// console.log(now - ageJoe, + '' + ageJoe * 3);
// console.log(ageJoe + agePhilip, ageJoe / 2, 2 ** 3);

//Assignment operators
// let x = 10 + 5;
// x += 5; //this means x = x + 5
// console.log(x);
// x *= 5; // x = x * 5 = 100
// console.log(x);
// x++; // x = x + 1
// console.log(x);
// x--; // x = x -1
// console.log(x);
// x--;
// console.log(x);
// comparison opeerators
// console.log(ageJoe > agePhilip)
// console.log(ageJoe >= 18)
// console.log(ageJoe - agePhilip)

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, i.e x =x10 and y = 10.
// console.log(x, y)


// const now = 2034;
// const ageJoe = now - 1984;
// const agePhilip = now - 1991;

// let averageAge = (ageJoe + agePhilip) / 2
// console.log(ageJoe, agePhilip)
// console.log(averageAge)


// coding challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall

// let markHeight = 1.69;
// let markMass = 78;
// let markBMI = markMass / (markHeight * markHeight)
// console.log(markBMI)

// let johnHeight = 1.95;
// let johnMass = 92;
// let johnBMI = johnMass / (johnHeight * johnHeight)
// console.log(johnBMI)

// markHeigherBMI = markBMI
// johnHigherBMI = johnBMI
// console.log(markHeigherBMI > johnHigherBMI)

// console.log(markHeigherBMI < johnHigherBMI)




// // Test data 2
// let markHeight = 1.88;
// let markMass = 95;
// markBMI = markMass / (markHeight * markHeight)
// console.log(markBMI)

// let johnHeight = 1.76;
// let johnMass = 85;
// johnBMI = johnMass / (johnHeight * johnHeight)
// console.log(johnBMI)

// markHeigherBMI = markBMI
// johnHigherBMI = johnBMI
// console.log(markHeigherBMI > johnHigherBMI)

// console.log(markHeigherBMI < johnHigherBMI)


// strings and template literals

// const firstName = 'Joshua';
// const job = 'Teacher';
// const birthYear = 1999;
// const year = 2034;
// const Joshua = "i'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
// console.log(Joshua);


// // template literals
// const joshua = `i'm  ${firstName}, a ${year - birthYear} years old ${job}`
// console.log(joshua);

// console.log(`Just a regular string...`)

// // using literals for multiple lines
// console.log(`string\n multiple \n line`)

// console.log(`Strings
// Multiple
// lines`);


// taking decisions if else statement

// const age = 15;


// if (age >= 18) {
//     console.log('Rejoice can start driving 🚗 license')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Rejoice is too young. WaIt for ${yearsLeft} more years :)`);

// }



// challenge 2 exercise
// const markBMI = 28.3;
// const johnBMI = 23.9;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's!`)
// } else {
//     console.log(`John's BMI is hiher than Mark's!`)
// }


// using templete literals to include the Bmi values


// let markHeight = 1.69;
// let markMass = 78;
// let markBMI = markMass / (markHeight * markHeight)
// console.log(markBMI)

// let johnHeight = 1.95;
// let johnMass = 92;
// let johnBMI = johnMass / (johnHeight * johnHeight)
// console.log(johnBMI)

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)
// } else {
//     console.log(`Mark's BMI ${johnBMI} is higher than John's BMI ${markBMI}`)
// }


// Type conevrsion and coersion
// converting string to numbers(integers)
// const inputYear = '1991';
// // console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Joshua'));
// console.log(typeof (NaN));

// //conversion of numbers to strings
// console.log(String(23));

// // type of coercion
// console.log('i am ' + 23 + ' years old!');
// console.log('23' - '10' - '3');
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // gives '11'
// n = n - 1; //the minus sign converts the string 11 to a number 11
// console.log(n);
// console.log('10' - '4' - '3' - 2 + '5');

// the conditional ternary operator
// this showcase another way of writing the if else statement. mostly used in the industry
// const age = 40;
// age >= 20 ? console.log('you can only drink wine 🍷') : console.log('you can only drink water 💧')

// const drink = age <= 39 ? 'wine 🍷' : 'water 💧'
// console.log(drink);
// console.log(`i like to drink ${age <= 39 ? 'wine 🍷' : 'water 💧'}`)

const hasDriverslicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriverslicense && hasGoodVision && !isTired) {
    console.log('Sarah should be able to drive');
} else
    console.log('Sarah should not be allowed to drive');

// coding challenge 3
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsTotalScore = 96 + 108 + 89;
// const koalasTotalScore = 88 + 91 + 110;

// console.log(dolphinsTotalScore, koalasTotalScore);

// let koalasAverageScore = koalasTotalScore / 3
// let dolfinsAverageScore = dolphinsTotalScore / 3
// console.log(dolfinsAverageScore, koalasAverageScore);

// dolfinsAverageScore < koalasAverageScore ? console.log(`The winner of the competition is the dolphins with an average of ${dolfinsAverageScore}`) : console.log(`The winner of the competition is the dolphins with an average of ${koalasAverageScore}`)

// if (dolfinsAverageScore < koalasAverageScore) {
//     console.log(`The winner of the competition is the dolphins with an average of ${dolfinsAverageScore}`)
// } elif(dolfinsAverageScore > koalasAverageScore) {
//     console.log(`The winner of the competition is the dolphins with an average of ${koalasAverageScore}`)
// } elif(dolfinsAverageScore == koalasAverageScore) {
//     console.log(`The competition was a draw`)
// }

// Bonus 1
const dolphinsTotalScore = 96 + 108 + 89;
const koalasTotalScore = 88 + 91 + 110;
const minTeamScore = 100;

if (dolphinsTotalScore > koalasTotalScore) {
    console.log('dolphinsTotalScore is the winner of the competition');
} else if (dolphinsTotalScore < koalasTotalScore) {
    console.log('koalasTotalScore is the winner of the competition');
} else if (dolphinsTotalScore >= minTeamScore) {
    console.log('dolphinsTotalScore is the winner');
} else if (koalasTotalScore >= minTeamScore) {
    console.log('koalasTotalScore is the winner');
} else if (koalasTotalScore === minTeamScore) {
    console.log('We have no winner')
}


// console.log(dolphinsTotalScore, koalasTotalScore);

// let koalasAverageScore = koalasTotalScore / 3
// let dolfinsAverageScore = dolphinsTotalScore / 3
// console.log(dolfinsAverageScore, koalasAverageScore);

// dolfinsAverageScore < koalasAverageScore ? console.log(`The winner of the competition is the dolphins with an average of ${dolfinsAverageScore}`) : console.log(`The winner of the competition is the dolphins with an average of ${koalasAverageScore}`)



// the switch statement

// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log('The developers session begins today');
//         break;
//     case 'tuesday':
//         console.log('Do not ket the entry point of the class be vacant');
//         break;
//     case 'wednesday':
//     case 'thusday':
//         console.log('The Lord will fight for me and i shall hold my peace');
//         break;
//     case 'Friday':
//         console.log('With him all things are possible');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Consistency breaths success, do not give up for any reason');
//     default:
//         console.log('Just Believe');
// }


// writing the above using the if/else statement
const day = 'monday';

if (day === 'monday') {
    console.log('The developers session begins today');
} else if (day === 'tuesday') {
    console.log('Do not ket the entry point of the class be vacant');
} else if (day === 'wednesday && thursday') {
    console.log('The Lord will fight for me and i shall hold my peace');
} else if (day === 'friday') {
    console.log('With him all things are possible');
} else if (day === saturday && sunday) {
    console.log('Consistency breaths success, do not give up for any reason');
} else {
    console.log('Just Believe');
}

const age = 25;
age >= 24 ? console.log(`you can now enrole for masters degree`) : console.log(`wait till tou are ${24}years old`)


// coding challenge 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 

var tip;
const billOne = 275;
const billTwo = 40;
const billThree = 430;
let percentTipgreaterTwo = (15 / 100) * 275
let percentTiplessone = (20 / 100) * 40
let percentTipLesstwo = (20 / 100) * 430


let percentTipless = percentTiplessone && percentTipLesstwo




finalValueOne = billOne + percentTipless
finalValueTwo = billTwo + percentTipgreaterTwo
finalValueThree = billThree + percentTipLesstwo




// if (billValue >= 50 && <= 300) {
console.log(`The bill was ${billOne, billTwo, billThree} the tip was ${percentTipgreaterTwo, percentTiplessone, percentTipLesstwo} and the final value of ${finalValueOne, finalValueTwo, finalValueThree}`);

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// }
