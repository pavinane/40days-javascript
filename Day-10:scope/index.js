
// 4 Types of scope in JavaScript

// 1.Global Scope
// 2.Function Scope
// 3.Block Scope
// 4.Module Scope


// Global Scope
// The global scope is the outermost scope in JavaScript. Variables declared in the global scope are accessible from anywhere in the code.


// using let or const will not add the variable to the global object (window in browsers) and can only be accessed within the scope it was declared in.
let globalName = "Javascript";  

// using var will add the variable to the global object (window in browsers) and can be accessed globally.
//  However, using let or const will not add the variable to the global object.
var globalAge = 30; 


function greeting(){
    console.log("hello"+ globalName,globalAge , "global scope"); // Accessible here
}

greeting();


// Function Scope
// Function scope is the scope created within a function. Variables declared inside a function are only accessible within that function.

function myFunction() {
    let functionName = "Function Scope";
    console.log(functionName); // Accessible here
}

myFunction();
// console.log(functionName); // Uncaught ReferenceError: functionName is not defined



// Block Scope 
//  Variable declared using let and const inside  {},cannot use outside the block.
// Block scope is the scope created within a block of code, such as an if statement or a loop. 
// Variables declared with let or const inside a block are only accessible within that block.


// {
//     let value =10
//     console.log(value) 
// }

{
    var value =10
    console.log(value)
}

// {
//     const value =10
//     console.log(value)
// }


// Uncaught ReferenceError: value is not defined when using let or const, 
// but will log 10 when using var, as var is function-scoped and not block-scoped.
console.log(value) 


// Scope Chain 
//  Scope chain is the order in which JavaScript looks for variables. When a variable is not found in the current scope,
//  JavaScript looks for it in the outer scope, and so on, until it reaches the global scope.


let globalVariable = "Scope Chain";

function outerFunction(){

    let outerVar = "Outer Function";

    function innerVariable(){
        let innerVar = "Inner Function"

        console.log("innerVar",innerVar)
         console.log("outerVar",outerVar)
          console.log("globalVariable",globalVariable)
    }

    innerVariable()
}


outerFunction()



var count = 10;

function outerCount(){
    var count = 20;

    function innerCount (){
        var count = 30;
        console.log("inner count",count);
    }

    innerCount();
    console.log("outer count",count)
}

outerCount();

console.log("global count",count)



// Variable Shadowing
// Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable declared in an outer scope. 
// In this case, the inner variable "shadows" the outer variable, making it inaccessible within the inner scope.


let shadow = "global Shadow";

function shadowFunction(){
    let shadow = "function Shadow";  // This variable shadows the global variable
    console.log(shadow); // Output: "function Shadow"
}

shadowFunction();
console.log(shadow); // Output: "global Shadow"





// ## 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();


// This is called variable shadowing. The inner function tries to access the variable user,
//  but it is not defined in its own scope.



// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
    
}

add(5);
add(10);
console.log(total);  // output: 15

// The mistake in the code is that the variable total is declared in the global scope, which is considered bad practice. 

// 3. Create a function with a nested function and log a variable from the parent function.


function parentFunction(){
    let parentVariable = "Parent Variable";

    function nestedFunction(){
        console.log(parentVariable);
    }

    nestedFunction();
}

parentFunction()

// This is scope chaining, where the nested function can access variables from its parent function's scope.



// 4.Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function outerLoop(){

    for (let i=0; i<6;i++){
        let loopVariable = "Loop Variable";
        console.log(loopVariable); // Accessible here
    }

}

// console.log(loopVariable); 
 // It will be reference error because loopVariable is block scoped and cannot be accessed outside the loop. 


//  5. Write a function that tries to access a variable declared inside another function.


function firstFunction(){
    let firstVariable = "First Variable";

    function secondFunction(){
        console.log(firstVariable);
    }

    secondFunction();
}

firstFunction()
//  yes it can access the variable firstVariable because secondFunction is nested inside firstFunction, and it has access to its parent function's scope.

// 6. What will be the output and why?

// console.log(a);
// let a = 10; 

// No it will be reference error because the Let and const declarations are not hoisted to the top of their scope,
//  so they cannot be accessed before they are declared.


// 7. Where is the `age` variable accessible?


// function showAge() {
//     let age = 25;
//     console.log(age);
// }
// showAge()
// console.log(age); // Uncaught ReferenceError: age is not defined

//  C: It will cause an error


// 8. What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// Answer is Message is "Hi"



// 9. What will be the output and why?

let x = "Global";

function outerVar() {
    let x = "Outer";

    function innerVar() {
        let x = "Inner";
        console.log(x);
    }

    innerVar();
}

outerVar();

// output 
// inner

//  10. What will be the output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

// output will be -1 and -2 because the inner function has access to the count variable in the outer function's scope,
//  and it decrements the value of count each time it is called.
