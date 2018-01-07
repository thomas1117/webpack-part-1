import "../style/index.scss";

const arr = [1, 2, 3].map((item) => item * 5);
const obj = {
    first: 'John', last: 'Doe' 
};
let { first, last } = obj;

console.log(arr, first, last)
