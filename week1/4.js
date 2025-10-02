function intercalareArrays(arr1, arr2){
     if (arr1.length !== arr2.length) {
        return -1;
    }

    let result=[]
    for(let i=0; i<arr1.length;i++){
        result.push(arr1[i])
        result.push(arr2[i])
    }

    return result
}

console.log(intercalsArrays([1, 2, 3], ['a', 'b', 'c']));