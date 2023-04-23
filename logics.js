console.log("~~~~~~~~~~~~ To find the factorial of Given Number ~~~~~~~~~~~~~~");
function factorial(num) {
    if (num == 0)
        return 1;
    else
        return num * factorial(num - 1);
}
console.log("Factorial of 2 ", factorial(2));
console.log("Factorial of 3 ", factorial(3));
console.log("Factorial of 4 ", factorial(4));
console.log("Factorial of 5 ", factorial(5));
console.log("Factorial of 6 ", factorial(6));
console.log("~~~~~~~~~~~~ to find Fibonacci series ~~~~~~~~~~~~~~");
var calculateValue = function (number) {
    if (number < 1) {
        return 0;
    }
    var a = 0;
    var b = 1;
    for (var i = 1; i < number; ++i) {
        console.log(b);
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
};
// Usage example:
var value = calculateValue(10);
console.log("~~~~~~~~~~~~ to find leap year ~~~~~~~~~~~~~~");
function CheckLeapYear(leapYear) {
    //A leap year is a year that is divisible by 4, except for years that are divisible by 100 but not divisible by 400.
    if (typeof leapYear != "number" || leapYear == null || isNaN(leapYear) || leapYear == undefined) {
        console.log("The year ".concat(leapYear, " is Not Valid year, Please Provide valid year"));
        return;
    }
    if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {
        console.log("The year ".concat(leapYear, " is A Leap year"));
        return;
    }
    else {
        console.log("The year ".concat(leapYear, " is Not A Leap year"));
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
console.log("~~~~~~~~~~~~ to find the palindrome string ~~~~~~~~~~~~~~");
var string1 = "RACECAR"; //DAD, MADAM, LEVEL, EYE, POP, ARA, NOON, MALAYALAM
var string2 = "MALAYALAM";
var string3 = "SHIVAM";
function check_palindrome(str) {
    var lastIndex = str.length - 1;
    for (var index = 0; index < lastIndex / 2; index++) {
        var firstChar = str[index]; //forward character
        var lastChar = str[lastIndex - index]; //backward character
        if (firstChar != lastChar) {
            return "passed string: \"".concat(str, "\" not a palindrome");
        }
    }
    return "passed string: \"".concat(str, "\" is palindrome ");
}
var result = check_palindrome(string1);
console.log(result);
var result2 = check_palindrome(string2);
console.log(result2);
var result3 = check_palindrome(string3);
console.log(result3);
