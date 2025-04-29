// const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
// console.log(randomColor);
// function removeAt(arr, index) {
//     arr.splice(index, 1);
//     return arr;
//   }

//   let fruits = ['apple', 'banana', 'cherry'];
//   removeAt(fruits, 0);

//   console.log(fruits);
// ['apple', 'cherry']

//*random color genreator
// for (let i = 0; i < 253; i++) {
//   const randomColor =
//     "#" +
//     Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, "0");
//   console.log(`"${randomColor}",`);
// }
let text = "a   boy is good. he  is brave.";

text = text.replace(/\./g, ' ');    // replace dots with space
text = text.replace(/\s+/g, ' ');    // fix multiple spaces
text = text.trim();                  // remove spaces from start and end

console.log(text.split(' '));        // final array

