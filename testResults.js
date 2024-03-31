function testResults(getRandomArgsCb, ...functionsToTest) {
  const args = getRandomArgsCb();

  const results = new Set(
    functionsToTest.map((fn) => {
      return fn(...args); // stringify if dealing with objects
    })
  );

  if (results.size !== 1) {
    console.log(
      `tested functions do not have the same results for these args:`,
      args
    );

    process.exit();
  }
}

module.exports = {
  testResults,
};
