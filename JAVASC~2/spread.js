//spread연산자(...)를 사용, 이것은 객체에서 특정 값을 가져올 때 사용, 가져온 객체와 원래 객체는 다르다고 인식, 함수의 인자로 사용
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
   ...cuteSlime,
    color: 'purple'
};

const greenCuteSlime = {
    color: 'green',
    ...purpleCuteSlime
}

const redCuteSlime = {
    ...greenCuteSlime,
    color: 'red'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);
console.log(redCuteSlime);
console.log(cuteSlime === purpleCuteSlime);
console.log(greenCuteSlime === purpleCuteSlime);
console.log(redCuteSlime === purpleCuteSlime);

slime.age = 10;
cuteSlime.age = 10;
purpleCuteSlime.age = 20;

console.log(cuteSlime.age);
console.log(purpleCuteSlime.age);
console.log(slime === cuteSlime);

const slime1 = slime; //slime1에 slime을 추가
slime1.attribute = 'cute';

console.log(slime1 === slime);
//////////////////////////////////////////



const arr1 = ['가위', '자', '펜'];
const arr2 = [arr1, '샤프'];
console.log(arr1);
console.log(arr2);
//////////////////////////////////////



const result = (...rest) => rest[0] - rest[1]; //함수의 파라미터로는 rest를 이용하여 흩어져 있는 값들을 모으는 역할
const numbers = [1, 2];
console.log(result(...numbers)); //함수의 인자로는 spread를 이용하여 특정 배열이나 객체에 있는 값들을 가져오는 역할
/////////////////////////////////////




function max(...rest) {
    res = rest[0];
    for(let i = 0; i < rest.length; i++) {
        if(res < rest[i]) {
            res = rest[i];
        }
    }
    return res;
}
const what = [1,2,3,4,,5,6,7,7,8];
console.log(max(...what));
