function Animals(type, name, sound, food, foot) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.food = food;
    this.foot = foot;
    this.say = function() { //익명함수
        console.log(this.sound);
    }
}

//객체가 공유할 수 있는 함수(프로토타입 함수)
Animals.prototype.feed = function() {
    console.log(this.food);
}

//객체가 공유할 수 있는 변수(프로토타입 변수)
Animals.prototype.sharedHouse = 101;

const dog = new Animals('개', '춘자', '멍멍', '개밥', '4');
const cat = new Animals('고양이', '춘식', '야옹', '참치', '4');

dog.say();
dog.feed();
console.log(`사는 집의 주소는 ${dog.sharedHouse} 입니다.`);

cat.say();
cat.feed();
console.log(`사는 집의 주소는 ${cat.sharedHouse} 입니다.`);
