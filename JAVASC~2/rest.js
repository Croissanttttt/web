//rest는 여러 곳에 퍼져있는 객체의 값들을 모아오는 역할, 함수의 파라미터로 사용할 수 있다. 
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const {color, ...cuteSlime} = purpleCuteSlime; //color를 제외한 attribute와 name값이 비구조화 할당되어 들어간다.
console.log(color);
console.log(cuteSlime);

const {attribute, ...slime} = cuteSlime;
console.log(slime);
////////////////////////////////////////////////



const numbers = [0, 1, 2, 3, 4];
const [one, ...rest] = numbers; //0을 제외하고 나버지 애들을 담는다.
console.log(one);
console.log(rest);
//////////////////////////////////



function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1,2,3,4,5,6));
