const nums = [1,2,3,4,5,6];
const doubledNums = nums.map((num) => num * 2);
// console.log(doubledNums);

const squareNums = nums.map((num) => num * num);
// console.log(squareNums);

const stringNums = nums.map((num) => num.toString());
console.log(stringNums);

const evenOdd = nums.map((num) => (num % 2 === 0 ? 'even' : 'odd'));
console.log(evenOdd);

const objects = nums.map((num) => ({ number: num, isEven: num % 2 === 0 }));
console.log(objects);