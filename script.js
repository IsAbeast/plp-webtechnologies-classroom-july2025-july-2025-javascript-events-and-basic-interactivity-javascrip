// ===============================
// Part 1: Variables & Conditionals
// ===============================
let userAge = 20; 
if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ===============================
// Part 2: Functions
// ===============================

// Function 1: calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total:", calculateTotal(100, 3));

// Function 2: format a string
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Alice"));

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: For loop (countdown)
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// Loop 2: ForEach loop (iterate through array)
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ===============================
// Part 4: DOM Manipulation
// ===============================

// Select elements
let message = document.getElementById("message");
let changeTextBtn = document.getElementById("changeTextBtn");
let toggleColorBtn = document.getElementById("toggleColorBtn");
let addItemBtn = document.getElementById("addItemBtn");
let itemList = document.getElementById("itemList");

// 1) Change text content
changeTextBtn.addEventListener("click", () => {
  message.textContent = "The text has been changed!";
});

// 2) Toggle class (changes style)
toggleColorBtn.addEventListener("click", () => {
  message.classList.toggle("active");
});

// 3) Add new list item
addItemBtn.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New item added!";
  itemList.appendChild(newItem);
});
