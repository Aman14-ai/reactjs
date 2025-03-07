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

const names = ['john', 'jacob', 'jingle', 'heimer', 'schmidt'];
const upperNames = names.map((name) => name.toUpperCase());
const capitalised = names.map((name) => name[0].toUpperCase() +" " + name.slice(1));
console.log(capitalised);
console.log(upperNames);

const books = ['The Bible', 'The Quran', 'The Bhagavad Gita', 'The Torah'];
const booksHTML = books.map((book) => `<h1>${book}</h1>`);
console.log(booksHTML);