// a function calling itself
/**
 * Recursion solves such recursive problems by using functions 
 * that call themselves from within their own code.
 */

// Recursion Limit
// Set recursion limit can be set in Nodejs


// Recursion
function Sample() {
  Sample();
}

// how can we termination condition termination recursion
let i = 1; // just a variable

function RecursionFunc() {
  console.log('Func Call', i)
  if (i <= 10) {
    i = i + 1;
    RecursionFunc();
  }
}

RecursionFunc();


// factorial of number using recursion
let N = 5; // 120 // 5 * 4 * 3 * 2 * 1 / 1 * 2 * 3 * 4 * 5

let j = 1;

let res = 1; //

function factorial() {
  if (j <= N) {
    res = res * j;
    j = j + 1;
    factorial();
  }
}

factorial();

console.log(res);



// bit more optimized recursion - parameterid
function SampleRecur(n) {
  if (n <= 5) {
    console.log(n);
    SampleRecur(n + 1);
  }
}

SampleRecur(1); // invoking / calling

function fact(n, i) {
  if (i <= 5) {
    const res = n * i;
    i = i + 1;
    fact(res, i);
  } else {
    console.log(n);
  }
}

fact(1, 1);

function factorialMinus(n, i) {
  if (i >= 1) {
    factorialMinus(n * i, i - 1);
  } else {
    console.log(n);
  }
}

factorialMinus(1, 5);

