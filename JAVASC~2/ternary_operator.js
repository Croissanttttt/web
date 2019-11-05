const array = [];
let text = '';

//조건문으로 처리한 경우
if(array.length === 0) {
    text ='배열이 비었어요';
}
else {
    text = '배열이 안 비어있어요';
}
console.log(text);

//삼항연산자 사용, 조건이 참이면 앞에 내용, 조건이 거짓이면 뒤에 내용
console.log(array.length === 0 ? '배열이 비었어요' : '배열이 안 비었어요');
