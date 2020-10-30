// const printItems = function(array) {
//   for (let item of array) {
//     console.log(item);
//   }
// };

const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
};

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);