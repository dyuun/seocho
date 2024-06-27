class Car {
    constructor() {
        this.wheels = 4;
    }

    say() {
        console.log(1);
    }
}

// const myCar = new Car();
// console.log(myCar.say());

class SmallCar extends Car {
    constructor() {
        super();//부모 속성인 this.wheels = 4;을 그대로 가져옴
        this.doors = 2;
    }
}

const mySmallCar = new SmallCar();
console.log(mySmallCar);

const userInfo = {
    name : 'hong',
    birth: '2020-02-02',
    getName: function () {
        console.log(this)
        return this.name;
    },
};

console.log(userInfo.getName());

const obj = {
    nick: 'hh',
    age: 22,
    //say: () => {//->error: 화살표 함수일 경우 this는 전역객체가 되어버린다.
    //객체 안의 메소드로 this를 표현할 땐 화살표 함수를 쓰지 않는다
    say: function() {
        console.log(this);
        console.log(`my name is ${this.nick}`);
    },
}
obj.say();

//div.inner를 선택
let inner  = document.querySelector(".inner");
//<div>
let element = document.createElement("div");
let hello = document.createTextNode("hello");
element.appendChild(hello);
inner.appendChild(element);