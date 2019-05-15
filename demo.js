/*
for ( i = 44 ; i < 67 ; i++ ){
    console.log(i);
}
*/ // Log 44-66 to console

/*
console.log ("Hello".length)
*/ //LETTER COUNT

/*
console.log("Hello".toUpperCase())
*/ // UPPER CASE LETTERS

/*
console.log("           Hello".trim());
*/ //REMOVES SPACES

/*
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
*/ //GENERATE RANDOM NUMBER

/*
console.log("      |      |      |      ")
console.log("      |      |      |      ")
console.log("      |      |      |      ")
console.log("- - - - - - - - - - - - - -")
console.log("      |      |      |      ")
console.log("      |      |      |      ")
console.log("      |      |      |      ")
console.log("- - - - - - - - - - - - - -")
console.log("      |      |      |      ")
console.log("      |      |      |      ")
console.log("      |      |      |      ")
*/ // GRID

/*
console.log("All Around the World".toUpperCase().charAt(8));
*/ //Displays 8th letter uppercase

/*
let favouriteDrink = "Coffee";
console.log(favouriteDrink);
*/ //DEFINE VARIABLE AND RETURN RESULT

/*
let favouriteDrink = "Coffee";
console.log(" My favourite drink is " +favouriteDrink);
*/ //DEFINE VARIABLE AND RETURN RESULT 2

/*
let favouriteDrink = "Coffee";
console.log(`My favourite drink is ${favouriteDrink}`); 
*/ //DEFINE VARIABLE AND RETURN RESULT 3

/*
var myName = "Nicolae";
var myAge = 30;
var favouriteColor = "Black";
console.log(`My name is ${myName} , I'm ${myAge} and my favourite color is ${favouriteColor}.`);
*/ //VARIABLES IN A SENTENCE

/*
var cellOne = "x"
var cellTwo = "o"
var cellThree = ""
var cellFour = "x"
var cellFive = "x"
var cellSix = ""
var cellSeven = "o" 
var cellEight = ""
var cellNine = ""

console.log("      |      |      ")
console.log(`  ${cellOne}   |   ${cellTwo}  |  ${cellThree}    `)
console.log("      |      |      ")
console.log("- - - - - - - - - - ")
console.log("      |      |      ")
console.log(`  ${cellFour}   |   ${cellFive}  |  ${cellSix}    `)
console.log("      |      |      ")
console.log("- - - - - - - - - - ")
console.log("      |      |      ")
console.log(`  ${cellSeven}   |   ${cellEight}   |  ${cellNine}    `)
console.log("      |      |      ")

*/

/*
if ( 1 == "1") {
    console.log(true);
}
else {
    console.log(false);
}
*/

/*
var age = 17

if (age >= 18) {
    console.log ("Yes I can serve you.")
}
else (age < 18) 
    console.log ("I can't serve you.")
*/

/*
if (place == "Manc" && weather = "Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
}
else {
    console.log("What it isn't raining?");
}
*/

/*
var age = 17
var country = "UK"
                    

if ( age == 17 && country == "UK"){
    console.log("Oh no!")
}
else if ( age < 17 && country == "UK" ){
    console.log("Hi there!")
}


//CHALLENGE NO.1

var password = "password"

if ( password.length < 8 ){
    console.log("That's to short")
}
else{
    console.log("Password accepted!")
}


//CHALLENGE NO.3

var no = 15

if (no % 3 == 0 && no % 5 == 0){
    console.log("Fizz Buzz")
}
else if (no % 5){
    console.log("Buzz")
}
else if (no % 3){
    console.log("Fizz")
}
else {
    console.log(no);
}
*/
/*
var cellOne = "x"
var cellTwo = "x"
var cellThree = "x"
var cellFour = "x"
var cellFive = "x"
var cellSix = ""
var cellSeven = "o" 
var cellEight = ""
var cellNine = ""

console.log("      |      |      ")
console.log(`  ${cellOne}   |   ${cellTwo}  |  ${cellThree}    `)
console.log("      |      |      ")
console.log("- - - - - - - - - - ")
console.log("      |      |      ")
console.log(`  ${cellFour}   |   ${cellFive}  |  ${cellSix}    `)
console.log("      |      |      ")
console.log("- - - - - - - - - - ")
console.log("      |      |      ")
console.log(`  ${cellSeven}   |   ${cellEight}   |  ${cellNine}    `)
console.log("      |      |      ")

if (cellOne == cellTwo && cellTwo == cellThree){
    console.log("Win")
}
*/

/*
var drinkSize = "Medium"
var drinkType = "Cappucino"

const getOrder = (drinkSize, drinkType) => {
    console.log (`Order Received: ${drinkSize} ${drinkType}`);
}

getOrder ( drinkSize, drinkType );
*/ // FUNCTION

/*
const addUp = (num1, num2) => {
    return num1 + num2;
}
   
addUp(7,3)
console.log(addUp(2,5)); 

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
   
console.log("The temperature is " + getFahrenheit(15) + "°F");
*/
/*
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
   }
   
   console.log(factorial(5));
*/


