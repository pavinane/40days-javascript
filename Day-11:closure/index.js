
// Closure



function outerFunc() {

    let count = 0;

    return function innerfun() {
        count++
        console.log(count)
    }


}

const globalFun = outerFunc()

globalFun()


// Two methods written code for closure


function bankBalance(initialAmount) {
    let balance = initialAmount;

    return function (amount) {
        balance += amount;
        console.log("initialAmount", initialAmount, "amount", amount, "balance", balance,)
    }
}

const myBalance = (bankBalance(1000));

myBalance(500);





// function bankBalance(initialAmount){
//     let balance = initialAmount;

//     return function (amount){
//         balance += amount;
//         console.log("initialAmount",initialAmount,"amount",amount,"balance",balance,)
//     }
// }



// console.log("bank balance:",bankBalance(1000)(500))



function creditCardBalance(currentAmount) {
    let currentBalance = currentAmount


    return {
        currentBalance: (amount) => {
            currentBalance += amount
            console.log("currentAmount", currentAmount, "amount", amount, "currentBalance", currentBalance)
        },

        withdrawAmount: function (amount) {
            if (amount > currentBalance) {
                console.log("Insufficient Balance")
            } else {
                console.log("Sufficient Balance", currentBalance)
            }
            currentBalance = currentBalance - amount;
            console.log("withdrawAmount", amount, "currentBalance", currentBalance)

        },

        checkBalance: () => console.log(" Balance", currentBalance)
    }

}


const myCreditCard = creditCardBalance(900);

myCreditCard.currentBalance(100)
myCreditCard.withdrawAmount(200)
myCreditCard.checkBalance();



function bigData() {
    let newNumber = new Array(1000000).fill("s");

    return function () {
        console.log(newNumber)
        console.log(newNumber[4])

    }
}

let result = bigData();
console.log(result())



// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.


// closure in Even Handler

function counterButton(){
    let count = 0;

    document.getElementById("increment").addEventListener("click",function(){
          console.log(count)
        count ++;
      
    })
}

counterButton();






// Task working

// 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

// outpurt => 1,2

// in Closure create the inner function remember the variable of outer function execute even after outer function called
// remember the variable  of outer function even after outer function called and inner function executed multiple times


// 2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

// output=> 100

// In testClosure function , the inner function has access to the variable x defined in the outer function's scope. 
// When testClosure() is called, it returns the inner function, 
// which is then immediately invoked with () to calculate and return the square of x (10 * 10 = 100).


//  3. Create a button dynamically and attach a click event handler using a closure.
//  The handler should count and log how many times the button was clicked.


function counterButton(){
    let count = 0;

    document.getElementById("increment").addEventListener("click",function(){
          console.log(count)
        count ++;
      
    })
}

counterButton();



// 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

function createMultiplier(multiplier){

    let value = multiplier;

    return function(num){
        value = value * num;
        console.log("value",value)
    }
}

// console.log(createMultiplier(10)(5))  =>output : 50

let multiply = createMultiplier(5);
multiply(6);

// output => 30


// 5. What happens if a closure references an object?
// - 1) The object is garbage collected immediately
// - 2) The object remains in memory as long as the closure exists  == true
// - 3) The object is automatically cloned
// - 4) None of the Above.


// answer :2  The object remains reachable, and therefore cannot be garbage collected,
//  as long as the closure retains a reference to it and that closure is itself reachable.


// 6. Write a function factory of counter to increment, decrement, and reset a counter.
//  Use closure to refer the count value across the functuions.


function counterStrike(count) {

    let counter = count;

    return {
        increment: (count) => {
            counter+=count;
            console.log("increment",counter)

        },
        decrement: (count) => {
            counter-=count;
            console.log("decrement",counter)

        },
        reset: () => console.log("reset",counter=0)
    }

}

const myCounter = counterStrike(5);

myCounter.increment(1);
myCounter.decrement(2);
myCounter.reset();



function counting () {
    let count  = 0;

    document.getElementById("countAdd").addEventListener("click",function(){
        count ++;
        document.getElementById("message").innerHTML = "Count Add: "+count;
    });

    document.getElementById("countLess").addEventListener("click",function(){
        count --;
        document.getElementById("message").innerHTML = "Count Less: "+count;
    });

    document.getElementById("reset").addEventListener("click",function(){
        count = 0;
        document.getElementById("message").innerHTML = "Count Reset: "+count;
      
    });
}


counting()









