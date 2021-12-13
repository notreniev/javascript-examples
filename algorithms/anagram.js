function isAnagram(s1, s2){
    if(!s1 || !s2){
        return false;
    }

    return  s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
}

console.log(isAnagram('cat', 'act'));
console.log(isAnagram('defiNr', 'finder'));
