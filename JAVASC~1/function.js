//함수의 개념
function add(a, b) {
    return a + b;
}

function hello(name) {
    console.log('hello ' + name);
}

function Bye(name) {
    return `Bye ${name}`;
}

function getGarad(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B+';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C+';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 40) {
        return 'D+';
    } else if (score >= 30) {
        return 'D';
    } else {
        return 'F';
    }
}

const mul = (a, b) => a * b; //화살표 함수

const sum = add(1, 2);
const result = Bye('BOb');
const res = mul(4, 5);

hello('Kevin');
console.log(result);
console.log(sum);
console.log(`점수는 ${getGarad(47.2)} 입니다.`);
console.log(res);