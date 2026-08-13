// 'use strict';



// this keyword and window Object


// "this is a special keyword in JavaScript that refers to the context in which a function is invoked.
//  Its value depends mainly on how the function is called.
//  For example, when a function is called as an object method, this refers to that object.
//  Arrow functions are different because they don't have their own this


// Implicit Binding (Inside of an Object)

const employee ={
    id:"A555",
    firstName:"pavi",
    lastName:"megan",

    returnThis:function(){
        return this

    },

    getFullName:function(){
        return `${this.firstName}  ${this.lastName}`

    }

}

console.log("employeeId",employee.id);

console.log("employeeDetails",employee.returnThis())

console.log("employeeDetails",employee.getFullName())



const person1 ={
    name:'keerthi',
    age:27
}

const person2 ={
    name:'vaishu',
    age:31
}

function greetingCheck(obj){

    obj.logMessage = function(){
        console.log(`${this.name} is ${this.age} years old`)
    }

    console.log(obj)
    
}

greetingCheck(person1)
person1.logMessage()


// Inside function

// when write inside function like below console will be showing details of window 
// when use "use strict" ,then console show this will be undefined

function outerFun(){
    console.log("This is outer Function",this);

    return function innerFun(){
        console.log("This is inner Function",this)
    }
}

const resultFun = outerFun(10);
resultFun(3)


// Explicit Binding => call,bind,apply


// Call
// call() immediately invokes a function and explicitly sets this to the object you provide.

function callBind(){
    console.log(`call:Hi Mister ${this.name}`)
}

const user = {
    name:"pavi"
}

callBind.call(user)

function example2 (hobby1,hobby2){
    console.log(`call:This is ${this.name} and my hobbies ${hobby1} and ${hobby2}`)
}

example2.call(user,"movie","coding")

// apply

// apply() is similar to call(). It immediately invokes the function and sets this, but function arguments are passed as an array.

function toys(toy1,toy2){
    console.log(`apply: ${this.name} have two vehicle`,toy1, "and",toy2)

}


toys.apply(user,["car","bike"])


// bind

// bind() does not execute the function immediately. Instead, it creates and returns a new function with this permanently bound to the specified object.

function bindFun(hobby1,hobby2){
      console.log(`bind: This is ${this.name} and my hobbies ${hobby1} and ${hobby2}`)
}

const bindCode =bindFun.bind(user,"movie","coding")

bindCode()





