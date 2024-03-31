function benchmark(...functions) {
  let testIndex = 1;

  const sumExecutionTime = functions.map((fn) => ({ [fn.name]: 0 }));

  // nbr of times to run each functions
  [1e4].forEach((count) => {
    // arguments
    [10, 10, 10, 100, 100, 100, 1e3, 1e3, 1e3, 1e4 / 2, 1e4].forEach((n) => {
      const args = [Math.floor(Math.random() * 1e9), n];

      const execTime = {};
      functions.forEach((fn, fnIndex) => {
        const time = run(count, fn, ...args);
        execTime[fn.name] = time;
        sumExecutionTime[fnIndex][fn.name] += time;
      });

      console.log(`Test ${testIndex++}:`);
      console.log(execTime);
    });
  });

  sumExecutionTime.sort((obj1, obj2) => {
    const time1 = Object.values(obj1)[0];
    const time2 = Object.values(obj2)[0];

    return time1 - time2;
  });

  console.log('\nOverall performance:');
  sumExecutionTime.forEach((obj) => {
    Object.entries(obj).forEach(([k, v]) => {
      obj[k] = formatToMs(v);
    });

    console.log(obj);
  });
}

function run(count, fn, ...args) {
  const start = performance.now();

  while (count--) {
    fn(...args);
  }

  return performance.now() - start;
}

function formatToMs(time) {
  return `${time.toFixed(2)} ms`;
}

module.exports = {
  benchmark,
  formatToMs,
  run,
};
