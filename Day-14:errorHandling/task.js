// 1. What will be the output of the following code?

// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
// }


// output  = ReferenceError


//  2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance.
//  If any condition fails, throw appropriate errors


function processPayment(amount) {

    try {
        if (amount <= 0) {
            console.log(`Your amount is not valid`)
        }
        console.log(`Your amount is ${amount}`)

    } catch (error) {
        console.log("error is", error)

    }

}

processPayment(10)



// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

// - UserError
// - PaymentError
// - ServerError
// - EmailError



const profile = {
    name: "a",
    email: "ahbaj",
    payment: 0,

}


class UserValidation {
    constructor(message) {
        this.name = "User Error"
        this.message = message
    }
}

function EmailValidation(message) {

    let name = "Email Error";
    this.message = message;
}

function paymentValidation(message){
    this.name ="Email Error";
    this.message = message;
}


function UserData(profile) {


    try {


        if (!profile?.name.trim("")) {
            throw new UserValidation("User Invalid")
        }

        if (!profile?.email?.includes("@")) {
            throw new EmailValidation("Email is InValid")
        }
         if (!profile?.payment >=0) {
            throw new paymentValidation("Payment is InValid")
        }


    }
    catch (error) {
   
        console.log("check the error",error.message)
        throw error   // rethrow error


    }

}

try {
    UserData( profile)
} catch (error) {
  console.error("check the error",error.message)
//    const serverError = new Error("Server Error");
//    throw serverError;
    
}


//  8. What is the purpose of throw in JavaScript?

// - It catches an error
// - It stops the execution of a program
// - It creates a new error manually -- true
// - It prints an error message

//  9. What does the finally block do in a try...catch statement?

// - Runs only if an error occurs
// - Runs only if no error occurs
// - Runs regardless of whether an error occurs or not    --- true
// - Stops the execution of the script 