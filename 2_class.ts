class Student {
    public firstName: string;
    public lastName: string;
    // parameterized constructor
    constructor(firstName: string, lastname: string) {   
        this.firstName = firstName;
        this.lastName = lastname;
    }
}
class Test extends Student {
    constructor() {
        super("test", "test 2");
    }
}

// creating object of student class 
var objStudent = new Student('Codemind', 'technology');
console.log(objStudent);

// creating object of Test class 
var objTest = new Test()
console.log(objTest);