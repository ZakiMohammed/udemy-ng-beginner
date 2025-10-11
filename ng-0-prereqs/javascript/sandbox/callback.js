const isEven = (num, callback) => {
  setTimeout(() => {
    if (num % 2 === 0) {
      callback(true);
    } else {
      callback(false);
    }
  }, 3000);
}

isEven(12, (result) => {
  console.log(result);
});