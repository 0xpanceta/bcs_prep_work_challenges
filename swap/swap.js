function swap(obj) {
    let swappedObj = {};
    for (let key in obj) {
            // Assign new key-value pair with swapped places
            swappedObj[obj[key]] = key;
        
    }
    return swappedObj;
}

var obj = {a: 1, b: 2};
var newObje = swap(obj);
console.log(newObje); // {1: 'a', 2: 'b'}
