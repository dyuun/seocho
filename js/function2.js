const f2 = 
    f => 
    (...args) => 
        console.log(f.name, f(...args));

const fx = f2(Math.max);
ret = fx(1, 3, 5, 7);
//console.log('ret: ', ret);

function samef2(f){
    return function (...args) {
        console.log(f.name, f(...args));
    };
}

console.log("---------------");
const fns = [Math.max, Math.min];
for (const f of fns) {
    console.log(f.name, f(1,3,5));
}

function f222(f) { //변수 f의 closure
    return function(...args) {
     console.log(f.name, f(...args));
    };
}

const af1 = function (...args) {
    console.log(f.name, f(...args));
}

const af2 =  (...args) => 
    console.log(f.name, f(...args)); //단일 표현식일 경우 {}todfir rksmd
    
    const f22 = function(f){
    console.log(f.name, f(...args)); 
}


//currying
const f = () => () => { };

const aff = () => { };

function af() {}

const ff = () => af;

function fff() {
    let count = 0;
    return function(){
        return ++count;
    };
}
console.log('---------------');
const arr = [1, 2, 3, 4, 5];
Array.prototype.first = function(){
    return this[0];
};
Array.prototype.last = function(){
    return this[this.length - 1];
};
console.log(arr.first(), arr.last());

const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('ret2:', ret2);

Array.prototype.mapX = function (f) {
    const rets = [];
    for (let i = 0; i < this.length; i++){
        rets.push(f(this[i], i, this));
    };
    return rets;
}

const ret3 = arr2.mapX(Number);
console.log('ret3: ', ret3);
const ret4 = arr2.mapX(parseInt);
console.log('ret4: ', ret4);