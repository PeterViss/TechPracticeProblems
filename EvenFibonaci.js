var fib = function(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

function findEvenFibonaci(num) {
  let evens = fib(num).filter(number => {
    if (number % 2 === 0) {
      return number;
    }
  });
  return evens;
}
