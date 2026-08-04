# Tasks
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.



## Temporal Dead Zone (TDZ)

```js
function TDZ() {

    // TDZ starts when the scope is entered


    console.log(location); // ❌ ReferenceError:
    // Cannot access 'location' before initialization

    let name = "Pavi";
    let age = 30;

    let location = "Chennai"; // TDZ for `location` ends here
    // `location` is now initialized with "Chennai"
    
    console.log(location); // ✅ Chennai
}

TDZ();
```

## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

``` js
console.log(location) // not initialization because of reference error

var location = "chennai"


foo()  // invoke the function will be hoisted

function foo(){
    console.log("40 days of javascript challenge")

}



test()  // invoke the function will be hoisted and show error will be not a function

let message = function test(){
    console.log("40 days of javascript challenge")

}

```
