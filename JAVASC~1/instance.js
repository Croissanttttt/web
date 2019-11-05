/* 객체 */
const ironMan = {
    name: '토니 스타크',
    actor: '로다주',
    alias: '아이언맨'
}

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

/*함수를 인자를 객체 인자로 받기*/
function print1(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

/*비구조화 할당*/
function print2(hero) {
    const {alias, name, actor} = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
};

/*객체 안에 함수를 만들기*/ 
const Man = {
    name: "김민수",
    age: 10,
    say() {
        console.log(this.name);
    }
};

const cat = {
    name: '야옹이',
    age: 2 
};

console.log(ironMan);
console.log(captainAmerica);

print1(ironMan);
print1(captainAmerica);
print2(ironMan);
print2(captainAmerica);

cat.say = Man.say;
const show = cat.say;
Man.say();
cat.say();
show();