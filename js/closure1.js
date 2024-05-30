function f(){
    let count = 10;
    return {
        // id: count
        // count: count,
        count,
    };
}
const x = f();
console.log('x.count:', x.count);

// function f2(){
//     let count = 0;
//     return function(){
//         count += 1;
//         return count;
//     };
// }
// const y = f2();

// console.log('y: ', y);
// console.log('count: ', y.count);

