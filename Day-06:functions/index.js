

// Define or Declare the function

function printThis() {
    console.log("Declare the function")
}


// Call or Invoke the function
printThis()

// Function as an Expression

// A function expression is a function that is assigned to a variable.
//  It can be anonymous or named. Unlike a function declaration, a function expression is not available before its initialization.

let printMe = function () {
    console.log("Function expression")
}

printMe()

// Parameter & Arguments

// A parameter is a variable defined in the function declaration. 
// It receives a value when the function is called.


// An argument is the actual value that you pass to the function when calling it.

function sum(a, b) {   // a,b is parameter
    const result = a + b
    console.log(result)
}

sum(10, 5)  // value is arguments


// Return Statement

function multi(a, b) {
    const result = a * b
    return result

}

const answer = multi(10, 5);
console.log(answer)

function double(x) {
    return 2 * x
}

console.log(double(answer));

// Default Parameters

// "A default parameter allows us to assign a default value to a function parameter when the caller doesn't provide a value or passes undefined."

function cal(a, b = 0) {

    return (2 * (a + b))
}
const resVar = cal(2);  // when cal(2) 2+ undefined = NAN
console.log(resVar)

// Rest Parameter
// A rest parameter allows a function to accept an indefinite number of arguments and collects the remaining arguments into an array.

// Rest parameter always wil be in last parameter 
function calculation(x, y, ...rest) {
    console.log(x, y, rest)
}
calculation(1, 2, 3, 4, 5, 6, 7, 8, 9)


// Nested Function

// A nested function is a function defined inside another function. The inner function has access to variables from its outer function because of lexical scoping. When the inner function retains access to those variables even after the outer function has finished executing, this is called a closure.

function parent(a) {  // function scope
    function child(b) {
        // a is closure
        const ans = a + b;
        return ans

    }
    return child(3)
}
// const nestRest = parent(2)
console.log(parent(2))


// Callback function

// A callback function is a function passed as an argument to another function, which can then be invoked by the receiving function.


function outer(func) {
    console.log("outer")

    func()

}


outer(function () {
    const add = 5 + 5
    console.log("inner", add)
}) // is the callback function being passed as an argument.


// Pure function

// A pure function has two important properties:

// Same input → same output
// No side effects

// A pure function is a function that always produces the same output for the same input and does not cause side effects or modify external state.


function pure(name) {
    return "Hello" + name
}

console.log("pure", pure("pavi"))

// impure Function

// This is impure because it changes the external variable message.

let newName = "Welcome"

function imPure(name) {
    return newName + name
}

console.log("impure", imPure("pavi"))
console.log("impure", imPure("pavi"))


newName = "Good Boy"
console.log("impure", imPure("pavi"))
console.log("impure", imPure("pavi"))


// Higher Order Function

// A Higher-Order Function is a function that either accepts another function as an argument, returns a function, or does both.

// HOF because it accepts a function

function getCamera(camera) {
    camera()
}

getCamera(function () {
    console.log("kotak")
})

// HOF because it returns a function
function returnFunc() {
    return function () {
        console.log("Hello")
    }
}

const retFun = returnFunc();
retFun()


// Arrow Function

// An arrow function is a shorter syntax for writing a function expression, introduced in ES6.

let newArr = (name) => {
    return console.log(`This is ${name}`)
}
newArr("Arrow function")

// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function expression that is immediately executed after it is created. It is commonly used to create a private scope and avoid polluting the global scope.

// (function () {
//     console.log(`Hello `);
// })();

// (function (name) {
//     console.log(`Hello ${name}`);
// })("Pavi");


// Call Stack

// The Call Stack is a data structure used by JavaScript to keep track of function calls during program execution.

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();


// Nested Function
function one() {
    console.log("One");

}

function two() {
    console.log("Two");
    one()
}

function three() {
    console.log("Three");
    two();
}

three();


// Recursion

// Recursion is when a function calls itself until a condition tells it to stop.

// "Recursion is a technique where a function calls itself to solve a problem. A recursive function must have a base condition to stop the recursion. Otherwise, it can continue indefinitely and eventually cause a stack overflow."

function foo(){
    foo()
}

function fetchWater(count) {
    console.log("fetching water", count);
    if(count ===0){
        console.log("No more count");
        return ;
        
    }
    fetchWater(count - 1)
}

fetchWater(5) // is the recursive call.

// 1. Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    const changeTemp = (celsius * 9/5) + 32
    console.log(changeTemp)
}

celsiusToFahrenheit(40)

//  2. Create a Function to Find the Maximum of Two Numbers

function MaxNum(num1,num2){
    let findMax = 0

    if(num1>num2){
        return findMax = num1
    }else{
        findMax = num2
    }

    console.log(findMax)
}

MaxNum(57,60)

// 3. Function to Check if a String is a Palindrome

function isPalindrome(str) {
    const reverse = str.split("").reverse().join("")
    // console.log(reverse)
  
    if(str === reverse){
        return console.log(" isPalindrome is true")
    }else{
       return console.log(" isPalindrome is false")
    }
}

isPalindrome("madam")

// 4. Write a Function to Find Factorial of a Number

function factorial(n) {

    if (n == 1) {
        console.log("No more count");
        return 1;
    }

    return n * factorial(n-1)
}

let result = factorial(4);

console.log(result);

//  5. Write a function to Count Vowels in a String


function findVowels (str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let store = []

    for(let i =0; i<str.length;i++){
        if(vowels.includes(str[i])){
            count ++;
            store.push(str[i])

        }

    }

    console.log(count)
     console.log(store)
}

findVowels("keerthivasan");



// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function capitalizeWords(sentence){
    let split = sentence.split(" ")

    let frameSentence = ""

    for(let i=0; i<split.length;i++){
        let capitalSentence =  split[i][0].toUpperCase() + split[i].slice(1);
        //   console.log(capitalSentence)
        frameSentence += capitalSentence + " "
    }
    return frameSentence
 
}

 let resultCapitalizeWords = capitalizeWords("Function to Capitalize the First Letter of Each Word in a Sentence")
console.log(resultCapitalizeWords)

//  7. Use an IIFE to Print “Hello, JavaScript!”
// (function (names) {
//     console.log(`Hello ${names}`);
// })("Javascript");

// 8. Create a Simple Callback Function

function greet(name, callback){
    console.log(name);
    callback()

}
greet("pavi",function callback(){
    console.log("hellow")
})
