//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오(p.50)
// 0.1 0.2 ... 1
function p50(){
    for (let i = 0.1; i < 1; i = i + 0.1)
    {
        // let sum = 0;
        // sum += i;
        // console.log(i);
        console.log(Number(i.toFixed(1)))
    }
}
//p50();

// 1~10 사이의 정수에 대해 제곱근을 소수점 3자리까지 출력하시오. 
// Math.sqrt() 사용, 무리수만 출력
function p51(){
    for(let i = 1; i <=10; i += 1){
        const sq  = +Math.sqrt(i).toFixed(3);
        if (sq % 1 != 0) console.log(i, sq);
    }
}
//p51();

// 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
// const today = new date(); today, getday();//요일번호. 오늘은 금요일입니다. (일월화수목금토)
//console.log('\n3. 요일 출력 switch')
const WEEK_NAMES = '일월화수목금토';
function p52(){
    const day = new Date().getDay();
    console.log('day: ', WEEK_NAMES[day]);// switch문 사용X
    
    // switch문 사용
    let wname;
    switch(day){
        case 0:
            wname = '일';
            break;
        case 1:
            wname = '월';
            break;
        case 2:
            wname = '화';
            break;
        case 3:
            wname = '수';
            break;
        case 4:
            wname = '목';
            break;
        case 5:
            wname = '금';
            break;
        case 6:
            wname = '토';
            break;
    }
    console.log(`오늘은 ${wname}요일입니다.`)
}
// p52();
// const x= today.getDay();
// console.log(x);

//p.53
function addPoints(a, b){
    const len = (a ?? '').toString().length;

    console.log('len: ', len);

}