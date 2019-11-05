function Phone(price, calling) {
    this.price = price;
    this.calling = calling;
}

Phone.prototype.say = function() {
    console.log(`이 제품의 가격은 ${this.price}이고 전화는 음질은 ${this.calling}입니다.`);
}

function IPhone(price, calling) {
    Phone.call(this, price, calling);
}

function Galaxy(price, calling) {
    Phone.call(this, price, calling);
}

IPhone.prototype = Phone.prototype;
Galaxy.prototype = Phone.prototype;

const ip = new IPhone(1000000, "최고");
const gal = new Galaxy(899999, "최고");

ip.say();
gal.say();
