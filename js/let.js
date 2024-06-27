function ex() {
    var x = 1; //함수 스코프 내에서 선언된 변수 x

    if (true) {
        var y = 2;
        console.log('X1' + x);
        console.log('Y1' + y);
    }
    console.log('X2' + x);
    console.log('Y2' + y);
}
//ex();
//console.log('X2' + x);
//console.log('Y2' + y);