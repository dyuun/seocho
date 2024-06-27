let a = 1;
let b = 2; //b:변수

const c = (a++, b++); //c:상수
console.log('c =', c, a, b);

const d = (a--, b+a);
console.log('d =', d, a, b);