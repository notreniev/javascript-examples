function strReverse(str){
    if (typeof str !== 'string'){
        return false;
    }else{
        let result = str.split('').reverse().join('').toLocaleLowerCase();
        return result;
    }
}

console.log(strReverse('Everton'))