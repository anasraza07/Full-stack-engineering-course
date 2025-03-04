// Exercise 3: Array and methods ✨
// // TASK 01:
// function filterNumbers(arr) {
//     const numbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i])
//         if (typeof arr[i] === "number") {
//             numbers.push(arr[i])
//         }
//     }
//     return numbers;
// }
// console.log(filterNumbers(["anas", 6, "raza", 3, "number", 1, "ali", 0]))

// // TASK 02:
// function reverseArray(arr) {
//     const reversedArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i])
//     }
//     return reversedArr;
// }
// console.log(reverseArray(["anas", 6, "raza", 3, "number", 1, "ali", 0]));

// // TASK 03:
// function findMax(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length - 1; i++) {
//         // console.log(arr[i], arr[i + 1])
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }

//     return max;
// }
// console.log(findMax([12, 32, 1, 42, 8, 32, 76, 8]))

// // TASK 04:
// function removeDuplicates(arr) {
//     let resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!resultArr.includes(arr[i])) {
//             resultArr.push(arr[i]);
//         }
//     }
//     return resultArr;
// }
// console.log(removeDuplicates([1, 2, 3, 1, 2, 4, 5, 6, 7, 4, 6, 5, 4, 7, 8, 9, 10]));

// // TASK 05:
// function flattenArray(arr) {
//     return arr.flat();
// }
// console.log(flattenArray([1, 2, [3, 4]]))

