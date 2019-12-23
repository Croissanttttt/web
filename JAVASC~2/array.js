//배열, 배열의 인덱스
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

//배열의 원소로 객체를 사용하기
const object = [{
        name: '멍멍이', age: 17, S: '수컷'
    },
    {
        name: '개', age: 14, S: '암컷'
    }
];

console.log(object);
console.log(object[0]);
console.log(object[1].name);

//배열에 원소를 입력하기
object.push({
    name: '김동현'
})

console.log(object[2]);

console.log(object.length); //배열의 길이

//배열의 각 원소의 내가 지정한 함수를 적용하기
const superheroes = ['아이언맨', '캡틴', '토르', '닥터 스트레인지'];

function print(hero) {
    console.log(hero);
}

superheroes.forEach(print);

superheroes.forEach(function (hero) {
    console.log(hero);
})

superheroes.forEach(hero => {
    console.log(hero);
})

//모든 원소 변환하기
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const other_array = array.map(n => n * n);

console.log(other_array);

const items = [{
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
const id = items.map(item => item.id);
console.log(texts);
console.log(id);

//특정 원소의 위치 검색하기
const foods = ['볶음밥', '짬뽕', '볶음밥', '탕수육'];
const index = foods.indexOf('볶음밥');
console.log(index);

//객체 배열의 특정 조건에 맞는 원소 위치 검색하기, 객체 배열의 특정 조건에 맞는 원소를 출력하기
const todos = [{
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 'abc',
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]

const obejct_index = todos.findIndex(todo => todo.id === 4);
const obejct = todos.find(todos => todos.id === 1);
console.log(obejct_index);
console.log(obejct);

//원하는 원소 뽑아내기
const taskNotDone = todos.filter(todo => todo.done === false);
const taskYesDone = todos.filter(todo => todo.done === true);
console.log(taskNotDone)
console.log(taskYesDone)

//특정 항목 제거하기
const numbers = [1, 2, 3, 4, 5];
const where = numbers.indexOf(3);
const spliced = numbers.splice(where, 2);
console.log(spliced);
console.log(numbers);

//특정 항목을 얻어내기
const car = ['벤츠', '아우디', 'BMW', '기아'];
const sliced = car.slice(0, 2);
console.log(sliced);
console.log(car);

//배열에서 맨 앞에 원소를 추가하기
const Lego = ['부가티', '심슨', '시티', '바이오니클'];
Lego.unshift('테크닉');
console.log(Lego);

//배열에서 맨 앞에 원소를 뽑아내기
const flight = ['아시아나', '대한항공', '진에어', '에어아시아'];
const value_flight = flight.shift();
console.log(value_flight);
console.log(flight);

//배열에서 맨 뒤에 원소를 추가하기
const Toy = ['물총', '건담', '미니카'];
Toy.push('큐브');
console.log(Toy);

//배열에서 마지막 원소를 뽑아내기
const animals = ['개', '고양이', '악어', '새'];
const value_animals = animals.pop();
console.log(value_animals);
console.log(animals);

//여러개의 배열을 하나로 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//배열의 모든 원소를 모아서 string형태로 만들기
const delay = [1, 2, 3, 4, 5];
const str1 = delay.join();
const str2 = delay.join(',');
const str3 = delay.join(', ');
console.log(delay);
console.log(str1);
console.log(str2);
console.log(str3);

//배열을 순회하며 인덱스 데이터를 줄여 어떤 특정 기능을 수행하려 할 때 사용
const plusadd = [1, 2, 3, 4, 5];
const sum = plusadd.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

const mat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const avg = mat.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(avg);

const alphabets = ['a', 'a', 'a', 'b', 'b', 'c', 'c', 'c', 'd', 'd'];
const res = alphabets.reduce((acc, current)=>{
    if(acc[current]){
        acc[current] += 1;
    }
    else{
        acc[current] = 1;
    }
    return acc;
}, {})
console.log(res);
