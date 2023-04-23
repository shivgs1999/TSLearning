"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    // parameterized constructor
    function Employee(empName, empid, empDept, empDOJ, isTransportAvail) {
        this.empName = empName;
        this.empId = empid;
        this.empDept = empDept;
        this.empDOJ = empDOJ;
        this.isTransportAvail = isTransportAvail;
    }
    return Employee;
}());
var shiv = new Employee("Shivam", 101, "ETA", "07/july/2022", true);
console.log("1. ~~~~~~~~~~~~~~ Object with All Arguments ~~~~~~~~~~~~~~ ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(`Employee Name: ${shiv.empName}`);
// console.log(`Employee ID: ${shiv.empId}`);
// console.log(`Employee Department: ${shiv.empDept}`);
// console.log(`Employee DOJ: ${shiv.empDOJ}`);
// console.log(`is Transport Available: ${shiv.isTransportAvail}  <--- Optional Property`);
console.log("Employee Name: ".concat(shiv.empName, ", Employee ID: ").concat(shiv.empId, ", Employee Department: ").concat(shiv.empDept, ", Employee DOJ: ").concat(shiv.empDOJ, ", is Transport Available: ").concat(shiv.isTransportAvail));
var sachin = new Employee("Sachin", 102, "HR", "01/Jan/2022");
console.log("2. ~~~~~~~~~~~~~~ Object with Except Optional property ~~~~~~~~~~~~~~ ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(`Employee Name: ${sachin.empName}`);
// console.log(`Employee ID: ${sachin.empId}`);
// console.log(`Employee Department: ${sachin.empDept}`);
// console.log(`Employee DOJ: ${sachin.empDOJ}`);
// // console.log(`is Transport Available: ${sachin.isTransportAvail}`);
// if (sachin.isTransportAvail != undefined) {
//     console.log(`is Transport Available: ${sachin.isTransportAvail}`);
// }
console.log("Employee Name: ".concat(sachin.empName, ", Employee ID: ").concat(sachin.empId, ", Employee Department: ").concat(sachin.empDept, ", Employee Department: ").concat(sachin.empDept, ", Employee DOJ: ").concat(sachin.empDOJ, ", }"));
if (sachin.isTransportAvail != undefined) {
    console.log("is Transport Available: ".concat(sachin.isTransportAvail));
}
console.log("4.  ~~~~~~~~~~~~~ Create method findEmployees and make it overloading  ~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
function findEmployee(id, name1) {
    if (typeof id === "number") {
        return "Datatype of id is Number - id:  ".concat(id, "  and Datatype of name is String - Name:  ").concat(name1);
    }
    else if (typeof id === "string") {
        return "Datatype of id is String - id:  ".concat(id, "   and Datatype of name is String - Name:   ").concat(name1);
    }
    else if (typeof id === "boolean") {
        return "Datatype of id is boolean - id:  ".concat(id, "  and Datatype of name is String -Name:  ").concat(name1);
    }
}
var result1 = findEmployee(101, "Shivam");
console.log(result1);
var result2 = findEmployee("Two", "Rocky");
console.log(result2);
var result3 = findEmployee(true, "Virat");
console.log(result3);
console.log("3.  ~~~~~~~~~~~~~ import {isPalindrome} from \"./3AssignExport\" ~~~~~~~~~~~~~~");
console.log("3.  ~~~~~~~~~~~~~ Checking String and numbers are Palindrome or not ~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var _3AssignExport_1 = require("./3AssignExport");
// Usage example:
console.log("is Number Palindrome? --> \"12321\"");
console.log((0, _3AssignExport_1.isPalindrome)(12321)); // true
console.log("is String Palindrome? --> \"rasar\"");
console.log((0, _3AssignExport_1.isPalindrome)("rasar")); // true
console.log("is String Palindrome? --> \"DAD\"");
console.log((0, _3AssignExport_1.isPalindrome)("DAD")); // true
console.log("is Number Palindrome? --> \"123\"");
console.log((0, _3AssignExport_1.isPalindrome)(123)); // false
console.log("is String Palindrome? --> \"SHIVAM\"");
console.log((0, _3AssignExport_1.isPalindrome)("SHIVAM")); // false
