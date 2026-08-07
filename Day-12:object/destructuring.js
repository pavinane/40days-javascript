// Object Destructuring
const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
   }


const fistName = student.name
const ageNum = student.age
// or

const {name,age} = student;

console.log(name,age);


// add new variable inside the students of object

const {subjects,totalSubjects = subjects?.length} = student;
console.log(subjects,totalSubjects)


// make allias of the variable
const {address :loca} = student
console.log("address ",loca)




// Nested Object Destructuring

 
const {address:{zip}} = student;

console.log("zip",zip)


// Destructuring the function parameter

// function studentEmail(student){
//     console.log(`Send email to particular student's Parent ${student.parents.email}`)
    
// }

function studentEmail({parents:{email}}){

    console.log(`Send email to particular student's Parent ${email}`)
    
}



studentEmail(student)


const studentGrades = [
    {
        "name":"pavi",
        "grade":"A+"
    },
    {
        name:"keerthi",
        grade:"B"
    },
    {
        name:"vaishu",
        grade:"S"
    },
]


for(let {name,grade} of studentGrades){
    console.log(name,grade)
}