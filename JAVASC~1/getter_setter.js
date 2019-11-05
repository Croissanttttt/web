//getter와 setter
const numbers = {
    a: 1,
    b: 2,
    name: "개",
    get sum() {
        return this.a + this.b;
    },
    get _name() {
        return this.name;
    },
    set _name(other_name) {
        this.name = other_name;
    }
}

console.log(numbers.sum);
console.log(numbers._name);
numbers._name = '강아지';
console.log(numbers.name);