//hoisting 시 변수의 선언과 초기화(undefined으로) 같이 시켜버림 
console.log('a:', a);//a = undefined
a = 1;
var a
console.log('a:', a); // a = 1

// 전역변수와 지역변수의 개념이 확실치 않다. 
for(var i = 1; i < 5; i++) {
    console.log('local', i)
}
console.log('global', i)
// global은 출력이 안 되어야 하는데..! var같은 경우에는 함수만 지역변수로 호이스팅되고 나머지는 다 전역변수로 올려버린다.
// for문, if문 등등 (함수 제외)

var a = 1
console.log('과연 a로 나올까', a)//나옴
var a = 2
console.log('과연 2로 나올까', a)//나옴

// var를 let으로 하면 참조 에러로 나오지 않는다 
// 웬만하면 let 쓰자!