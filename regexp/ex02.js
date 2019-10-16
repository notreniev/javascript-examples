///^([aeiou]).*\1$/i;
//var regExp = /^([aeiou]).*\1$/i;
//var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g
//var regExp = /[\D]/gi
var re = /(.).*\1/
const str1 = 'wxyzw';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';
console.clear()

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re));
console.log('substring:', str3.match(re));
console.log('substring:', str4.match(re));