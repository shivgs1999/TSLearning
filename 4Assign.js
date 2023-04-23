console.log("-----------Interface Assignment--------------");
console.log("~~~~~~~~~~~~~~~   Toyota Car  ~~~~~~~~~~~~~~~");
var Toyota = /** @class */ (function () {
    function Toyota() {
    }
    Toyota.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Toyota.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    Toyota.prototype.callFacility = function () {
        return 'Call Facility is available';
    };
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'white';
    };
    Toyota.prototype.GPS = function () {
        return "GPS is not supported in Toyota Car";
    };
    return Toyota;
}());
var objToyota = new Toyota();
console.log(objToyota.GPS());
console.log("~~~~~~~~~~~~~~~   Hyundai Car   ~~~~~~~~~~~~~~~");
var Hyundai = /** @class */ (function () {
    function Hyundai() {
    }
    Hyundai.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Hyundai.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    Hyundai.prototype.callFacility = function () {
        return 'Call Facility is available';
    };
    Hyundai.prototype.Price = function () {
        return 1000000;
    };
    Hyundai.prototype.getTotalSeats = function () {
        return 5;
    };
    Hyundai.prototype.Color = function () {
        return 'white';
    };
    Hyundai.prototype.GPS = function () {
        return "GPS is  supported in Hyundai Car";
    };
    return Hyundai;
}());
var objHyundai = new Hyundai();
console.log(objHyundai.GPS());
