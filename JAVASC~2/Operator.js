/*산술연산자*/
let a = 1 + 1;
let b = 2 - 2.5;
let c = 3 * 5;
let d = 4 / 0.1;
let e = 5 % 2;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/*단항연산자*/
//후위
console.log(a++);
console.log(a);

//전위
console.log(++a);
console.log(a);

/*논리연산자*/
const m = false;
let i = true;
let j = true;

//NOT
console.log(!m);

//AND
console.log(i&&j);
console.log(i&&(!j));
console.log((!i)&&j);
console.log((!i)&&(!j));

//OR
console.log(i||j);
console.log(i||(!j));
console.log((!i)||j);
console.log((!i)||(!j));

/*비교 연산자*/
const num1 = 1;
const num2 = 1;
const num3 = 2;
const str_num = "1";
const equals1 = (num1 === num2);
const equals2 = (num1 == num2);
const equals3 = (num1 === str_num);
const equals4 = (num1 == str_num);
const equals5 = (num1 !== str_num);
const equals6 = (num1 > num3);
const equals7 = (num1 <= num3);
console.log(equals1);
console.log(equals2);
console.log(equals3);
console.log(equals4);
console.log(equals5);
console.log(equals6);
console.log(equals7);