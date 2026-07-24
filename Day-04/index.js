
// If and else condition
let score = 96;


if (score >= 90) {
    console.log("Grade A");

}
else if (score >= 80) {
    console.log("Grade B");

}
else if (score >= 70) {
    console.log("Grade C");

}
else if (score <= 50) {
    console.log("Fail");

}


// Switch condition

let position = 10;

switch (position) {
    case 1: console.log("Print 1");
        break;

    case 2: console.log("Print 2");
        break;

    case 3: console.log("Print 3");
        break;

    case 4: console.log("Print 4");
        break;
    default:
        console.log("Nothing is matched")
}


let name = "google"

switch (name) {
    case "google": console.log(`${name}  is matched`);
        break;
    case "facebook":console.log(`${name}  is matched`); ;
        break;
    case "yahoo":console.log(`${name}  is matched`); ;
        break;
    case "brake":console.log(`${name}  is matched`); ;
        break;
    default:
        console.log(`${name} is not matched`);
}


//  1. What will be the output of this code snippet and why?

//  let day = "Monday";

// switch (day) {
//     case "monday":
//         console.log("It's the start of the week.");
//         break;
//     default:
//         console.log("It's a normal day.");
// }

// Because day is not matching the switch case value so it will return 
// It's a normal day."


//  2. Build an ATM Cash Withdrawal System