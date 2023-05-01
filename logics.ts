console.log(`~~~~~~~~~~~~ To find the factorial of Given Number ~~~~~~~~~~~~~~`);


function factorial(num: number) : number {
    if (num == 0) return 1
    else return num * factorial(num - 1)
}

console.log("Factorial of 2 ",factorial(2))
console.log("Factorial of 3 ",factorial(3))
console.log("Factorial of 4 ",factorial(4))
console.log("Factorial of 5 ",factorial(5))
console.log("Factorial of 6 ",factorial(6))

console.log(`~~~~~~~~~~~~ to find Fibonacci series ~~~~~~~~~~~~~~`);

const calculateValue = (number: number): number => {
    if (number < 1) {
        return 0;
    }
    let a = 0;
    let b = 1;
    for (let i = 1; i < number; ++i) {
        console.log(b);
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
};


// Usage example:

    const value = calculateValue(10);
   
    console.log(`~~~~~~~~~~~~ to find leap year ~~~~~~~~~~~~~~`);
    function CheckLeapYear(leapYear: unknown) {
        //A leap year is a year that is divisible by 4, except for years that are divisible by 100 but not divisible by 400.
        if(typeof leapYear != "number" || leapYear == null || isNaN(leapYear) || leapYear == undefined){
            console.log(`The year ${leapYear} is Not Valid year, Please Provide valid year`);
            return;
        }
       
        if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {  
            console.log(`The year ${leapYear} is A Leap year`);
            return;
        } else {
            console.log(`The year ${leapYear} is Not A Leap year`);
            return;
        }
          
    }
    CheckLeapYear(2020);
    CheckLeapYear(1999);
    CheckLeapYear(1600);
    CheckLeapYear(2022);
    CheckLeapYear(1945);
    CheckLeapYear(1750);
    CheckLeapYear(null);
    CheckLeapYear(undefined);
    CheckLeapYear(NaN);
    CheckLeapYear("Twenty Twenty");

    console.log(`~~~~~~~~~~~~ to find the palindrome string ~~~~~~~~~~~~~~`);

let string1:string = "RACECAR"; //DAD, MADAM, LEVEL, EYE, POP, ARA, NOON, MALAYALAM
let string2:string = "MALAYALAM"; 
let string3:string = "SHIVAM"; 

function check_palindrome( str:string )
{
let lastIndex: number = str.length -1;
for( let index = 0 ; index < lastIndex/2 ;index++)
{
    let firstChar: string = str[index] ;//forward character
    let lastChar:string = str[lastIndex-index];//backward character
    if( firstChar != lastChar)
    {
    return `passed string: "${str}" not a palindrome`;
    }
}
return `passed string: "${str}" is palindrome `;
}
let result: string = check_palindrome(string1);
console.log(result);

let result2: string = check_palindrome(string2);
console.log(result2);

let result3: string = check_palindrome(string3);
console.log(result3);


console.log(`~~~~~~~~~~~~ Reverse the String ~~~~~~~~~~~~~~`);
function reversee(str:string) {
    let reverse = " ";
    for (let index = str.length; index >= 1; index--) {
     let charAt = str.charAt(index);  
        reverse = reverse + charAt;
    }
    return reverse;
}
let output:string = reversee("Shivam");
console.log(output);


var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) {  
       var charAt = str.charAt(index);
       reverse = reverse + charAt; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var output1 = reverseString("Do it anyhow"); 
console.log(`Reverse String is: ${output1}`);



