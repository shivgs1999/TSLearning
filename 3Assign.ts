class Employee {
    public empName: string;
    public empId: number;
    public empDept: string;
    public empDOJ: String;
    public isTransportAvail: any;

    // parameterized constructor
    constructor(empName: string, empid: number,empDept: string, empDOJ: string,isTransportAvail?: any) {   
        this.empName = empName;
        this.empId = empid;
        this.empDept = empDept;
        this.empDOJ = empDOJ;
        this.isTransportAvail = isTransportAvail;
    }
}

var shiv = new Employee ("Shivam", 101, "ETA", "07/july/2022", true);
console.error(`1. ~~~~~~~~~~~~~~ Object with All Arguments ~~~~~~~~~~~~~~ `);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`Employee Name: ${shiv.empName}`);
console.log(`Employee ID: ${shiv.empId}`);
console.log(`Employee Department: ${shiv.empDept}`);
console.log(`Employee DOJ: ${shiv.empDOJ}`);
console.log(`is Transport Available: ${shiv.isTransportAvail}`);


var sachin = new Employee ("Sachin" , 102, "HR", "01/Jan/2022" )
console.error(`2. ~~~~~~~~~~~~~~ Object with Except Optional property ~~~~~~~~~~~~~~ `);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`Employee Name: ${sachin.empName}`);
console.log(`Employee ID: ${sachin.empId}`);
console.log(`Employee Department: ${sachin.empDept}`);
console.log(`Employee DOJ: ${sachin.empDOJ}`);
// console.log(`is Transport Available: ${sachin.isTransportAvail}`);
if (sachin.isTransportAvail != undefined) {
    console.log(`is Transport Available: ${sachin.isTransportAvail}`);
}

console.log(`3.  ~~~~~~~~~~~~~ import {isPalindrome} from "./3AssignExport" ~~~~~~~~~~~~~~`);
console.log(`3.  ~~~~~~~~~~~~~ Checking String and numbers are Palindrome or not ~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


import {isPalindrome} from "./3AssignExport";

// Usage example:
console.log(`is Number Palindrome? --> "12321"`);
console.log(isPalindrome(12321)); // true

console.log(`is String Palindrome? --> "rasar"`);
console.log(isPalindrome("rasar")); // true

console.log(`is String Palindrome? --> "DAD"`);
console.log(isPalindrome("DAD"));   // true

console.log(`is Number Palindrome? --> "123"`);
console.log(isPalindrome(123));   // false

console.log(`is String Palindrome? --> "SHIVAM"`);
console.log(isPalindrome("SHIVAM"));  // false


console.log(`4.  ~~~~~~~~~~~~~ Create method findEmployees and make it overloading  ~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

function findEmployee(id:number, name1:string);
function findEmployee(id:string, name1:string);
function findEmployee(id:boolean, name1:string);


function findEmployee(id: any, name1:string) {
    if(typeof id==="number"){
    return `Datatype of id is Number - id:  ${id}  and Datatype of name is String - Name:  ${name1}` 
        } 
        else if(typeof id==="string")
        { 
    return `Datatype of id is String - id:  ${id}   and Datatype of name is String - Name:   ${name1}`
        }
        else if(typeof id==="boolean"){
        
        return `Datatype of id is boolean - id:  ${id}  and Datatype of name is String -Name:  ${name1}`
    }

}
var result1 = findEmployee(101, "Shivam");
console.log(result1);
var result2 = findEmployee("Two", "Rocky");
console.log(result2);
var result3 = findEmployee(true, "Virat");
console.log(result3);



