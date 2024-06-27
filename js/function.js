//변수가 데이터를 담기 위한 그릇이라면, 함수는 소스코드를 담기 위한 그릇

//기본형
//호이스팅 지원
function 함수명() {
    소스코드;
}

//익명함수
//호이스팅 불가 
let 변수명 = function () {
    소스코드
};

//ES6 화살표함수
//익명함수의 일종
//this 바인딩
let 변수명2 = () => {
    소스코드;
};

basic(1,2); //정의하기 전에 선언해도 가넝한. 호이스팅의 원리
function basic(num1, num2){
    console.log(num1 + num2)
}

let basic2 = (num1, num2) => {
    console.log('basic2: ' + num1 + num2)
}

let basic3 = (num1, num2) => {
    console.log('basic3: ' + num1 + num2)
}

const userInfo2 = {
    name: 'h', 
    bi: '2',
    getName: function(){
        re
    }
}