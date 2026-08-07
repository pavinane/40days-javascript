// Constructor Function

// when use Constructor function we use PascalCase for naming the function
 
function Bike (name,price){
    this.name = name;
    this.price = price;

}

const vehicle = new Bike("Yamaha", 10000);

console.log(vehicle)


// Factory Function

function car(name,model){
    return{
        name,
        model
    }
}

console.log(car("cobra", 2026))


// in operator

let profile = {

    name:"pavi",
    age:29,
    occupation:function(){
        console.log("Senior Developer")
    },
    location:{
        native:"Thirumalpadi",
        settle:"Kanchipuram",
        living:"chennai"
    },
    salary:200
    
}

console.log(profile.location.native)

console.log("salary" in profile)

for(let key in profile){
    console.log("key",[key]);
    console.log("profile key",profile[key])
}


// Static Methods


// What is a Shallow Copy?

// A shallow copy copies only the first level of an object.

// Nested objects and arrays are not copied.
// Instead, their memory reference is copied.

const target = {p:2,q:3};
const aim = {q:2,b:5}

console.log(Object.assign(target,aim))



const obj1 = {
    a:4,
    b:{
        c:3
    }
}

//using shallow copy
const obj2 = Object.assign({},obj1)  

// const obj2 = { ...obj1 };


// Object.assign() creates a shallow copy.

// Primitive values are copied by value,
// so changing obj1.a does not affect obj2.a.

// Nested objects are copied by reference,
// so changing obj2.b.c also changes obj1.b.c.


obj2.b.c = 100
obj2.a = 400


// Because numbers, strings, booleans, etc. are copied by value.
// They are completely independent.
console.log("obj2",obj2.a) //400
console.log("obj1",obj1.a) //4



// Because both objects share the same nested object.
// Changing one changes the other.

console.log("obj2",obj2.b.c) // 100
console.log("obj1",obj1.b.c) // 100


// deeply copy

const obj3 = structuredClone(obj1)

obj3.a = 50;
obj3.b.c = 6


console.log("obj3",obj3.a) // 50
console.log("obj1",obj1.a) // 400


// Nested object only redeclare the value 



console.log("obj3",obj3.b.c) // 6
console.log("obj1",obj1.b.c) // 100


// Entries

// convert from Object to array
const newObj = {
    name:"nane",
    age:30
}

const newProfile = Object.entries(newObj);

console.log("newProfile",newProfile)

// map

// convert from array to object

const newEntries = new Map([
   [ "foo","bar"],
   ["baz",42]
])

const objEntries = Object.fromEntries(newEntries);

console.log("objEntries",objEntries)


// Object freeze
// Freeze is once assign the value it cannot reassign the value or delete.
//  once freeze the the object cannot add more key and value

const freezeObj = {
    name:"megan"
}


Object.freeze(freezeObj)
freezeObj.age = 30

freezeObj.name = "nane"

delete freezeObj.name

console.log(freezeObj)


// seal
// seal is able to change the reassign value  but not able to delete
// once seal the the object cannot add more key and value

const sealObj = {
    name: "nane"
}

Object.seal(sealObj);

sealObj.name= "megan",
sealObj.age = 30

delete sealObj.name

console.log(sealObj)