

//  Type of Error In Javascript 

// 1. Different Types of error Handling
// 2. try ... catch syntax and flow
// 3. Real world Use case with try ... catch
// 4. throwing Error 
// 5. Rethrowing Error 
// 6. try ... catch ... finally
// 7. Creating Custom Error
// 8. Self assignment Operator



// Parsing Error => A parsing error happens when JavaScript cannot understand your code's syntax.

// example:
// console.log(n   => syntax missing error

// Runtime Error => A runtime error happens after the code has successfully been parsed and JavaScript starts executing it.
// example:

// const obj = "pavi";
// console.log(obj.name)  => type error


// What is exception in Javascript?
// Exception are runtime errors that disrupt program execution

// example : 
// console.log(x) => it's not defined the value and it's not available is called reference error

// URI Error
// DecodeURIComponent("%");


// try ...catch

// try {
//     // write logic
// } catch (error) {
//     // handle Error
// }

/*
    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be
    executed.
    3. If there is an error in the try block, the execution of the try block will be
    suspended and the control will move to the catch block. In the catch block you
    can find the error details and do the needful.
*/



function divided(a, b) {
    try {
        if (b == 0) {
            const err = new Error("zero is not accepted by the value of b");
            throw err;

        }

        const result = a / b;
        console.log(`result is ${result}`)
    } catch (error) {
        console.log("the result is zero")
    }
}

divided(15, 5)


function processInformation(information) {
    try {

        console.log("Process Information");

        if (!information || information.trim("")) throw new Error("No information")

        console.log("Information Proceed")

    } catch (error) {
        console.log(error.message)

    } finally {
        console.log(" cleanup the information")
    }
}

processInformation("Hi pavi")

// 1. What will be the output of the following code?
// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
// }


// output  = ReferenceError