/*
let orderCount = 0;

const takeOrder = (topping) => {
 console.log(`Pizza with ${topping}`);
 orderCount++;
}
takeOrder("pineapple");
*/
/*
var pinNo = 2929
var blnc = 5124

const cashWithdrawal = (pinNo, blnc, amnt) => {
    if ( amnt <= blnc && pinNo == pinNo) {
        console.log(`Withdrawing ${amnt} from ${blnc}`);
    }
    else {
        console.log ("Withdrawn not accepted.");
    }
}

cashWithdrawal (2929, blnc, 900)
cashWithdrawal (2929, blnc, 8908)

//FUNCTION

let orderCount = 0;
var bsize = 11
var topping = "Mushrooms"

const takeOrder = (topping , bSize) => {
 console.log(`${bsize}" Pizza with ${topping}`);
 return orderCount +1;
}
takeOrder(topping, bsize);
*/ //FUNCTION WITH TWO PARAMETERS

/*
var x = 65
var y = 33
var result = x * y

function multiply (x, y,){
    console.log(`The result is ${result}.`);
}
multiply (x, y, result);
*/ // DECLARATION FUNCTION

/*
const multiplyNo = (n1,n2) => {
    return n1 * n2
}
console.log(multiplyNo (5, 6));
*/ //ARROW FUNCTION

/*
var myMusic = ["Vivaldi - 4 Seasons, Ichi - Abracadabra, Ganny & Ichi - Pray"]
console.log(myMusic);
*/ //ARRAY DECLARATION

/*
// .pop Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
myWebsites.pop ();
console.log (`My ${myWebsites.length} favourite websites: ${myWebsites}.`);
*/

/*
// .push Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
myWebsites.push ("wearecodenation.com", "facebook.com");
console.log (`My ${myWebsites.length} favourite websites: ${myWebsites}.`);
*/

/*
// .shift Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
myWebsites.shift();
console.log (`My ${myWebsites.length} favourite websites: ${myWebsites}.`);
*/

/*
// .unshift Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
myWebsites.unshift();
console.log (`My ${myWebsites.length} favourite websites: ${myWebsites}.`);
*/

/*
// .splice Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
myWebsites.splice (2,2, "twitter.com", "wikileaks.org");
console.log (`My ${myWebsites.length} favourite websites: ${myWebsites}.`);
*/

/*
// .slice Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
myWebsites.push ("wearecodenation.com", "facebook.com");
let slc = myWebsites.slice (2);
console.log (`My ${myWebsites.length} favourite websites: ${myWebsites}.
Array slice: ${slc}`);
*/

/*
//.concat Method
let myWebsites = ["w3schools.com", "stackoverflow.com", "amazon.com"];
let vidWebsites = ["youtube.com", "twitch.com"];

let websites = myWebsites.concat(vidWebsites);
console.log (`My ${myWebsites.length + vidWebsites.length} favourite websites: ${myWebsites + vidWebsites}.
`);
*/


/*
const getOrder = (top1, top2, top3, top4, top5) => {
    console.log(`Your sandwich with ${top1}, ${top2}, ${top3}, ${top4}, ${top5} is ready!`);
}

getOrder ("Olives", "Mushrooms", "Cucumbers", "Jalapenos", "Pickles");
*/


/*
var myNo = [13, 9, 6];

myNo.unshift(0);
console.log(`These are my ${myNo}.`);
*/


/*
//GENERATE A RANDOM NO. BETWEEN 1 - 50
console.log(Math.floor(Math.random()*50)+1);
*/


/*
// GENERATE 6 RANDOM NO. BETWEEN 1 - 50
for (i = 0; i < 6; i++){
    console.log(Math.floor(Math.random()*50)+1);
}
*/


/*
// REVERSE COUNT 9 - 0
for ( x = 0; x < 9; x++){
    console.log (9 - x);
}
*/


/* LOOP
let favMov = ["Gone In 60 Seconds", "Next", "Cube", "Star Wars", "Star Trek"];

favMov.push("Madagascar", "Happy Feet");
for ( let movIndex = 0; movIndex < favMov.length; movIndex++) {
    console.log(favMov[movIndex]);
}
*/


/*
let films = ["Happy Feet","Madagascar","Star Wars"];

const filmCheck = (films) => {
  for (let filmIndex = 0; filmIndex < films.length; filmIndex++){
      console.log(films[filmIndex]);
  }
}
*/


/*
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Spade";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random)*4];
}
console.log(currentCard);
*/

/*
var films = ["Happy Feet", "Madagascar", "Ghostbusters"];
var x = films.includes("Ghostbusters");

const filmCheck = (films,x) => {
    if ( x == films[2]) {
        console.log ("Yey, it's Ghostbusters");
    }
    else {
        console.log ("Boo, we want Ghostbusters");
    }
}

filmCheck(films,"Ghostbusters");
*/



/*
var films45 = ["Happy Feet", "Madagascar", "Ghostbusters", "aaabb", "1gg"];
var x = films.includes("Ghostbusters");

const filmCheck2 =(num, list) => {
    if (list[num]==="Ghostbusters"){
        return `yes`

    }
    else {
        return `no`
    }
}

console.log(filmCheck2(1, films45));
*/
 

/*
var favColor = "Blue"

if ( favColor === "Blue" || favColor === "Red"){
    console.log ("Good choice.");
}
*/

