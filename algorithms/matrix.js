function getUniques(arr){
    let temp = [];
    let len = arr.length;
    for (let i = 0; i < len; i++){
        if (temp.indexOf(arr[i]) === -1) temp.push(arr[i]);
    }
    return temp;
}

function getDuplicates(arr){
    const uniques = arr.filter((item, index) => arr.indexOf(item) === index);
    const repeated = arr.filter((item, index) => arr.indexOf(item) !== index);
    return {original: arr, uniques: uniques, repeated: repeated};
}


const arr = [0,1,0,0,1,0,2,0,1,1,1,1,4,5,6];

console.log(getUniques(arr));
console.log(getDuplicates(arr));