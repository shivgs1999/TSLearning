"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
var isPalindrome = function (input) {
    var string = input.toString();
    for (var i = 0, j = string.length - 1; i < j; ++i, --j) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
};
exports.isPalindrome = isPalindrome;
