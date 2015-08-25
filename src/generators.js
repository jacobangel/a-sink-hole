function* fib() {
  let n = 1;
  let arr = [0, 1];
  while (n++) {
    arr[n] = arr[n - 1] + arr[n - 2];
    yield arr[n];
  }
}

module.exports = {
  run() {
    for (let i = 0, im = 10; i < im; i++) {
      console.log(fib.next().value);
    }
  },
};
