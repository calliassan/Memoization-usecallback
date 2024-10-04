const sum = (a, b) => {
  console.log("called with params", { a, b });
  return a + b;
};
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
};
const memoizedsum = memoize(sum);
console.log(memoizedsum(1, 2));
console.log(memoizedsum(1, 2));
console.log(memoizedsum(1, 2));

//if we call just plain sum without memoize, it will call 3 times
// console.log(sum(1,2))
// console.log(sum(1,2))
// console.log(sum(1,2))
