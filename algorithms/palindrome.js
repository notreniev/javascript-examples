function checkPalindrome(str) {     
    for(var i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase() != str[str.length - i - 1].toLowerCase()) return false;
    }
    return true;
}
console.log(checkPalindrome("radar"));
console.log(checkPalindrome("reviver"));
console.log(checkPalindrome("palindromo"));

function isPalindrome(str){
    if (typeof str !== 'string'){
        return false;
    }else{
        str = str.replace(' ','');
        let strReverse = [...str].reverse().join('').replace(' ','');
        console.log(strReverse.toLocaleLowerCase(), str.toLocaleLowerCase())
        return strReverse.toLocaleLowerCase() === str.toLocaleLowerCase();
    }
}

console.log(isPalindrome('SocorrammeSubinoonibusemMarrocos'));
console.log(isPalindrome('luz azul'));
console.log(isPalindrome('ana'));
console.log(isPalindrome('reviver'));
console.log(isPalindrome('palíndromo'));