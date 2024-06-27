//일반함수
function sum(num1, num2){
    return num1 + num2;
}
//화살표 함수
const num = (num1, num2) => { 
    return  num1 + num2 
};

const result = sum(10, 20);
console.log(result);

var myName = 'abc';
var myName = 'dfg';
console.log(typeof myName);

let isTrue = 10 > 100;
console.log(typeof isTrue);

console.log(1 == '1'); //true
console.log(1 === '1'); //false
console.log(1 === 1); //true
console.log(1 != '1'); //false
console.log(1 !== '1'); //true

let option1 = 10 > 1; //true
let option2 = 2 == 3; //false
console.log(option1 || option2); // or(둘 중 하나라도 참이 있는가) -> true
console.log(option1 && option2); // and(둘 다 참?)-> false
console.log(!option1); //false

//0, null, ""(빈 문자열), undefined 같은 데이터들은 false를 반환하는 데이터다. 
let a; //비어있으므로 flase
if(!a){ // !a -> false가 아니면==true면 헬로우 반환해라
    console.log('hello');
}

//컨테이너 자료형: 배열, JSON
//객체: key, value로 이루어진 자료형
let userInfo = {
    email: 'abc@naver.com',
    pw: '123',
};

//read(객체조회)
console.log(userInfo.email);
console.log(userInfo['email']);

//update
userInfo.email = '123@naver.com';
console.log(userInfo.email);

//delete
delete userInfo.email;
console.log(userInfo)

const obj = {title: 'tt', date: "2020-02-02", user: []};
obj.user.push({email: 'test@naver.com', pw: '123'})
console.log(obj)