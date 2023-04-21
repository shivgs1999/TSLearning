var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Profile = /** @class */ (function () {
    // parameterized constructor
    function Profile(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    return Profile;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super.call(this, "Virat", "Kohli", 28, "Mumbai") || this;
    }
    return Player;
}(Profile));
console.log(" ~~~~~~~~~~~~~~ Class With Constructor ~~~~~~~~~~~~~");
var objProfile = new Profile('Shivam', 'Suradkar', 22, "Buldana");
console.log(objProfile);
var objPlayer = new Player();
console.log(objPlayer);
console.log(" ~~~~~~~~~~~~~~ Remove duplicate items from an array ~~~~~~~~~~~~~~");
// Write logic for Remove duplicate items from an array ?
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Given Array:  ".concat([inputArr]));
// let method: Array<number> = inputArr.filter((element,index) => {
//     return inputArr.indexOf(element) == index;
// })
// console.log(`After Removing Duplicate Values: ${[method]}`);
function removeDuplicates(inputArr) {
    return [new Set(inputArr)];
}
console.log("~~~~~~~~~~~ After Removing Duplicate From Array  ~~~~~~~~~~~");
console.log(removeDuplicates(inputArr));
