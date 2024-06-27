const myName = 'Sico';
let s: string | number = 'abc';//string, number 둘 다 된다. 

s = 123;

console.log('Hello, World!');
console.log(`Hello, ${myName}`);

const str: string = 'abc';
type User = {id: number, name: string; addr?: string};
const user: { id: number; name: string } = { id: 1, name: 'Hong'};
type Emp = { id: number; name: string; dept: string | number};
const emp : Emp = {
    id: 1, 
    name: 'Kim', 
    dept: 'Sales',
};
emp.dept = 12;


const Y = 'y'
let z: 'x' | 'y' | 'z' = 'z'; //리터럴타입

type Member = {
    name: string,
    addr: string,
    discountRate: number;
 };
 type Guest = {
    name: string,
    age: number,
 };

 
const member: Member = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
 };
 const guest: Guest = {
    name: '김길동',
    age: 28,
 };
 const who = Math.random() > 0.5 ? member : guest;
 
 who.name = '마길동'; // OK 접근 가능
 
 if(`addr` in who)
 console.log(who.discountRate);
 
