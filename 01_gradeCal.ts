// take input from user
console.log(`~~~~~~~~~~~  Getting MArks from User ~~~~~~~~~~~`);

var math = Number( prompt(`Enter The Maths Marks`));
console.log(`Mathematics Marks: ${math}`);

var physics = Number(prompt(`Enter the Physics Marks`)) ;
console.log(`Physics Marks: ${physics}`);

var chemistry = Number(prompt(`Enter the Chemistry Marks`));
console.log(`Chemistry Marks: ${chemistry}`);

function marks (a: number, b: number, c: number){
    console.log(`~~~~~~~~~~~  Summation of MArks ~~~~~~~~~~~`);
    var sumMarks:number = (a + b + c)
    console.log(`Sum of All Subject Marks: ${sumMarks}`);
    
    console.log(`~~~~~~~~~~~  Average of MArks ~~~~~~~~~~~`);
    var avg:number = sumMarks/3
    console.log(`Average of All Subject Marks: ${avg}`);

    if (avg <= 70) {
        return `Grade C (${avg})`;
    } else if(avg > 70 && avg < 90)
    {
        return `Grade B (${avg})`; 
    } else {
        return `Grade A (${avg})`;
    }
}


console.log(marks(math,physics, chemistry));


// // Take input from user 


// function marks(a: number, b: number, c: number) {
//     var avg: number = (a+b+c) / 3;

//     if (avg <= 70) {
//         return `Grade C (${avg})`;        
//     } else if (avg > 70 && avg < 90) 
//     {
//         return `Grade B (${avg})`;   
//     } else {
//         return `Grade A (${avg})`;   
//     }
// }
// var math = Number(prompt(`Enter the math marks`)) ;
// var physics = Number(prompt(`Enter the physics marks`)) ;
// var chemistry = Number(prompt(`Enter the chemistry marks`)) ;

// console.log(marks(math, physics, chemistry));



