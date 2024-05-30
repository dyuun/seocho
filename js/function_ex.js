//getNextWeek 함수는 widx변수에 부수효과(side effect)가 있다. 이를 부수 효과가 없도록 함수를 수정하시오.
//hint: closure, IIFE 
const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = (() => {
    let widx = -1;
    return function(){
        widx += 1; //side effect
        if (widx >= weeks.length) widx = 0; //widx가 7보다 크거나 같으면 0
        return `${weeks[widx]}요일`;
    };
})();
//const getNextWeek = getNextWeekClosure();

let cnt = 0;
const intl = setInterval(() => {
    //widx += 2; //side effect 이걸 못하도록.
    console.log('call', cnt, getNextWeek());
    if((cnt += 1) === 8) clearInterval(intl);
}, 200);