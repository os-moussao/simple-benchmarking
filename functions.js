// functions to compare
const MOD = 1000000007n;

function linearExpo(a, n) {
  a = BigInt(a);
  n = BigInt(n);
  let pr = 1n;
  for (let i = 0; i < n; i++) {
    pr = (pr * a) % MOD;
  }
  return pr;
}

function binExpoRecursive(a, n) {
  n = BigInt(n);
  a = BigInt(a);

  if (n <= 0n) return 1n;

  let pr = binExpoRecursive(a, n / 2n);
  pr = (pr * pr) % MOD;
  if (n & 1n) pr = (pr * a) % MOD;

  return pr;
}

function binExpoIterative(a, n) {
  a = BigInt(a);
  n = BigInt(n);

  let pr = 1n;
  while (n > 0n) {
    if (n & 1n) pr = (pr * a) % MOD;
    a = (a * a) % MOD;
    n >>= 1n;
  }

  return pr;
}

// random args callback for expo
function getRandomArgsCb() {
  const a = Math.floor(Math.random() * 1001);
  const n = Math.floor(Math.random() * 1001);
  return [a, n];
}

module.exports = {
  linearExpo,
  binExpoRecursive,
  binExpoIterative,
  getRandomArgsCb,
};
