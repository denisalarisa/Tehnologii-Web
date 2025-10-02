function caractereDiferite(string1, string2) {
    if (string1.length != string2.length) {
        return -1;
    }
    let result = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            result++;
        }
    }
    return result;
}

console.log(caractereDiferite("denisa", "larisa")); 
