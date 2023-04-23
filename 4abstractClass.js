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
var Car = /** @class */ (function () {
    function Car() {
    }
    // simple method
    Car.prototype.Wheel = function () {
        return "4 wheeler";
    };
    Car.prototype.CheckAC = function () {
        return "Ac is available";
    };
    // non abstract method
    Car.prototype.CallFacility = function () {
        return "Call facility supported";
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return "white";
    };
    return Toyota;
}(Car));
var toyota = new Toyota();
console.log("~~~~~~~~~~~~~~ Object Toyota ~~~~~~~~~~~~~~");
console.log(toyota.Wheel());
console.log(toyota.CheckAC());
console.log(toyota.CallFacility());
console.log(toyota.Price());
console.log(toyota.getTotalSeats());
console.log(toyota.Color());
// console.log(hundyai.GPS());
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 9000000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return "Gray";
    };
    Hundyai.prototype.GPS = function () {
        return "GPS is  Present";
    };
    return Hundyai;
}(Car));
var hundyai = new Hundyai();
console.log("~~~~~~~~~~~~~~ Object Hundyai ~~~~~~~~~~~~~~");
console.log(hundyai.Wheel());
console.log(hundyai.CheckAC());
console.log(hundyai.CallFacility());
console.log(hundyai.Price());
console.log(hundyai.getTotalSeats());
console.log(hundyai.Color());
console.log(hundyai.GPS());
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.Price = function () {
        return 5000000;
    };
    Tata.prototype.getTotalSeats = function () {
        return 8;
    };
    Tata.prototype.Color = function () {
        return "Flem Red";
    };
    return Tata;
}(Car));
var tata = new Tata();
console.log("~~~~~~~~~~~~~~ Object Tata ~~~~~~~~~~~~~~");
console.log(tata.Wheel());
console.log(tata.CheckAC());
console.log(tata.CallFacility());
console.log(tata.Price());
console.log(tata.getTotalSeats());
console.log(tata.Color());
// console.log(hundyai.GPS());
