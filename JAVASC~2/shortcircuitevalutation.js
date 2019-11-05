//&&연산자
//앞이 참이면 뒤에 값이 무조건 나온다. 앞이 거짓이면 Falsy값이 무조건 나온다. 둘다 거짓이면 앞의 Falsy값이 나온다.
const res1 = true && true; 
const res2 = true && false;
const res3 = false && true; 
const res4 = false && false;
const res5 = null && 1;
const res6 = 0 && 10000;
const res7 = 1 && 'string';
const res8 = -1 && -5;
const res9 = undefined && 'string';
const res10 = 1 && null;
const res11 = undefined && '';
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
console.log(res10);
console.log(res11);
console.log('-----------------------------\n');

//||연산자
//두 가지 값 중 둘 다 참이면 앞에 값이 나온다. 두 가지 값 중 한 가지 값만 참이면 참인 값이 나온다. 둘 다 거짓이면 앞의 Falsy값이 나온다. 
const res12 = true || true;
const res13 = true || false;
const res14 = false || true;
const res15 = false || false;
const res16 = undefined || 1234;
const res17 = 0 || 'str';
const res18 = null || 'str';
const res19 = 'str' || '';
const res20 = '' || null;
const res21 = undefined || null;
const res22 = 'string' || 3456;
console.log(res12);
console.log(res13);
console.log(res14);
console.log(res15);
console.log(res16);
console.log(res17);
console.log(res18);
console.log(res19);
console.log(res20);
console.log(res21);
console.log(res22);
console.log('-----------------------------');

const obj1 = {
    name: '시이작',
};

const obj2 = {
    name: '',
};

const obj3 = null;

function getName(obj) {
    const name = obj && obj.name;
    if(!obj){
        return '설정한 이름이 없습니다.';
    }
    return name;
}

const name1 = getName(obj1);
const name2 = getName(obj2);
const name3 = getName(obj3);
console.log(name1);
console.log(name2);
console.log(name3);
