
// Pop-ing the alert
alert('hello');
alert(`Good day, I'm John Paul S. Dela Cruz, a BSIT Student with specialization in Mobile and Web Application from National University of the Philippines - Manila. Actually I'm aspring Full stack developer, and I want to create a new programming language that a lot of people use it someday, thank you! I have so many skills in coding, specially JavaScript, the one that I'll master now, HTML, CSS, JAVA, REACT.js, EXPRESS & NODE.JS with the database are MYSQL, and MongoDB atlas`);

//Terminlogy
 
let  num1 = 2026;
let  num2 = 2004;

console.log(` I'm ${num1 - num2} years old`);


let b = document.querySelector('body');
document.body.innerHTML = 'Jeypy';



console.log(`Items(${1+2}): $${((2095 +(799 * 2)) / 100)}`);




//Lesson 3: Exercise 

const name = 'John Paul S. Dela Cruz';
console.log(`My name is ${name}`);


const coffePrice = 5;
const coffeQuantity = 1;
const totalCoffePrice = coffePrice * coffeQuantity;

const bagelPrice = 3;
const bagelQuantity = 1;
const totalBagelPrice = bagelPrice * bagelQuantity;

console.log(` Total Cost: $${totalCoffePrice + totalBagelPrice}`);

alert(` Total Cost: $${totalCoffePrice + totalBagelPrice}\n Thank you, come again!`);


console.log('');
//Exercise Pt 2

const basketballs = 2095;
const basketballsQuantity = 2;
const totalBasketballsPrice = basketballs * basketballsQuantity;

const tshirts = 799;
const tshirtQuantity = 2;
const totalTshirtPrice = tshirts * tshirtQuantity;

const costShipping = 499;
const shippingQuantity = 2;
const totalShippingCost = costShipping * shippingQuantity;

const EstimatedTax = 0.1;

console.log(`Items(${basketballsQuantity + tshirtQuantity}): $${(totalBasketballsPrice + totalTshirtPrice) / 100}`);
console.log(`Shipping & handling: $${totalShippingCost / 100}`);
console.log(`Total before tax: $${(totalBasketballsPrice + totalTshirtPrice + totalShippingCost) / 100}`);
console.log(`Estimated tax(10%): $${((totalBasketballsPrice + totalTshirtPrice + totalShippingCost) * EstimatedTax / 100).toFixed(2)}`);
console.log(`Order total: $${(((totalBasketballsPrice + 
    totalTshirtPrice + totalShippingCost) + 
    (totalBasketballsPrice + totalTshirtPrice + totalShippingCost) * EstimatedTax) / 100).toFixed(2)}`);






