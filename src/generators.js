function* fib() {
  let n = 0;
  const arr = [0, 1];
  while (++n) {
    if (n > 1) {
      arr[n] = arr[n - 1] + arr[n - 2];
    }
    yield arr[n];
  }
}

module.exports = {
  run() {
    let fibGenerator = fib();
    for (let i = 0, im = 30; i < im; i++) {
      console.log(fibGenerator.next().value);
    }
  },
};
