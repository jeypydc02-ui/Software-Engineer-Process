
// Lesson 2 Exercises
// At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.

const soupPrice = 10;
const burgerPrice = 8;
const iceCreamPrice = 5;

console.log(`Soup Price: ${soupPrice}`);
console.log(`Burger Price: ${burgerPrice}`);
console.log('Ice Cream Price: ' + iceCreamPrice);

const totalCost = soupPrice + (burgerPrice *3) + iceCreamPrice;
console.log(`Total Cost: ${totalCost}`);

console.log(` So the total cost of the order is $${totalCost}.`);



//You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.

const numberOfPeople = 3;
const costPerPerson = totalCost / numberOfPeople;

console.log(`Cost per person: ${costPerPerson}`);


//Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).


const toasterPrice = 1850;
const shirtPrice = 750;
const shirtQuantity =2;

const totalShirtCost = shirtPrice * shirtQuantity;



const totalPurchaseCost = ((toasterPrice + totalShirtCost) / 100);

console.log(`Total Purchase Cost: $${totalPurchaseCost}`);



// Calculate a 10% and 20% tax on the total cost of the toaster and shirts.

console.log(`Estimated Tax(10%): $${((toasterPrice + totalShirtCost) *0.1) /100}`);


console.log(`Estimated Tax(20%): $${((toasterPrice + totalShirtCost) *0.2) /100}`);