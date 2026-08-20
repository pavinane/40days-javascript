
// Array
// 1. What is an Array in JavaScript?


// When Array() receives exactly one numeric argument, JavaScript treats that number as the array's length. 
// When it receives multiple arguments, those arguments become the array elements.

// index => The position of element in array is known as its index;
// index starts with o;
// index ends with length -1

// 2. How to Create an Array in JavaScript?

const alpha = ['a', 'b', 'c'];

const newAlpha = new Array('a', 'b', 'c')

console.log(alpha == newAlpha) // output will be false

// because both are stored in different memory, location and reference

const newValue = new Array(1);
console.log(newValue) // output =>  [empty × 2] 

// because it store the argument is 2 it's creating element, It store like index, value
// It creates an array with length 1, but there is no value stored at index 0.

const newValue1 = new Array(1, 2);
console.log(newValue1) // output =>  [1, 2]

// 1 like index
// 2 like value
// Here creating the 1,2 element as argument so it's creating two element



// 3.How to Get Elements from an Array in JS?
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

for (let i = 0; i <= salad.length - 1; i++) {
    console.log(`Element index ${i} is ${salad[i]}`);

}

// 4.How to Add Elements to an Array in JS?
// push - (added on end)
const adding = salad.push("44");

console.log(adding) // output : 8 ;it show length
console.log("push",salad) // it show all data in array

// unshift --(added on start)

const unshifting = salad.unshift("6");

console.log(unshifting) // output : 9 ;it show length
console.log("unshift",salad)

// 5. How to Remove Elements from an Array in JS?

// pop - (remove in end)

const popMethod = salad.pop();

console.log(popMethod) //  output : showing which element remove on END
console.log("pop",salad)


// Shift --(remove in start)

const shifting = salad.shift();

console.log(shifting) // output : showing which element remove on start
console.log("shift",salad)


//6. How to Copy and Clone an Array in JS?

const salasCopy = salad.slice();

console.log("before copy",salad)
console.log("after copy",salasCopy)

console.log(salad == salasCopy)

// because both are stored in different memory, location and reference

// 7. How to Determine if a Value is an Array in JS?

const arr = Array.isArray(salad);
console.log("check arr",arr)
const arr2 = Array.isArray({"num":1})
console.log("check arr2",arr2)


// 8. Array Destructuring in JavaScript

const  [one,two,three] =[1,2,3];
console.log(one,two,three)

// 9. How to Assign a Default Value to a Variable?

const [tomato,mushroom = "🍄",] = ["🍅"]
console.log(tomato,mushroom)

// 10. How to Skip a Value in an Array?

const [tomatos, ,broccoli ] = ["🍅","🍄","🥦"]

console.log(tomatos)
console.log(broccoli)

// 11. Nested Array Destructuring in JS

const nestArr = [1,2,3,[4,5,6,[7,8,9]]];
const firstArr = nestArr[3];
console.log("firstArr",firstArr)
const secondArr = firstArr[3]
console.log("secondArr",secondArr)

console.log(nestArr.flat(Infinity)) // or console.log(nestArr.flat(2))

// 12. How to Use the Rest Parameter in JS?


function restPara (a,...b) {
    console.log("restPara1",a);
    console.log("restPara2",b)

}

restPara(1,2,2,3,4,5)

const [veg1,veg2,...rest] = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
console.log("rest",rest) // collect the rest of the element in array

// 13.How to Use the Spread Operator in JS?

const a = [1,3,5];
const b= [2,4,6]


const c = [...a,...b]; 
console.log("spread",c)


// 14. How to Swap Values with Destructuring?

let person1 = "pavi";
let person2 = "megan";

 [person1,person2] = [person2,person1];

console.log("swapping",person1,person2)


// 15. How to Merge Arrays?

const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const result = [...emotions,...veggies];
console.log("result",result)


// 16. The length property
console.log(result?.length);
const arrLength = new Array(7);
console.log(arrLength.length)

// 17. The concat() array method

// concat merge multiple array in single array

const alphas = ['a','b','c']
const beta = ['v','x','w']
const gamma = ['d','e','f']

const results = alphas.concat(beta,gamma)
console.log("concat",results)


// 18. The join() array method
// join method is join element the if want add something between the element ,set on join syntax

const veg = ['🥦', '🥒', '🌽', '🥕'];

const joined = veg.join("=>")
console.log("joined",joined) // joined 🥦=>🥒=>🌽=>🥕

// *   [].join => output = ""


// 19.The fill() array method
// Fill while changing the same array element
// It's going to mutate the same array

const emoji = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
// console.log(emoji.fill("a"))  // make replace or change value or swapping
const vegEmoji = emoji.fill("veg",2,5); // (string,index, element)
console.log("vegEmoji",vegEmoji)

// 20. The includes() array method

// includes check the element on original array exact same value

const emojiIncludes = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log(emojiIncludes.includes("🥒", "🌽")) 


// 21 The indexOf() and lastindexOF() array method

const profileName = ['pavi', 'keerthi', 'vaishu','karmegan','sangeetha'];
console.log("indexof",profileName.indexOf('vaishu'))
console.log("lastIndexOf",profileName.lastIndexOf('sangeetha'))


// 22 The reverse() array method
console.log("reverse",profileName.reverse());

//23. The sort() array method?
// The default sort method  converts the element type into string
// The default sort order is ascending


console.log("sort of ascending", profileName.sort()); 
profileName.sort(function(a,b){
    return a===b ?0 :a<b?-1:1
})  

console.log("ascending",profileName)


let ages = [1,10,15,86,14,72,36]

// console.log("ages",ages.sort((a,b) =>b-a))  // largest to lowest 

console.log("agess", ages.sort(function(a,b) {
    return a===b ?0 : a<b ?-1:1
}))