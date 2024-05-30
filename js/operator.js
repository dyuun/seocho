/*
let a = 1;
let b = 2; //b:변수

const c = (a++, b++); //c:상수, a=2 b=3
console.log('c =', c , a, b);

const d = (a--, b + a);//a=1, 4
console.log('d=',d,a, b);

const first = 'Uncle';
const last = 'Bob';
if (first) {
    console.log(first);
}
console.log(last);

let fullName = first ? first + ' ' : '' 
//fullName = lastName;
console.log('fullName = ', fullName);

//console.log(`${first} ${last}`);

console.log('-----------');
const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER)
console.log(isNaN(Infinity));

const num = 123.456;
console.log(num, num.toFixed(2) + 9);
var aa = 11;
var bb = 22;
var cc = aa , bb;
console.log('cc: '+ cc);

console.log(Math.trunc((0.1 + 0.7) * 10) / 10);

const three = 0.1 + 0.2;
console.log(three);


const x = 2;
//x가 1이면 one, 2면 two, 3: three, 그외 etc

let outStr = 'etc';

if(x == 1){
    console.log('one');
} else if (x == 2) {
    console.log('two');
} else if (x == 3) {
    console.log('three');
} else {
    console.log('etc');
}


// let i = 5;
// console.log('i: ' + i);
// while (i > 0) {
//     console.log('i: ' , i);
//     i = i + 1;
// }

//1~100 까지의 합
//1. while

    // while(1 <= x && x <= 100){
    //     sum = x + 1;
    // }
    // console.log('x: ' + sum);

    i = 0;
    let sum = 0; //초기화를 먼저 해줘야한다.
    while(i <= 100){
        i = i + 1;
        sum = sum + i;
    }
    console.log( 'sum: ', sum);

//2. for
for (let j = 1; j <= 100; j++) {
    let sum = 0;
    //sum = sum + j;
    sum += i;
}
console.log('for sum: ' + sum);

//배열 출력하기 
const arr = [10, 20, 30, 40, 50];
    for(let i = 0; i < arr?.length; i++) {
        console.log(`arr[${i}]:`, arr[i]);
    }


console.log(`-------------`);

for(const t of arr) {
    console.log(`t:` + t);
    }

const user = { id: 1, name: 'Hong'};
for (const p in user) {
    console.log (`p:`, p, user[p]);
}
const ace = {id : 11, name: `서태웅` }
for (const pp in ace){
    console.log(`pp:`, pp, ace[pp]);
}

const WEEK_NAMES = '일월화수목금토';
for(const w of WEEK_NAMES){
    console.log(`w:`, w);
}
const season = '봄열갈결';
for(const s of season) {
    console.log('==== s:', s);
}

console.log(`-------------`);
for(const t of arr) {
    console.log(`t:`, t);
    if(t > 2) break;
 }


 const 국어 = 80;
 const 수학 = 70;
    function checkScore(){
        if(국어 > 70) {
            return '합격';
        }
        if(수학 > 70) {
            return '통과';
        }
        return '불합격';
    }
    console.log(checkScore());
    
console.log(`-------------`);

// for(let i = 0.1; i < 1; i = i + 0.1){
//     let sum = 0;
//     sum += 0.1;
// }
// console.log(sum);


//배열 디스트럭쳐링
const dt = new Date();
// console.log(`dt: `+ dt, dt.toLocaleString);
// console.log(`dt: `+ dt, dt.getFullYear);
// console.log(`dt: `+ dt, dt.getMonth);
// console.log(`dt: `+ dt, dt.getDay);

const today = dt.toISOString().substring(0,10);
    console.log('today: ' + today);//2024-05-22
const [year, month, day] = today.split('-');
    console.log([year, month, day]);//'2024', '05, '22'


const obj = { firstName: `태웅`, lastName: `서`};
const {lastName, firstName} = obj;
console.log(lastName, firstName); //서태웅

const person = {
    name: 'seo',
    info: {
        number: '11',
        position: 'forward'
    }
};
//console.log(position);//디스트럭쳐링을 해야 출력이 된다! 
const { info: {position} } = person;
    console.log(position);
const { info:{number} } = person;
    console.log(number);

var bd = {
    ccc: `kchi`,
    info: {
        aaa: `1`,
        bbb: `guard`
    }
};
var { info:{aaa} } = bd;
var { ccc } = bd;
console.log(a);
console.log(c);
*/

const {name:n, age = 30} = {name: 'lee'};
const {age2= 30} = {name: 'Park', age2: 20};
//const fn = ({age}) => age;
//console.log(fn);

const obj = {
    id: 1,
    fn: function(){
        console.log(arguments);
    },
};

const { fn } = obj;
fn(1, 2, 3);
    const{
        fn: { name: nm }, 
    } = obj;
    console.log('name:', nm);
