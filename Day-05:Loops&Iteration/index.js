
// For Loop

// A For Loop is the best When we know exactly how many times we need to run a block of code.

//  for (initialization; condition; update){}


for(let count=1; count<=5; count++){
    console.log(`Count is ${count}`)
}

// Addition of even number between 1 to 100

let sum = 0

for (let count = 1; count <= 100; count++) {
    if (count % 2 == 0) {
        // console.log(count)
        sum += count
    }
}
console.log("total addition",sum)

// find how many character

let language = "Jravasjcript";
let repeat = ""

// Nested Loop

for(let i=0 ;i<language.length; i++){
    // console.log(language.charAt(i).toLocaleLowerCase()) 

    for(let j=i+1; j<language.length;j++){
        //  console.log("row",language[i],"col",language[j])
          if (language[i].toLowerCase() === language[j].toLowerCase()) {
            if (!repeat.includes(language[i].toLowerCase())) {
                repeat += language[i].toLowerCase();
            }
        }
    }
}

console.log("repeat",repeat)


let findDuplicate = [1,2,6,4,5,8,1,5,3,2,9,7]
let dupli = []
let removeDuplicate = []

for (let i=0;i<findDuplicate?.length;i++){

    // Remove Duplicate

    if(!removeDuplicate?.includes(findDuplicate[i])){
        removeDuplicate.push(findDuplicate[i])
    }

    for(let j=i +1; j<findDuplicate?.length; j++){

        if(findDuplicate[i]=== findDuplicate[j]){
            if(!dupli?.includes(findDuplicate[i])){
                dupli?.push(findDuplicate[i]) 
            }
        }

        //  if(findDuplicate[i] !== findDuplicate[j]){
        //     if(!dupli?.includes(findDuplicate[i])){
        //         dupli?.push(findDuplicate[i]) 
        //     }
        // }
     
    }
}

console.log("dupli",dupli,"removeDuplicate",removeDuplicate)


// Break and Continue


// Break
for (let i=1; i<=3;i++){
    if(i===3){
        break;
    }
    console.log("break",i)
}

// Break and continue

for (let i=1; i<=5; i++){
    if(i===3) continue;
    console.log("break and continue",i)
}

// Multiple counter in single loop

for (i=1 , j=10; i<=10 &&j >=1; i++,j--){
    console.log(i,j)

}


// pyramid pattern using nested loop

function pyramidPattern(totalRows){

    for(let i=1; i<=totalRows; i++){
        let row = "";

        for(let j= 1; j<= i ;j++){
            // console.log("row",i ,"col",j)
            row += "* "
        }

       

        // for (let k = 1 ; k<= 2*(i -1) ; k++){
        //     //  console.log(row)
        //     row += "*"
        // }

        console.log(row)
    }

}

pyramidPattern(5)

// 2. Craete Multiplication Table (Using for loop)

function Multiplication (table){
    for(let i =1 ; i<=10 ;i++){
        console.log(`${table} ${"*"} ${i} = ${table * i}`)
    }
}

Multiplication(3)

// 3. Find the summation of all odd numbers between 1 to 500 
// and print them on the console log.

  let summation = 0
for (let i=1 ; i<=500; i++){
  
    if (i%2 !==0){
        summation += i
    }
   
}

 console.log(summation)


//  4. Skipping Multiples of 3

for(let i=1 ; i<=20; i++){

    if( i %3 ==0){
        continue
    }
    console.log(i)

}

// While Loop

//  A while loop run as long as a given condition is true .It's the best when we don't know in 
//  advance how many iteration are needed

let counting =1;

while (counting <=5) {
    console.log(counting)
    counting ++
}


// 5. Reverse Digits of a Number (Using while loop)

function reverseDigit() {

    let digits = "6789"

    const split = digits.split('')


    let reverseDigit = "";


    let i = split.length - 1;

 
    while(i >= 0){
        
        reverseDigit += split[i]
        i--;

    }

    console.log(reverseDigit)


}


reverseDigit()

// Do-While
// A Do-While loop ensure that the code execute at least once before checking the condition

// let numb =1

// do {
//     console.log(numb)
//     numb++;
    
// } while (numb <=5);
    