

//  T-001: Create an array of 5 elements using the Array Constructor.
const arr1 = new Array(1, 2, 3, 4, 5);
console.log("arr1", arr1)
// [ ] T-002: Create an array of 3 empty slots.

const arr2 = new Array(3);
console.log("arr2", arr2);


// [ ] T-003: Create an array of 6 elements using the Array literals and access the fourth

const arr3 = [1, 2, 3, 4, 5, 6];
console.log("arr3", arr3[3])

// T-004: Use the for loop on the above array to print elements in the odd index


for (let i = 0; i < arr3.length; i++) {
    if (i % 2 !== 0) {
        console.log("odd index", i, "value", arr3[i]);
    }
}

//  T-005: Add one element at the front and the end of an array.

console.log(arr3.unshift(0))
console.log("unShift", arr3)

console.log(arr3.push(7))
console.log("push", arr3)

// T-006: Remove an element from the front and the end of an array.

console.log(arr3.shift())
console.log("Shift", arr3)

console.log(arr3.pop())
console.log("pop", arr3)

// T-007: Create an array containing the names of your favourite foods (10 foods).
// Destructure the 6th food element from the array using destructuring.

const foods = [
    "noodles",
    "paneer",
    "pizza",
    "burger",
    "biryani",
    "pasta",
    "dosa", //6
    "idli",
    "fried rice",
    "samosa"
];

const [, , , , , sixthFood] = foods;
console.log("6th food", sixthFood);


//  T-008: Take out the last 8 food items from the above array using the Array destructuring. 
// Hint: rest parameter.

const [firstFood, secondFood, ...restFood] = foods
console.log("firstFood:", firstFood, "secondFood:", secondFood, "restFood:", restFood)

// [ ] T-009: Clone an Array(Shallow cloning)

const copyArr = foods.slice()

console.log("copyArr", copyArr)

// T-010: Empty an array using its length property

// const EmpArr = [];
// console.log("EmpArr",EmpArr.length)

foods.length = 0

console.log("EmpArr", foods)


// T-011: Create an array of 10 elements(number 1 to 10).
//  Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

const eleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
eleArray.length = 6

for (let i = 0; i < eleArray.length; i++) {
    if (eleArray[i] === 5) {
        eleArray.length = 6;
        break;
    }
}

console.log("eleArray", eleArray)

//  T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

const spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const emptySplice = spliceArray.splice(0, 10)
console.log("spliceArray", emptySplice, spliceArray)

// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: 
// using the length property, using the pop() method, using the shift() method, 
// setting the array with [], or the splice() method. 
// Which among these methods are most efficient and why?

// 1.method using pop or shift
// if(spliceArray.length >0){
//     spliceArray.pop(0)
// spliceArray.shift()
// }

// console.log("popArray",spliceArray)

// 2. method splice ( good method)
// console.log("spliceEmp",spliceArray.splice(0,spliceArray.length))

// 3. method length (best method and its efficient)
//  spliceArray.length =0

// console.log("spliceArray",spliceArray)





// T-014: What happens when you concatenate two empty arrays?

const consArr1 = [];
const conArr2 = [];
console.log("concatenate", consArr1.concat(conArr2)) // output : []

// T-015: How can you check if a value is partially matching with any of the elements of an Array?

const checkArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("check if a value is partially matching", checkArray.includes(8));


//  T-016: What is the difference between the slice() and splice() methods?


console.log("checkSlice", checkArray.slice(4, 6), checkArray);
// slice has pass two argument , start element and end element
// original array cannot change just copy the element of the array 
// output :[5,6]  
console.log("checkSlice", checkArray.splice(4, 6), checkArray);
// slice has pass two argument index and delete the count of element

// it copy of original array then original array will affect
// output: [5,6,7,8,9,10] this will be deletecount


// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders.
//  You must be doing this in an immutable way such that the source array never gets modified.

const aplha = ["z", "f", "a", "i", "b", "e", "c"];

// const ascen = [...aplha].sort();


const ascen = aplha.toSorted()

console.log("ascending", ascen)
console.log("aplha", aplha)

const descen = [...aplha].sort(function (a, b) {
    return a == b ? 0 : a > b ? -1 : 1
})

console.log("descen", descen);
console.log("aplha", aplha)


//  T-018: Can you give examples of sparse and dense arrays?

// dense arrays
const denseArray = [10, 20, 30, 40, 50];

console.log(denseArray);

// sparse
const sparseArray = [];

sparseArray[0] = "A";
sparseArray[3] = "D";

console.log(sparseArray);
console.log(sparseArray.length);

//  T-019: Give a practical usages of the .fill() method
const emoji = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log(emoji.fill("apple", 3, 5))
//  ['🍅', '🍄', '🥦', 'apple', 'apple', '🥕', '🥑']


//  T-020: How to convert an array to a string?

const fruits = ["Apple", "Banana", "Mango"];

console.log("arrayJoin", fruits.join(" "))

console.log("arrayString", fruits.toString(""))

