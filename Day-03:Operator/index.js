// Operators are used to perform operations on variables and values. In JavaScript, there are several types of operators, including:

// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// 2. Assignment Operators: =, +=, -=, *=, /=
// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators: &&, ||, !
// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// 6. Ternary Operator: condition ? exprIfTrue : exprIfFalse

// Let's go through some examples of these operators:

// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
a++; // Increment a by 1 (a becomes 11)
b--; // Decrement b by 1 (b becomes 4)
console.log(a); // Output: 11
console.log(b); // Output: 4

// 2. Assignment Operators
let x = 20;
x += 5; // Equivalent to x = x + 5 (x becomes 25)
x -= 3; // Equivalent to x = x - 3 (x becomes 22)
x *= 2; // Equivalent to x = x * 2 (x becomes 44)
x /= 4; // Equivalent to x = x / 4 (x becomes 11)
console.log(x); // Output: 11

// 3. Comparison Operators
let c = 10;
let d = "10";

console.log(c == d); // Output: true (loose equality, type coercion occurs)
console.log(c === d); // Output: false (strict equality, no type coercion)
console.log(c != d); // Output: false (loose inequality)
console.log(c !== d); // Output: true (strict inequality)
console.log(c > b); // Output: true
console.log(c < b); // Output: false
console.log(c >= b); // Output: true
console.log(c <= b); // Output: false

// 4. Logical Operators
let isStudent = true;
let hasAccess = false;

console.log(isStudent && hasAccess); // Output: false (both conditions must be true)
console.log(isStudent || hasAccess); // Output: true (at least one condition is true)
console.log(!isStudent); // Output: false (negation of isStudent)

// 5. Bitwise Operators
let e = 5; // In binary: 0101
let f = 3; // In binary: 0011

console.log(e & f); // Output: 1 (bitwise AND)
console.log(e | f); // Output: 7 (bitwise OR)
console.log(e ^ f); // Output: 6 (bitwise XOR)
console.log(~e);    // Output: -6 (bitwise NOT)
console.log(e << 1); // Output: 10 (left shift)
console.log(e >> 1); // Output: 2 (right shift)

// 6. Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes        

// 7. Grouping Operator
let result = (2 + 3) * 4; // Parentheses change the order of operations
console.log(result); // Output: 20  

// 8. Typeof Operator
console.log(typeof a); // Output: number
console.log(typeof d); // Output: string
console.log(typeof isStudent); // Output: boolean
console.log(typeof Learner); // Output: object      

// 9. Rational Operators
let g = 10;
let h = 20;

console.log(g < h ? "g is less than h" : "g is not less than h"); // Output: g is less than h

// 10. Comma Operator
let i = (1, 2, 3); // The comma operator evaluates each of its operands and returns the value of the last operand
console.log(i); // Output: 3


// 1. Odd or Even?

let number = 7;
let results = (number %2 === 0) ?"Even":"Odd";
console.log("Odd or Even:", results); // Output: Odd

//2. Do you have a Driving License?

let ages =16

let canDrive = (ages >= 18) ? "Yes, you can drive." : "No, you cannot drive.";
console.log("Driving License:", canDrive); // Output: No, you cannot drive.


// 3. Calculate CTC with a Bonus

let monthlySalary = 12300
let bonus = 20

// Calculate annual salary

const annualSalary = monthlySalary * 12;

// Calculate bonus amount
const bonusAmount = (bonus / 100) * annualSalary;

// Calculate total CTC
const totalCTC = annualSalary + bonusAmount;

console.log("Total CTC:", totalCTC); // Output: Total CTC: 14760

// 4. Write a program for the Traffic Light Simulation.

let colorA = "redLight";
let colorB = "greenLight"

let ride = "go"

if(ride == "stop"){
    console.log(colorA);
    
}else{
    console.log(colorB);
}

// 5. Create an Electricity Bill Calculator

let units = 10
let unit_cost = 150
let discount = 20

// monthly electric bill
const monthElectric = units * unit_cost *30;

// year electric bill
const yearElectric = monthElectric *12

// discount
const discountAmount = (discount/100) * yearElectric

// Annual Electric bill
const annualElectric =  yearElectric - discountAmount

console.log("monthElectric",monthElectric)
console.log("yearElectric",yearElectric);
console.log("discountAmount",discountAmount);
console.log("annualElectric",annualElectric);

// 6. Leap Year Checker



const checkLeapYear = (leapYear) => {
   
    
    if ((leapYear * 365) %4 == 2 ) {
        console.log("this is leap year",  );

    }else{
        console.log("not leap year");
        
    }

}

checkLeapYear(2025)

const maxNumbers = (p,q,r) => {
    if(p>q && p>r){
        console.log("p is maximum",p); 
    }else if(q>r && q>p){
        console.log("q is maximum",q); 
    }else if(r>p && r>q){
        console.log("r is maximum",r); 
    }

}

maxNumbers(100,11,12)



let count = 5;

let doubled = count <<1;

console.log(doubled);