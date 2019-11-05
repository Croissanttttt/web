/*if문*/
const a = 1;
var b = 1;
if (a + 1 === 2) {
    console.log("2입니다.");
    const a = 2;
    console.log(a);
    var b = 2;
    console.log(b);
}
console.log(a);
console.log(b);

/*if~else문*/
const c = 10;
if (c > 20) {
    console.log('c는 20보다 큽니다.');
} else {
    console.log('c는 20보다 작습니다.');
}

/*if~else if문*/
const d = 20;
if (d === 5) {
    console.log('5입니다.');
} else if (d === 10) {
    console.log('10입니다.');
} else if (d === 15) {
    console.log('15입니다.');
} else if (d === 20) {
    console.log('20입니다.');
} else if (d === 25) {
    console.log('25입니다.');
}