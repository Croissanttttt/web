const A = ['사과', '배', '포도', '바나나'];
const B = ['사과', '배', '감', '귤'];
const C =[];
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        if(A[i]===B[j]){
           C.push(B[j]);
        }
    }
}
console.log(C);
const sum = A.concat(B);
const Clen = C.length;
const D1 = [];
for(let i=0;i<Clen;i++){
    const temp = sum.indexOf(C[i]);
    D1.push(sum.splice(temp,1));
}
const D=sum;
console.log(D)
const E1 = [];
for(let i=0;i<Clen;i++){
    const temp = A.indexOf(C[i]);
    E1.push(A.splice(temp,1));
}
const E=A;
console.log(E)
const F1 = [];
for(let i=0;i<Clen;i++){
    const temp = B.indexOf(C[i]);
    F1.push(B.splice(temp,1));
}
const F=B;
console.log(F)