
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
console.log("profileName",profileName) 

//23. The sort() array method?
// The default sort method  converts the element type into string
// The default sort order is ascending


console.log("sort of ascending", profileName.sort()); 
profileName.sort(function(a,b){
    return a===b ?0 :a<b?-1:1
})  

console.log("ascending",profileName)


let ages = [1,10,15,86,14,72,36]

console.log("ages",ages.sort((a,b) =>b-a))  // largest to lowest 

// console.log("agess", ages.sort(function(a,b) {
//     return a===b ?0 : a<b ?-1:1
// }))



// 24. splice() array method

// splice starts in index , deleteCount(total count from start element)

const spliceNum= [1,2,3,4,5,6,7];

const deleteSplice = spliceNum.splice(2,5)  // 3,4,5,6,7

console.log("splice",deleteSplice,spliceNum)
 // deleteSplice show delete count [ 3,4,5,6,7]
//  spliceNum show remeaning count [1,2]

const spliceName = ['pavi', 'keerthi', 'vaishu','karmegan','sangeetha'];
const newSpliceName = spliceName.splice(2,2,"selva") 
                                //start, deletecount, replace start element
console.log("newSpliceName",spliceName)

// slice

const sliceNum= [1,2,3,4,5,6,7];
// start with index, The end index of the specified portion of the array
console.log("sliceNum",sliceNum.slice(2,5)) // index 2 start, count element 5
// 3,4,5 //

const sliceFruit = ['apple','banana','coconut','dates','fig'];

const newSplice = sliceFruit.slice(1,3);
console.log(newSplice)


// 25.The at() Method
const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

console.log(junkFoodILove.at(0)) // 🥖  pick left to right
console.log(junkFoodILove.at(6)) // "🌮"

console.log(junkFoodILove.at(-4)) // "🌭"   pick right to left


// 26.The copyWithin() Method

let copyNum = [1,2,3,4,5,6,7,8,9];  

copyNum.copyWithin(1,3,5)
// 1 is target,
// 3 is index start,
//  5 end in length of array

console.log("copyNum",copyNum)  // 1,4,5,4,5,6,7,8


// 27.Grouping elements in Array


const employees = [
{ name: "Bob", dept: "Engineering", salary: 5000 },
{ name: "Alex", dept: "HR", salary: 3000 },
{ name: "Ravi", dept: "Engineering", salary: 7000 },
{ name: "John", dept: "Engineering", salary: 1000 },
{ name: "Tom", dept: "Sales", salary: 6000 },
];


let groupBY = Object.groupBy(employees,({dept}) =>dept);
console.log("groupBY",groupBY)

const groupFilter = Object.groupBy(employees,({salary}) => salary >= 5000 ? "more then 5k":"less than 5k")

console.log("groupFilter",groupFilter)


// Immutability

// immutability means it cannot change the original array , just copy of original array

// 28 The toReversed() method

const immutableReverse =  [1,2,3,4,5,6,7];
const reverseItem = immutableReverse.toReversed()
console.log("reverseItem",reverseItem);
console.log("immutableReverse",immutableReverse)

// 29 The toSorted() method

const month = ['jan','feb','mar','apr','may','dec','jul','novem',"aug"]

const asc = month.toSorted()
console.log("asc",asc)
console.log("month",month)

// 30.The toSpliced() method

const month1 = month.toSpliced(1,2,'october') 
// 1 is start from index and replace october
// 2 is delete the count when start value finish

console.log("month1",month1)

const month2 = month.toSpliced(1,2) 
console.log("month2",month2)



// 31 The with() method


const  withMethod = [1,2,3,4,5,6,7,8,9];  

const replaceNum = withMethod.with(3,8);
// 3 is value start from index and 8 will be replace
// output [1,2,3,8,5,6,7,8,9]

console.log("replaceNum",replaceNum)


// Static Array Methods in JavaScript
//32. The Array-Like
const arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};
console.log("arr_like",arr_like)

arr_like[2]; // array-like
arr_like.length //3

console.log("is arr_like is an array",Array.isArray(arr_like));

console.log("is arr_like is an object", arr_like instanceof Object);


// 33.The Array.from() array method
// array.from it create new array method



console.log("HTML Collection", document.getElementsByTagName('li'));
// when inspect the console then prototype show object
const collectionName = Array.from(document.getElementsByTagName('li'));

console.log("collectionName",collectionName)
// when inspect the console collectionName then prototype show array


// 34. The Array.fromAsync() array method
// Array.fromAsync()  you will get a promise as a return
// Array.fromAsync() also with async  iterable object
// async  iterable object  => work with readable stream or async generator

// two method 


const collectionFromAsync= Array.fromAsync(document.getElementsByTagName('li'));

collectionFromAsync.then((value) => console.log(value))



// const fromAsync = Array.fromAsync({
//     0: Promise.resolve('Javascript'),
//     1: Promise.resolve('React'),
//     2: Promise.resolve('Typescript'),
//     length:3
// }).then((value) => console.log("formAsync",value))

// fromAsync


// 35. The Array.of() array method

