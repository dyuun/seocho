// function currentCount() {
//     let currCount = 0; // private variable return {
//       connect() { currCount += 1; },
//       disconnect() { currCount -= 1; },
//          getCount() { return currCount; }, // getter method
//           get count() { return currCount; 
//         }, // readonly getter (accessor)
//      };
    
//     const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장'];
//     const counter = currentCount(); for (const action of actions) {
//     action === '입장' ? counter.connect() : counter.disconnect();
//     console.log(`${action} -> 현재 입장객: ${counter.count} 명`); }
//     console.log('Current User Count=', counter.count);  // counter.getCount()


function getCount(){
    let cnt = 0;
    return function up(){
        return cnt ++;
    }
}
let count = getCount();
console.log(count());//0
console.log(count());//1
console.log(count());//2