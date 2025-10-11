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

(async _ => {
  try {
      await isEven(2);
      console.log("Yay! it's even");
  } catch {
      console.log("Meh! it's odd")
  }
})();