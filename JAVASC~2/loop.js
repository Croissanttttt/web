//for문
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i < 10; i += 3) {
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        let a = String(i);
        let b = String(j);
        let c = i * j;
        console.log(`${a} * ${b} = ${a * b}`);
    }
}

const names = ['멍멍이', '야옹이', '병아리'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//while문
let i = 0

while (i < 10) {
    console.log(i);
    i++;
}

//continue와 break
let j = 0;

while (true) {
    j++;
    if (j % 2 === 0) {
        continue;
    }
    if (j > 30) {
        break;
    }
    console.log(j);
}

//배열에 for문에 적용하기
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}

//객체를 for문에 적용하기
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
    console.log(key);
}

for (let key in doggy) {
    console.group(`${key}: ${doggy[key]}`);
}

//반복문 예제
function biggerThanThree(numbers) {
    let arr = [];
    for(let i of numbers){
        if(i >= 3){
            arr.push(i);
        }
    }
    return arr;
}

const result = [-1, -4, 5, 6, 7, 10, 4, 30, 4, 5, 8, 10];
let ans = biggerThanThree(result);
console.log(ans);