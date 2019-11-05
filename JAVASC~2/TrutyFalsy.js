//Falsy한 값, 다른 모든 값은 Truty한 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

const value1 = {};
const value2 = '';
const res1 = !!value1;
const res2 = !!value2;
console.log(res1);
console.log(res2);
