const {
  linearExpo: exp1,
  binExpoRecursive: exp2,
  binExpoIterative: exp3,
  getRandomArgsCb,
} = require('./functions');
const { testResults } = require('./testResults');
const { benchmark } = require('./benchmark');

// test functions
for (let i = 0; i < 1000; i++) {
  testResults(getRandomArgsCb, exp1, exp2, exp3);
}

// test performance
benchmark(exp1, exp2, exp3);
