//함수나 변수의 호출 순서를 바꾸는 법
//자바스크립트 엔진이 알아서 해석한다.
//굳이 이렇게 하지말자. 호이스팅을 사용한 코드보면 매우 화난다. 정말 화난다. 유지 보수가 힘들다
myFunction();

function myFunction() {
    console.log('hello');
}

console.log(number);
var number = 2; //var를 사용하면 안되는 이유, 진짜로 제발 사용하지 말자
