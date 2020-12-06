// const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

// const finalPosition = function (moves) {
//   let p = [0, 0];
//   moves.map((item) =>
//     item === 'north'
//       ? p[1]++
//       : item === 'south'
//       ? p[1]--
//       : item === 'east'
//       ? p[0]++
//       : p[0]--
//   );
//   return p;
// };

// console.log(finalPosition(moves));

// const ageCalculator = function (name, yearOfBirth, currentYear) {
//   return `${name} is ${currentYear - yearOfBirth} years old.`;
// };
// console.log(ageCalculator('Suzie', 1983, 2015));
// console.log(ageCalculator('Ferdinand', 1988, 2015));

// const howManyHundreds = (num) => {
//   return num < 100
//     ? 0
//     : num % 100 === 0
//     ? num / 100
//     : (num - (num % 100)) / 100;
// };
// console.log(howManyHundreds(1000));
// console.log(howManyHundreds(894));
// console.log(howManyHundreds(520));
// console.log(howManyHundreds(99));
// console.log(howManyHundreds(0));

// const calculateRectangleArea = (length, width) => {
//   return length < 0 || width < 0 ? undefined : length * width;
// };
// const calculateTriangleArea = (base, height) => {
//   return base < 0 || height < 0 ? undefined : (base * height) / 2;
// };
// const calculateCircleArea = (radius) => {
//   return radius < 0 ? undefined : Math.PI * (radius * radius);
// };
// console.log(calculateRectangleArea(10, 5)); // should print 50
// console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
// console.log(calculateRectangleArea(10, -5)); // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1));

// const range = (start, end, step) => {
//   let arr = [];
//   if (
//     start === undefined ||
//     end === undefined ||
//     step === undefined ||
//     start > end ||
//     step <= 0
//   ) {
//     return arr;
//   } else {
//     for (let i = start; i <= end; i += step) {
//       arr.push(i);
//     }
//     return arr;
//   }
// };

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

// const lastIndexOf = (arr, num) => {
//   let len = arr.length - 1;
//   for (let i = len; i >= 0; i--) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), '=?', 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), '=?', 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), '=?', -1);
// console.log(lastIndexOf([5, 5, 5], 5), '=?', 2);
// console.log(lastIndexOf([], 3), '=?', -1);

// const loopyLighthouse = (range, multiples, words) => {
//   for (let i = range[0]; i <= range[1]; i++) {
//     console.log(
//       i % multiples[0] === 0 && i % multiples[1] === 0
//         ? `${words[0]}${words[1]}`
//         : i % multiples[0] === 0
//         ? `${words[0]}`
//         : i % multiples[1] === 0
//         ? `${words[1]}`
//         : i
//     );
//   }
// };
// loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);

// const concat = (arr1, arr2) => {
//   return [...arr1, ...arr2];
// };
// console.log(concat([1, 2, 3], [4, 5, 6]));
// console.log(concat([1, 2, 3], [4, 5, 6]), '=?', [1, 2, 3, 4, 5, 6]);
// console.log(concat([0, 3, 1], [9, 7, 2]), '=?', [0, 3, 1, 9, 7, 2]);
// console.log(concat([], [9, 7, 2]), '=?', [9, 7, 2]);
// console.log(concat([5, 10], []), '=?', [5, 10]);

const merge = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => {
    return a - b;
  });
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]));
