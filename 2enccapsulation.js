var Employee = /** @class */ (function () {
    function Employee() {
        this.emp_Name = "Codemind";
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            if (true) {
                return this.emp_Name;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var man = new Employee();
// 
console.log(man.name);
