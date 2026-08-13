



//  2. What is the problem here? Fix it to log the correct name and explain the fix

// const user = {
//   name: "tapaScript",
//   greet: () => {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// user.greet();


// Arrow functions DON'T have their own this — they inherit this from the lexical scope
// then parent scope cannot call or allow the arrow function

const user = {
    name: "tapaScript",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
};

user.greet();




// The method is invoked on the user object
// this automatically refers to user
// this.name = "tapaScript"


// 3. Can you explain what is the problem here and fix the issue to log the correct name?

// const obj = {
//   name: "Tom",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// const greetFn = obj.greet;
// greetFn();



//  greetFn now contains the FUNCTION CODE but it's DISCONNECTED from 'obj'
//  Regular function call (not a method call) 'this' = global object (NOT obj)
const obj = {
    name: "Tom",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
};


const greetFn = obj.greet;
greetFn.call(obj)


//  4. What is the problem with the following code? Why isn't it logging the name correctly?


//      users.greet()
//     
//      Regular function called ON users object
//     
//      'this' = users 

//     But then inner()  Regular function called as STANDALONE function
//         
//     'this' = global object (NOT users)   this.name = undefined 



// const users = {
//   name: "Alex",
//   greet: function () {
//     function inner() {
//       console.log(`Hello, ${this.name}!`);
//     }
//     inner();
//   },
// };


// nested child function can use arrow 
const users = {
    name: "Alex",
    greet: function () {
        const inner = () => {
            console.log(`Hello, ${this.name}!`);
        }
        inner();
    },
};

users.greet();



const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};


// car2.describe = car1.describe

// car2.describe()


// car1.describe.call(car2)

// const myCar = car1.describe

// myCar.call(car2)

// myCar.apply(car2)