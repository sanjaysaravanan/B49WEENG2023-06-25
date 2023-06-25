// While incremental

let i = 0; // small value

while (i <= 10) { // loop till large value

  console.log(i);
  // i++; // incremental
  // i = i + 1;
  i += 1; // shorthand operation
}


// While decremental

let j = 100; // large value

while (j >= 0) { // loop till small value

  console.log(j);
  // j--; // decremental
  // j = j - 1; // step value is 1
  j -= 5; // shorthand operation
}


// different ways to add/insert elements into an array
// simply by using index

const arr = [];

let p = 0; // small value

while (p <= 10) { // loop till large value

  arr[p] = p + 10;
  // p++; // incremental
  // p = p + 1;
  p += 1; // shorthand operation
}

console.log(arr); // 10, 11, 12 ... 20


// inp: 
// 1 2 3 4 5

// out: 
// 5 4 3 2 1

const userInput = ['1 2 3 4 5'];


// out: 5 4 3 2 1
console.log(userInput[0].split(' ').toReversed().join(' '));


const str = '1 2 3 4 5';
// out: 5 4 3 2 1
let res = '';
let q = str.length - 1;

while (q >= 0) {
  res = res + str[q];
  q--;
}

console.log(res);


// sum of an array
const arr7 = [99, 88, 77, 66];

// Out: sum of elements in array --> 330

let i = 0;

let sum = 0;

while (i < arr7.length) {
  sum = sum + arr7[i];
  i++;
}

console.log(sum);



let j = 0;

let min = 9999999; // assigning max number initiallly


while (j < arr7.length) {
  if (min > arr7[j]) {
    min = arr7[j];
  }
  j++;
}

console.log(min);




