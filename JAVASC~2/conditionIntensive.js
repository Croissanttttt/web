list = ['개', ' 고양이', '거북이'];
const func = (text) => list.includes(text);
console.log(func('개'));
console.log(func('인간'));
//////////////////////////////////////////////



const getsound = (animals) => {
    const sounds = {
        '개' : '멍멍',
        '고양이' : '야옹',
        '병아리' : '삐약',
        '펭귄' : '꾸웍',
    }
    return sounds[animals] || '울음소리를 모르겟어요';
}
console.log(getsound('개'));
console.log(getsound('사람'));
///////////////////////////////////////////////////


//익명함수 람다를 화살표 함수로 나타낸 것
function operating(operator, a, b) {
    const calculater = {
        plus() {
            console.log(a + b);
        },
        minus() {
            console.log(a - b);
        },
        mul() {
            console.log(a * b);
        },
        div() {
            console.log(a / b);
        }
    }
    const what = calculater[operator];
    if(!what) {
        console.log('연산못해요');
        return;
    }
    else {
        return what();
    }
}

operating('plus', 1, 2);
operating('minus', 10, 2.4);
operating('square', 4, 5);
/////////////////////////////////////////
