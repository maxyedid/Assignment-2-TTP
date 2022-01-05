
function myEach(arr, callback) {
    var t;
    for (let i = 0; i < arr.length; i++) {
        t = arr[i]
        callback(t)
    }
}
let arr1 = [1, 2, 3];

myEach(arr1, function(element) {
    element = 5;
    console.log(element)
});
console.log(arr1);