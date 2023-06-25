// array.push
// way to add elements into an array
const ar = [];

let p = 0; // small value

while (p <= 10) { // loop till large value

  ar.push(p + 10);
  // p++; // incremental
  // p = p + 1;
  p += 1; // shorthand operation
}

console.log(ar); // 10, 11, 12 ... 20



// array.pop --> non parameterised
const ar2 = [100, 300, 500, 700];

ar2.pop(); // remove the last element from array, original array gets modified
console.log(ar2);



// array.splice --> used to delete/remove element/elements inbetween array
// affects the original array
let ar3 = [400, 800, 1200, 1600];

// delete entire array
ar3.splice(0);
console.log(ar3);

ar3 = [400, 800, 1200, 1600];
// part deletion [400, 800]
ar3.splice(0, 2);
console.log(ar3);

ar3 = [400, 800, 1200, 1600];
// delete and replace elements in the part [400, 800] --> [99, 999, 9999]
ar3.splice(0, 2, 99, 999, 9999);
console.log(ar3);

// array.toSplice -- same as splice but does not affect original array



const arr = [1, 2, 3, 4, 5];

// Array Join
// console.log(arr.join('-')); // 



// Array Reverse which affects original array
const arr2 = [5, 4, 3, 2, 1]
console.log(arr2.reverse());
console.log(arr2);

// Array toReversed-- > does not affect the original array
console.log(arr2.toReversed());
console.log(arr2);



// Array sort --> built in method which affects the original array
const arr3 = [12, 10, 17, 11, 1]
console.log(arr3.sort());

// Array toSorted --> orignal array not affected
console.log(arr3.toSorted());



// Array slice --> 
const arr5 = [6, 12, 18, 24, 30];

// 
console.log(arr5.slice(0, 3)); // O/P: [6, 12, 18]

// negative index
console.log(arr5.slice(-3, -1)); // O/P: [18, 24]



// array iteration
// n --> length of array
// normal 0 --> n - 1

// 10
// 20
// .
// 50


const arr6 = [10, 20, 30, 40, 50];
let i = 0;

while (i <= arr6.length) {

  console.log(arr6[i]);

  i++;
}


// n-1 --> 0


// 50
// 40
// .
// .
// 10

let j = arr6.length;

while (j >= 0) {

  console.log(arr6[j]);

  j--;
}










// non parameterised
function doRun() {
  console.log('Running 3 miles');
}

doRun();

// parameterised
function runFor(miles, minutes) {
  console.log('Run ' + miles + ' miles within ' + minutes + ' minutes');
}

runFor(3, 5);