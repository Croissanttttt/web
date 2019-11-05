function func1(r) {
    const len = r || 1; //인자를 안 넣어주었을 때를 대비하여 이렇게 설정한다.
    return Math.PI * len * len;
}

const func2 = (a = 13, b = 28) => a + b;

const area = func1();
const sum = func2();
console.log(area);
console.log(sum);
