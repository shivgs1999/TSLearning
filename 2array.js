// we can create array in diff ways 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [];
var arr2 = new Array();
var arr3 = Array();
var arr4 = [];
var arr5 = Array();
var arr6 = new Array();
var arr14 = Array();
// You can access them using index
console.log(arr1[0]);
// add elements in array using push . 
// Types of array 
// Homogenous , Hetro 
var homArr = ['Angular', 'Javascript'];
// Hetro
var hetroArr = ['HTML', 102, true];
// ArrayOf Object .
// Write logic for Remove duplicate items from an array ?
console.log("~~~~~~~~~~~ Given Array ~~~~~~~~~~~");
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(inputArr);
function removeDuplicates(inputArr) {
    return __spreadArray([], new Set(inputArr), true);
}
console.log("~~~~~~~~~~~ After Removing Duplicate From Array  ~~~~~~~~~~~");
console.log(removeDuplicates(inputArr));
// function uniqBySetWithArrayFrom<T>(inputArr: T[]): T[] {
//     return Array.from(new Set(inputArr));
// }
// function uniqBySetWithSpread<T>(inputArr: T[]): T[] {
//     return [...new Set(inputArr)];
// }
