//let 명령문은 블록 스코프의 범위를 가지는 지역 변수를 선언하며, 
//선언과 동시에 임의의 값으로 초기화할 수도 있다.
/* 
let x = 1;
if ( x === 1) {
    let x = 2;
    console.log('블록 내부: ' + x); // x = 2
}
console.log('블록 외부: ' + x); //x = 1
*/
//언제 사용?
//범위가 제한되는 변수를 선언한 수 있다. 
//파서가 구문을 평가해야만 변수를 값으로 초기화한다. 

// * var: 함수 스코프 블록 고려하지 않고 어디에서나 접근 가능
//블록 밖이어도 같은 함수 내이기만 하면 OK
function ex() {
    var x = 1; //함수 스코프 내에서 선언된 변수 x

    if (true) {
        var y = 2;
        console.log('X1' + x);
        console.log('Y1' + y);
    }
    console.log('X2' + x);
    console.log('Y2' + y);
}
ex();
//console.log('X3' + x);
//console.log('Y3' + y);

function abc() {
    var a = 1;
    if (true) {
        var b = 2;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}
abc()
//console.log(a);
//console.log(b);

for(var i = 0; i < 10; i++) {
    var aa = 'aa'
}
console.log(aa);

function func(){
    var bb = 'bb'
    console.log(bb)
}
func()
//console.log(bb)
// * var: 외부에서 선언될 때의 범위는 전역이다.

var age = 20;
age = 21;
console.log(age);

//let
let w = 'global'
if(w === 'global'){
    let w = 'bc'
    console.log(w) //-> bc
}
console.log(w)// -> global

//var
var z = 'global'
if ( z === 'global') {
    var z = 'bc'
    console.log(z) // -> bc
}
console.log(z) //-> bc

// console.log(e)
// console.log(r)
// let e = 1;
// var r = 2;

function ex2() {
    if(true) {
        var xxx = 10;
        let yyy = 20;
        const zzz = 30;

        console.log(xxx)
        console.log(yyy)
        console.log(zzz)
    }
    console.log(xxx)
   // console.log(yyy)
   // console.log(zzz)
}
ex2()