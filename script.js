
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

function reduce(arr, callback) {
    if (arr.length < 2) {
        return;
    }
    let answer = callback(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
       answer = callback(answer, arr[i])
    }
    return answer;
}

let reduced = reduce(arr1, function(element, element2) {
    return element + element2;
})
console.log(reduced);

function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
function myPush(arr, element) {
    arr[arr.length] = element
}

function myLastIndex(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function grabKeys(object) {
    let arr = []
    for (var key in object) {
        arr.push(key)
    }
    return arr
}
let obj1 = {
    a: "foo",
    b: "bar",
    c: "buz"
};
console.log(grabKeys(obj1));

function grabValues(object) {
    let arr = []
    for (var key in object) {
        arr.push(object[key])
    }
    return arr
}

console.log(grabValues(obj1))

function sumOfRange(arr, start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += arr[i];
    }
    return sum;
}

function reverse(arr) {
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i++) {
        reversed.push(arr[i])
    }
    arr = reversed;
}

console.log(arr1)
arr1.reverse()
console.log(arr1)

function arrayToList(arr) {
    if (arr.length === 0) {
        return;
    }
    let list = {
        value: arr[0],
        rest: arrayToList(arr.slice(1))
    }
    return list;
} 
function listToArray(list) {
    let arr = []
    if (!list.value) {
        return arr;
    }
    while (list.rest) {
        arr.push(list.value)
        list = list.rest
    }
    arr.push(list.value)
    return arr;
}
arr1.reverse();
console.log(arrayToList(arr1))
console.log(listToArray(arrayToList(arr1)))