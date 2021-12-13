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
        let strReverse = [...str].reverse().join('');
        return strReverse.toLocaleLowerCase() === str.toLocaleLowerCase();
    }
}

console.log(isPalindrome('SocorrammeSubinoonibusemMarrocos'));
console.log(isPalindrome('luz azul'));
console.log(isPalindrome('ana'));
