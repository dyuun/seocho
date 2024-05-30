//함수가 호출될 때 결정된다.호출한 사람은 없을 땐 window 객체 
//코딩알려주는누나 https://www.youtube.com/watch?v=tDZROpAdJ9w
const car = {
    name : 'KIA',
    getName: function(){
        console.log("car getName", this)
    }
};

//car.getName();//A.b A가 b를 부른 형태
const globalCar = car.getName;
globalCar();//b 즉 window가 호출될 때 결정된다. 

const car2 = {
    name: 'hyundai', 
    getName: car.getName,
};
car2.getName();
//this 값을 고정하고 싶다면??
const bindGetName = car2.getName.bind(car);
bindGetName(); 


//const btn = document.getElementById("button");
//btn.addEventListener("click", car.getName);//여기서의 this는 btn

const testCar = {
    name: 'benz',
    getName: function() {
        console.log("getname", this.name);
        const innerFunc = function (){
            console.log("innerFunc", this.name);
        };
        innerFunc();
    },
};

testCar.getName();