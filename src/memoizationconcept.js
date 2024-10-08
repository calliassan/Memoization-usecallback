//defining sum function(1st)
const sum = (a, b) => {
  console.log("called with params", { a, b });
  return a + b;
};
//when we see below, memoize takes a function called sum so, pass function fn as a parameter. when we
//see console, we have called memoizedsum and passed(1,2) as argument. this means we have to catch those arguments inside memoize
//while returning a function.
const memoize = (fn) => {
  const cache = {}; //(3rd)
  return function (...args) {
    const key = JSON.stringify(args); //key is arguments
    if (cache[key]) {
      return cache[key];
    }
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
};
//defining a new fuction memoized =sum that calls another function memoize(2nd)
const memoizedsum = memoize(sum);
console.log(memoizedsum(1, 2));
console.log(memoizedsum(1, 2));
console.log(memoizedsum(1, 2));

//if we call just plain sum without memoize, it will call 3 times
// console.log(sum(1,2))
// console.log(sum(1,2))
// console.log(sum(1,2))
