// Exercise #1
// You order a T-shirt for $10, socks for $8, and dinner plates for $20. User JavaScript to calculate the total cost of your order and display it in the console.

const tshirtPrice = 10;
const socksPrice = 8;
const dinnerPlatesPrice = 20;

const totalCost = tshirtPrice + socksPrice + dinnerPlatesPrice;

alert(` The total cost of my order is: $${totalCost}. T-shirt are $${tshirtPrice}, socks are $${socksPrice}, and dinner plates are $${dinnerPlatesPrice}.`);



//Exercise #2
// Your bank account has #100, you spend $20 on lunch, $50 on dinner, and earn $200 from your job. Calculate how much money you have.

const currentBalance = 100;
const lunchExpenses = 20;
const dinnerExpenses = 50;
const jobEarnings = 200;

const finalBalance = currentBalance - lunchExpenses - dinnerExpenses + jobEarnings;

alert(`My final balance is: $${finalBalance}. I started with $${currentBalance}, spent $${lunchExpenses} on lunch, $${dinnerExpenses} on dinner, and earned $${jobEarnings} from my job.`);



//Exercise #3
// Use document.body.innerHTML to make the webpafe blank.


let body = document.querySelector('body');
document.body.innerHTML = '';
