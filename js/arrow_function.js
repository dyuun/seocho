//함수선언식
//특징:호이스팅이 가능하다. 함수 이름이 필수로 필요하다. 
//고로 익명함수 필요 시 함수표현식이 필요하다.
function main(){
    console.log("함수선언식")
}
main()

//함수표현식
//function()이라고 해도 되고, function xx()라고 이름 붙여줘도 됨
//호이스팅이 되지 않는다! -> 선언 전 호출 시 에러 발생 
const main2 = function(){
    console.log("함수표현식")
}
main2()

//화살표함수
const main3 = () => {
    console.log("함수표현식의 화살표함수표현")
}
main3()

//화살표 함수 예시
function add(a, b) {
    return a + b
}
add()
//이렇게 바뀐다
const add2 = (a, b) =>  a + b
add2()

//before
const getObj = () => {
    return { name: 'Hong'}
}
//after: 객체의 경우엔 {} 생략 시 문법의 혼란이 오므로 ()로 한번 감싸준다
const getObj2 = () =>  ({ name: 'Hong' })

// 일반함수
//배열형태의 객체가 담겨져있다.
function main4() {
   console.log(arguments)//{'0':1, '1':2, '2':3} 
}
main4(1, 2, 3)

//화살표함수로 접근하면? 
const main5 = () => {
    console.log(arguments)
}
main5(1, 2, 3)
//-> 인자 찾을 수 없다고 에러 뜸
//그럼 화살표 함수로는 일반함수처럼 가변인자를 처리할 수는 없는 걸까? 놉!

//(...)형식으로 찾으면 됨 (...param같은 형식으로도 가능)
const main6 = (...args) => {
    console.log(args)//[1,2,3] 출력
}
main6(1, 2, 3)


//참조: https://www.youtube.com/watch?v=mfaQOlc73pU