console.log("stringArr", String(fruits))

// const result = fruits.toString();

// console.log(result);



// T-021: Can you filter employees who work in the "Engineering" department?
const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
];

const depart = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
];

const findDept = depart.find((item) => item.name = "Engineering")

const fiterDpt = employees.filter((item) => item.departmentId == findDept.id)
console.log("filterDept", fiterDpt)


// T-022: Create a new array that combines employee names and
//  department names in the format: "Alice (HR)".


const newStud = employees.map((value) => {

    const finddep = departments?.find((item) => item.id == value.departmentId)

    return `${value.name} (${finddep.name})`

})

console.log("newStud", newStud)

// T-023: Find the highest salary among employees.


function salary(employees) {


    let highSalary = employees[0]

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].salary > highSalary.salary) {
            highSalary = employees[i]
        }
    }

    return highSalary

}

console.log("salary", salary(employees))


function largestValue(denseArray) {
    let highestValue = []
    for (let i = 0; i < denseArray.length; i++) {
        if (denseArray[i] > highestValue) {
            highestValue = denseArray[i]
        }

    }
    return highestValue
}

console.log("largestValue", largestValue(denseArray))


// [ ] T-024: Check if there is at least one employee in the "Sales" department.

const findItem = departments.find(item => item.name == "Sales");

const filterSales = employees.filter((item) => item.departmentId == findItem?.id)

console.log("findItem", filterSales)

function lestSalry(filterSales) {
    let highestValue = filterSales[0]

    for (let i = 0; i < filterSales.length; i++) {
        if (filterSales[i].salary < highestValue.salary) {
            highestValue = filterSales[i]
        }

    }
    return highestValue
}

console.log("lestSalry", lestSalry(filterSales))


const findSales = departments.find(item => item.name === "Sales");

const hasSalesEmployee = employees.some(emp => emp.departmentId === findSales?.id);

console.log("Has at least one Sales employee:", hasSalesEmployee);

// T-025: Write a function to filter employees earning more than 6000.

const earning = employees.filter((item) => item.salary > 6000);
console.log("earning", earning)

// T-026: Create an array of employee names only.

const employeeName = [];

const eNames = employees.map(item => item.name);

function storeNames(employees) {

    for (let i = 0; i < employees.length; i++) {
        const element = employees[i].name;
        employeeName.push(element)

    }
}

storeNames(employees)
console.log("eNames", employeeName);


// T-027: Calculate the total salary of all employees using

function amountSalary(employees) {
    let total = 0
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary
    }
    return total

}

console.log("totalSalary", amountSalary(employees))

// T-028: Is there any employee earning less than 5000?

const lessEarn = employees.some(item => item.salary < 5000);
console.log("lessEarn", lessEarn);

// T-029: Find the first employee who earns exactly 5100.
const findEmp = employees.find(item => item.salary == 5100);
console.log("findEmp", findEmp);


// T-030: Find the last employee in the "HR" department.

const lastDpt = departments?.findLast((item) =>  item?.name =="HR");

const lastEmp = employees?.findLast((item) =>  item?.departmentId == lastDpt?.id);

console.log("lasEmp",lastEmp)


// T-031: Find the first employee in the "Marketing" department.

const fsrDpt = departments?.find((item) =>  item?.name =="Marketing");
const fstEmp = employees?.find((item) =>  item?.departmentId === fsrDpt?.id);

console.log("fstEmp",fstEmp)


// T-032: Check if all employees earn more than 4000.


function allemp(employees) {
    const earn = []
    for (let i = 0; i < employees.length; i++) {

        if (employees[i].salary > 4000) {
            earn.push( employees[i])
           
        }

    }
    return earn
}

console.log("employees earn",allemp(employees));



//  T-033: Find the first employee in the "Sales" and "HR" department.

const findDeptment = departments?.filter((item) =>  item?.name =="Sales" ||item?.name =="HR");

const firstEmpsPerDept = findDeptment.map((dept) =>
  employees.find((emp) => emp.departmentId === dept.id)
);
console.log("firstEmp",firstEmpsPerDept);


// T-034 Verify if all employees belong to a department listed in the departments array.

function verify(employees,departments){
  

    for (let i = 0; i < employees.length; i++) {
        let verified = false;
        for (let j = 0; j < departments.length; j++) {



            if (employees[i].departmentId === departments[j].id) {
                verified = true;
                break
            } 

        }

        if(!verified) {return false}
       
    }
    return true
    
}
console.log("verify all employee",verify(employees,departments));


// T-035: Log each employee's name and department name to the console.

const eachEmp = employees.forEach((value) => {
    const dep = departments.find((item) => item.id ==value.departmentId);

    console.log(`employeeName: ${value.name} & department : ${dep.name}`)
})
eachEmp()

//  T-036: Extract all employee names into a single array.
const employeeNames = employees.map((emp) => emp.name);

console.log("employeeNames", employeeNames);
// ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Helen", "Ian", "Jane"]