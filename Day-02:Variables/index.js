// ==========================================
// VARIABLES IN JAVASCRIPT - DEEP EXPLANATION
// ==========================================



// WHAT IS A VARIABLE?
// A variable is a named container that stores a value in memory.
// You can declare, assign, and use variables throughout your code.

// ==========================================
// 1. DECLARATION: var, let, const
// ==========================================

// VAR (Function-scoped, outdated, avoid using)
var name = "John";
var age = 25;
console.log(name, age); // Output: John 25

// LET (Block-scoped, modern, preferred)
let city = "New York";
let salary = 50000;
console.log(city, salary); // Output: New York 50000

// CONST (Block-scoped, cannot be reassigned)
const country = "USA";
const pi = 3.14159;
console.log(country, pi); // Output: USA 3.14159

// ==========================================
// 2. DATA TYPES STORED IN VARIABLES
// ==========================================

// Primitive Types
let stringVar = "Hello World";      // String
let numberVar = 42;                  // Number
let booleanVar = true;               // Boolean
let undefinedVar;                    // Undefined (no value assigned)
let nullVar = null;                  // Null (intentional empty)
let symbolVar = Symbol("id");        // Symbol (unique identifier)
let bigIntVar = 1234567890123456n;  // BigInt (large numbers)

console.log(typeof stringVar);       // Output: string
console.log(typeof numberVar);       // Output: number
console.log(typeof booleanVar);      // Output: boolean
console.log(typeof undefinedVar);    // Output: undefined
console.log(typeof nullVar);         // Output: object (quirk in JS)
console.log(typeof symbolVar);       // Output: symbol
console.log(typeof bigIntVar);       // Output: bigint

// Reference Types (Objects) [Non Primitive] 

// Objects, Arrays, Functions are reference types. They store a reference to the value in memory.


let arrayVar = [1, 2, 3, 4, 5];
let objectVar = { name: "Alice", age: 30 };
let functionVar = function() { return "Hello"; };

console.log(typeof arrayVar);        // Output: object
console.log(typeof objectVar);       // Output: object
console.log(typeof functionVar);     // Output: function

// ==========================================
// 3. VARIABLE SCOPE
// ==========================================

// Global Scope (accessible everywhere)
let globalVar = "I am global";

function checkScope() {
  // Function Scope (local to this function)
  let localVar = "I am local";
  console.log(globalVar);  // Accessible
  console.log(localVar);   // Accessible
}

checkScope();
// console.log(localVar); // Error: localVar is not defined

// Block Scope (let and const only)
if (true) {
  let blockVar = "I am in a block";
  const blockConst = "Block constant";
  console.log(blockVar);    // Accessible here
  console.log(blockConst);  // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined

// ==========================================
// 4. HOISTING
// ==========================================

// VAR hoisting (moved to top, initialized as undefined)
console.log(hoistedVar);  // Output: undefined (not an error)
var hoistedVar = "Hoisted";

// LET/CONST hoisting (Temporal Dead Zone - TDZ)
// console.log(notHoisted); // ReferenceError
let notHoisted = "Not hoisted";

// ==========================================
// 5. REASSIGNMENT AND MUTATION
// ==========================================

// LET can be reassigned
let person = "Bob";
person = "Charlie";  // Reassignment allowed
console.log(person); // Output: Charlie

// CONST cannot be reassigned
const PI = 3.14;
// PI = 3.15; // Error: Assignment to constant variable

// But CONST objects can be mutated (properties can change)
const user = { name: "David", age: 28 };
user.age = 29;  // Mutation allowed
user.name = "Dean";  // Mutation allowed
console.log(user); // Output: { name: 'Dean', age: 29 }
// user = {}; // Error: cannot reassign

// ==========================================
// 6. VARIABLE NAMING CONVENTIONS
// ==========================================

// camelCase (for variables and functions)
let firstName = "John";
let lastName = "Doe";
let calculateTotal = function() {};

// PascalCase (for Classes)
class Car {}

// UPPER_SNAKE_CASE (for constants)
const MAX_USERS = 100;
const API_KEY = "secret123";

// ==========================================
// 7. PRACTICAL EXAMPLES
// ==========================================

// Example 1: Simple variable declaration and usage
let productPrice = 99.99;
let quantity = 5;
let totalPrice = productPrice * quantity;
console.log("Total: $" + totalPrice); // Output: Total: $499.95

// Example 2: Using let in a loop
for (let i = 0; i < 3; i++) {
  console.log("Loop iteration: " + i);
}

// Example 3: Object and variable interaction
const student = {
  name: "Emma",
  grade: "A",
  score: 95
};
let studentName = student.name;
console.log("Student: " + studentName); // Output: Student: Emma

// Example 4: Array and variable
const colors = ["red", "green", "blue"];
let favoriteColor = colors[0];
console.log("Favorite: " + favoriteColor); // Output: Favorite: red

// ==========================================
// 8. KEY TAKEAWAYS
// ==========================================

// • Use 'let' for variables that change
// • Use 'const' by default for immutability
// • Use 'var' only if you understand function scope
// • Variables are case-sensitive: name !== Name
// • Declare variables close to where you use them
// • Meaningful variable names improve code readability



const Learner = {
  name: "Emma",
  age: 22,  
  isStudentStatus: true,
  favProgrammingLanguage: "JavaScript",
};

Learner.name = "Pavitharan"; // Reassigning name property
let learnerDetail = Learner.name + " is " + Learner.age + " years old and loves " + Learner.favProgrammingLanguage;

console.log(learnerDetail);

let arrayNums = [1, 2, 3, 4, 5];

arrayNums[0] = 10; // Mutating the first element of the array
console.log(arrayNums); // Output: [10, 2, 3, 4, 5]