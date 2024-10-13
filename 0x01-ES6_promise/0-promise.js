function promiseFunction() {
  return new Promise((resolve) => {
    resolve('Success');
  });
}

// Call the function to use it
promiseFunction().then((result) => {
  console.log(result); // Logs "Success"
}).catch((error) => {
  console.error(error); // Handle any potential errors
});
