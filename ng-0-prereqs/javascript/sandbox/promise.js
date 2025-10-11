const isEven = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 3000);
  });
};

isEven(11)
  .then(result => console.log('Even', result))
  .catch(result => console.log('Odd', result));
