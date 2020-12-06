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

const calculateRectangleArea = (length, width) => {
  return length < 0 || width < 0 ? undefined : length * width;
};
const calculateTriangleArea = (base, height) => {
  return base < 0 || height < 0 ? undefined : (base * height) / 2;
};
const calculateCircleArea = (radius) => {
  return radius < 0 ? undefined : Math.PI * (radius * radius);
};
console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));
