//scope는 해당 변수나 함수의 범위가 어디까지 유효한지 나타내는 단위
//Global, Function, Block 세 단계로 나눔
//Global은 어떤 곳에서만 접근 가능
//Func는 함수 내의 어떤 곳에서도 접근 가능
//Block은 함수 외에 중괄호(조건문, 반복문 등)로 쌓인 곳에서 접근 가능
//결론은 var은 사용하지 말자(궁금하면 var로 선언하고 해보기), 코드가 근본이 없어진다......
const value = 'hello'; //global scope

function myfunc() {
    console.log('myfunc ', value);
}

function otherfunc() {
    const value = 'bye'; //function scope, 외부에서 접근을 못함
    console.log('otherfunc ', value);
}

function theOtherfunc() {
    const value = 'goodbye';
    const anothervalue = 'world';
    function funcInside() {
        console.log('theOtherfunc ', value);
        console.log('theOtherfunc ', anothervalue);
    }
    funcInside();
}

function newfunc() {
    const value = 'bye';
    if(true){
        const value = 'byebye'; //block scope
        console.log('newfunc ', value);
    }
    console.log('newfunc ', value);
}

myfunc();
otherfunc();
theOtherfunc();
newfunc();

console.log('global ', value);