// convert in to array

const arrayOf= Array.of(22, true,"Javascript",{name:"pavi",age:29},[8,5,7,4,6]);

console.log("array of",arrayOf)


// Array Iterator Methods in JavaScript
let customers = [
    {
        id: "001",
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", "Toys", "Book"],
    },
    {
        id: "002",
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"],
    },
    {
        id: "003",
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
        id: "004",
        f_name: "Dev",
        l_name: "Currian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"],
    },
    {
        id: "005",
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"],
    },
];
//36. The filter() array method

const fileterData = customers.filter((customerAge) => customerAge.age >60);
console.log("fileterData",fileterData)

// 37.The map() array method

const mapping = customers.map((value)=> {
    let title = "";

    if (value.gender === "M") {
        title= "Mr."
    } else if (value.gender === "F" && value.married == true) {
        title= "Mrs."
    } else {
        title ="Miss."
    }

    value['full_name'] = `${title} ${value.f_name}  ${value.l_name}`;

    return value
})
console.log("mapping",mapping);


// 34 The reduce() array method

// reduce method to reduce the array element value into single value
// reducer function which is also called as callback function to be called each element of the array

// (reduce(accumulator,currentValue,index,array),initialValue)
// accumulator is accumulated reducer return value

// const red = function reducer(accumulator,currentValue,index,array){
// do something with accumulator and currentValue
// you get a result
// you return that result

// }

const arrRed =[ 1,4,7,8,9,6];

const reduceArr = arrRed.reduce((acc,currentValue)=>{
    return acc + currentValue

},0)

console.log("reduceArr",reduceArr)

// avg of the age  and who purchase the book
let countPerson = 0;
const reduceCustomer = customers.reduce((acc,customer) => {
    
    if(customer.purchased?.includes("Book")){
        acc = acc + customer.age 
        countPerson = countPerson +1
    }

    return acc
},0)



console.log("reduceCustomer",Math.floor(reduceCustomer/countPerson))

let maleAvg = 0;

 let femaleAvg =0;

const genderExpense = customers.reduce((acc,expense)=>{
    

    if(expense.gender == "M"){
        acc.Male += expense.expense
        maleAvg ++
    }
    if(expense.gender == "F"){
        acc.feMale += expense.expense
        femaleAvg ++
    }


    return acc


},{
    Male:0,
    feMale:0,
})

console.log(
    "MaleExp",
    Math.floor(genderExpense.Male / maleAvg),
    "femaleExp",
    Math.floor(genderExpense.feMale / femaleAvg)
);




//35. The reduceRight() array method
// it move forward right to left

const rightVal = [15,54,75,98]

const rightToLeft = rightVal.reduceRight((acc,val) => acc -= val)

console.log("rightToLeft",rightToLeft)

// 36.The some() array method
// check the condition and return as boolean
const someArr = customers.some((val) => val.age >90);
console.log("someArr",someArr) // output =false

// 37.The every() array method
// check the each and every obj and return boolean

const everyArr = customers.every((val) => val.married );
console.log("everyArr",everyArr) // output =false

// 38.The find() array method
// find the data which come first that data has to show and one only data will show
const findArr = customers.find((val) => val.married == false );
console.log("findArr",findArr)

// 39.The findIndex() array method

// find index check the data from left to right

const findIndArr = customers.findIndex((val) => val.married ==false );
console.log("findIndArr",findIndArr)

// findLast Returns the last matching element, not its index.
// when find value is so same many data then the check right to left then which find the value fist it will show the
// complete data

const findLastArr = customers.findLast((val) => val.married ==true );
console.log("findLastArr",findLastArr)



// findLastIndex Returns the index of the last matching element.
const findIndLastArr = customers.findLastIndex((val) => val.expense <100 );
console.log("findIndLastArr",findIndLastArr)


// practice

const findTotalExp = customers.reduce((acc,cus) => {
    if(cus.married == true){
        acc += cus.expense
    }

    return acc
    
},0)

console.log("findTotalExp",findTotalExp)

const useFilter = customers.filter((val) => {
    let totalExpense = 0;

    if(val.married ){
        totalExpense+= val.expense
    }

    return totalExpense
})

console.log("useFilter",useFilter)

// 40.The forEach() array method

// forEach() is a JavaScript array method used to loop through every element in an array and execute some code for each element.
// forEach is going to iterate over each of the element
const forEachArr = [1,2,3,4,5,6,7,8,9,10];
let sum =0
forEachArr.forEach((item) => sum+= item);
console.log("forEach",sum)

// 41 he values() method

const arr1 = forEachArr.values();

for( const values of arr1){
    console.log(values)
}


// 42.The flatMap() array method

// map()       → transforms
// flat()      → removes one nested level
// flatMap()   → transforms + removes one nested level

console.log("mapping", forEachArr.map((val) => val)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("complex mapping", forEachArr.map((val) =>[val])) //  [[1],[ 2,] [3], [4],[ 5], [6], [7], [8], [9], [10]]

console.log("flat mapping", forEachArr.flatMap((val) =>[val])) //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
