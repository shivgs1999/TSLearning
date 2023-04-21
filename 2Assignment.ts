class Profile {
    public firstName: string;
    public lastName: string;
    public age: number;
    public address: any;

    // parameterized constructor
    constructor(firstName: string, lastName: string, age: number, address: any) {   
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
}
class Player extends Profile {
    constructor() {
        super("Virat", "Kohli", 28 , "Mumbai");
    }
}

console.log(` ~~~~~~~~~~~~~~ Class With Constructor ~~~~~~~~~~~~~`);

var objProfile = new Profile('Shivam', 'Suradkar', 22, `Buldana`);
console.log(objProfile);

var objPlayer = new Player()
console.log(objPlayer);

console.log(` ~~~~~~~~~~~~~~ Remove duplicate items from an array ~~~~~~~~~~~~~~`);

// Write logic for Remove duplicate items from an array ?
var inputArr: Array<number> = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(`Given Array:  ${[inputArr]}`);
// let method: Array<number> = inputArr.filter((element,index) => {
//     return inputArr.indexOf(element) == index;
// })
// console.log(`After Removing Duplicate Values: ${[method]}`);



function removeDuplicates(inputArr) {
    return [new Set(inputArr)];
}
console.log(`~~~~~~~~~~~ After Removing Duplicate From Array  ~~~~~~~~~~~`);
console.log(removeDuplicates(inputArr));