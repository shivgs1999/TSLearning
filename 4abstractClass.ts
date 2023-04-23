abstract class Car {
  // simple method
  Wheel(): string {
    return "4 wheeler";
  }

  CheckAC(): string {
    return "Ac is available";
  }
  // non abstract method
  CallFacility(): string {
    return "Call facility supported";
  }

  abstract Price(): number;
  abstract getTotalSeats(): number;
  abstract Color(): string;
 // abstract GPS(): string;

}

class Toyota extends Car {
  Price(): number {
    return 1000000;
  }
  getTotalSeats(): number {
    return 5;
  }
  Color(): string {
    return "white";
  }
//    GPS(): String {
//     return "GPS is  Present"; 
//   }
}
let toyota = new Toyota();
console.log(`~~~~~~~~~~~~~~ Object Toyota ~~~~~~~~~~~~~~`);

console.log(toyota.Wheel());
console.log(toyota.CheckAC());
console.log(toyota.CallFacility());
console.log(toyota.Price());
console.log(toyota.getTotalSeats());
console.log(toyota.Color());
// console.log(hundyai.GPS());

class Hundyai extends Car {
  Price(): number {
    return 9000000;
  }
  getTotalSeats(): number {
    return 7;
  }
  Color(): string {
    return "Gray";
  }
  GPS(): String {
    return "GPS is  Present"; 
  }
}
let hundyai = new Hundyai();
console.log(`~~~~~~~~~~~~~~ Object Hundyai ~~~~~~~~~~~~~~`);

console.log(hundyai.Wheel());
console.log(hundyai.CheckAC());
console.log(hundyai.CallFacility());
console.log(hundyai.Price());
console.log(hundyai.getTotalSeats());
console.log(hundyai.Color());
console.log(hundyai.GPS());

class Tata extends Car {
   Price(): number {
    return 5000000;
  }
  getTotalSeats(): number {
    return 8;
  }
  Color(): string {
    return "Flem Red";
  }
//     GPS(): String {
//     return "GPS is  Present"; 
//   }
}
let tata = new Tata();
console.log(`~~~~~~~~~~~~~~ Object Tata ~~~~~~~~~~~~~~`);

console.log(tata.Wheel());
console.log(tata.CheckAC());
console.log(tata.CallFacility());
console.log(tata.Price());
console.log(tata.getTotalSeats());
console.log(tata.Color());
// console.log(hundyai.GPS());
