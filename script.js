
function myEach(arr, callback) {
    if (arr.length > 0) {
        var t;
        for (let i = 0; i < arr.length; i++) {
            t = arr[i]
            callback(t)
        }
    }
}
let arr1 = [1, 2, 3];

myEach(arr1, function(element) {
    console.log(element)
});

function myMap(arr, callback) {
    let newArr = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i])
    }
    return newArr;
}
let arr2 = myMap(arr1, function(element) {
    return element * 2;
});
console.log(arr1)
console.log(arr2)

function myFilter(arr, callback) {
    let newArr = []
    let currentIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr[currentIndex] = arr[i];
            currentIndex++;
        }
    }
    return newArr;
}
let arr3 = myFilter(arr1, function(element) {
    return element === 2;
})
console.log(arr3);

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

let even = mySome(arr1, function(element) {
    return element % 2 === 0
})
console.log(even)

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}
let belowFive = myEvery(arr1, function(element) {
    return element < 5
})
console.log(belowFive)