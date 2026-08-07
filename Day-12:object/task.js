

// 1. What will be the output and why?


const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// output will be not provided
//  because age assign value is undefined  and
// The nullish coalescing operator (??) checks whether the left-hand side is null or undefined

// undefined means its no value or value not found


// 2. What will happen if we try to modify a frozen object?


const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// output => obj.a =1
// because when freeze the object then not able to add the variable or
//  change the value .still you get what assign the value of key on memory


// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
    name: "Tapas",
    company: {
        name: "tapaScript",
        location: {
            city: "Bangalore",
            zip: "94107"
        }
    }
};

const { name: peronName, company, company: { location: { city } } } = person;

console.log("name", peronName),
    console.log("company", company),
    console.log("city", city)


// 4. Build a Student Management System

// - Store student details in an object (name, age, grades).
// - Implement a method to calculate the average grade.


const studentManagement = [

    {
        name: "keerthi",
        age: 28,
        grades: {
            english: 50,
            tamil: 60,
            maths: 70,
            geography: 40,
            science: 80,
        }
    }
]



for (let { grades } of studentManagement) {

    let totalScore = 0

    const totalSub = Object.values(grades);

    for (marks of totalSub) {
        totalScore += marks
    }

    const average = totalScore / totalSub.length;

    console.log(average)

}


// 5. Book Store Inventory System

// - Store books in an object.
// - Add functionality to check availability and restock books.

const bookStore = [

    {
        storeName: "Language",
        books: {
            "JavaScript": 10,
            "React": 5,
            "Node.js": 0,
        },




    }
]

function checkAvailability(bookStore) {
    let availability = [];
    let restore = []

    for (let { books } of bookStore) {

        const bookList = Object.entries(books);

        const objEntries = Object.fromEntries(newEntries);
        console.log("bookList", bookList)

        for (const [bookName, quantity] of bookList) {


            if (quantity > 0) {
                availability.push(bookName)
            } else {
                restore.push(bookName)
            }
        }

    }

    console.log("availability", availability)

    console.log("restore", restore)

}

checkAvailability(bookStore)



// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

// Object.keys() 

// It's get key of the object

const booksBundle = {
    JavaScript: 10,
    React: 5,
    "Node.js": 0
};

const ObjectKeys = Object.keys(booksBundle)
console.log("ObjectKeys",ObjectKeys) //output: ['JavaScript', 'React', 'Node.js']


//  Object.entries()

// It's convert from object to array

let grades = {
    english: 50,
    tamil: 60,
    maths: 70,
    geography: 40,
    science: 80,
}


const ObjectEntries = Object.entries(grades)
console.log("ObjectEntries", ObjectEntries)


// 7. How do you check if an object has a certain property?

const userProfile = {
  name: "John",
  age: 25,
};

console.log(userProfile.hasOwnProperty("name")); // true
console.log(userProfile.hasOwnProperty("email")); // false


console.log("name" in userProfile); // true
console.log("email" in userProfile); // false

// 8. What will be the output and why?

// first there is no freeze or seal on Object syntax 
// in Object of variable can reassign the value


const profilePerson = { name: "John" };
const newPerson = profilePerson;
newPerson.name = "Doe";
console.log(profilePerson.name); // output => profilePerson.name = "Doe"


// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// Shallow Copy
//    A shallow copy copies only the first level of an object.
        
//         Nested objects and arrays are not copied.
//         Instead, their memory reference is copied.

let userName = {
    person1:"pavi",
    person2:{
        name:"keerthi"
    }

}

let newUserPerson = Object.assign({},userName);
newUserPerson.person1 = "pavimegan"
newUserPerson.person2.name="karkeerthi"

console.log("userName",userName.person1 ,"newUserPerson.person1",newUserPerson.person1, );
// output = userName "pavi" newUserPerson.person1 "pavimegan" 

// in primitive value doesn't change
// userName of person1 will be reference 
console.log("userName",userName.person2.name,"newUserPerson.person2.name",newUserPerson.person2.name)
//  userName "karkeerthi" newUserPerson.person2.name "karkeerthi"

// Non primitive are object the object are not copies and make clone of the object with values


// Deep Copy

// A deep copy copies every level of an object. Every nested object and array gets a new memory reference.


let games = {
    marvel:50,
    dc:{
        batman: 40
    }

}

let newGame= structuredClone(games);
newGame.marvel =  100;
newGame.dc.batman= 20;

console.log("games",games.marvel, "newGame.marvel",newGame.marvel );
//output: games 50 newGame.marvel 100
console.log("games",games.dc.batman, "newGame.dc.batman",newGame.dc.batman )
// output: games 40 newGame.dc.batman 20


// 10. Loop and print values using Object destructuring


const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];



for (let {name,address,age} of users){
    console.log(name,address,age)
}