//비구조화를 잘하면 코드가 졸라 깔끔해진다.

const object = {a: 1};
const {a, b = 3} = object; //객체의 비구조 할당
console.log(a);
console.log(b);
//////////////////////////////



const animal = {
    name: '멍멍이',
    type: '개',
};

const {name: nickname} = animal; //name을 nickname으로 사용
const {name: name} = animal; //없애면 name이 인식이 안된다.
console.log(nickname);
console.log(name);
console.log(animal);
/////////////////////////////



const arr = [1, 2];
const[one, two] = arr; //배열의 비구조 할당
console.log(one);
console.log(two);
////////////////////////////



const objectvalue = {
    state: {
        information: {
            nick: 'peanut',
            language: ['c++', 'c', 'java', 'js']
        }
    },
    value: 5
}

const {nick, language} = objectvalue.state.information; //객체 안에 있는 nick과 language을 비구조화 할당으로 설정
const {value} = objectvalue; //객체 안에 있는 value를 설정

const extracted1 = { //객체를 비구조화 할당을 통해 초기화 함
    nick,
    language,
    value
};

const {language: [first, second]} = objectvalue.state.information; //objectvalue의 language의 첫번째, 두번째 원소를 추출한다.

console.log(objectvalue);
console.log(extracted1);
console.log(first, second);
