
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
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. 
// The ATM only allows multiples of 100. 
// Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let amount = 1050

if (amount % 100 == 0) {
    console.log("Withdrawal successful", amount % 100);

} else {
    console.log("Invalid amount", amount % 100);

}


// 3. Build a Calculator with switch-case

function calculate(){
    const aValue = Number(document.getElementById("aValue").value);
    const bValue = Number(document.getElementById("bValue").value);
    const operator = document.getElementById("operator").value;

    let result;

    switch(operator){
        case "+":
            result = aValue + bValue;
            break;
        case "-":
            result = aValue - bValue;
            break;
        case "*":
            result = aValue * bValue;
            break;
        case "/":
            result = aValue / bValue;
            break;
        case "%":
            result = aValue % bValue;
            break;
        default:
            result = "Invalid operator";

    }

    document.getElementById("result").textContent =   `${aValue} ${operator} ${bValue} = ${result}`;





}




// 4. Pay for your movie ticket



const MovieTicker =(age) => {

    switch (true) {
        case age <= 18: console.log("Pay $3");
            break;
        case (age >= 18 && age <= 60): console.log("Pay $10");
            break;
        case age > 60: console.log("Pay $8");
            break;
        default : console.log("Not allowed")
    }
    
}

MovieTicker(69)

// or

const MovieTicker2 = (age) => {

    if (age <= 18) return console.log("Pay $3");
    else if (age >= 18 && age <= 60) return console.log("Pay $10")
    else if (age > 60) return console.log("Pay $8")
    else return console.log("Not allowed")


}

MovieTicker2(69)

// 6. Which Triangle?

function CheckTriangle(){
    const triangleA = Number(document.getElementById("triangleA").value);
    const triangleB = Number(document.getElementById("triangleB").value);
    const triangleC = Number(document.getElementById("triangleC").value);

    let resultTri;

    if(triangleA == triangleB && triangleB == triangleC){
         resultTri = "Equilateral Triangle"
    }
    else if (triangleA == triangleB ||
         triangleA == triangleC ||triangleB == triangleC
    ) {
         resultTri = "Isosceles Triangle"
    }
    else if(triangleA !== triangleB && triangleB !== triangleC){
            resultTri = "Scalene Triangle"
    }

    document.getElementById("typeTrina").textContent = `The Triangle is ${resultTri}`




}