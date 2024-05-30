const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(key) 출력
for (const k in arr) {
    console.log(k);
}

console.log('\n2. element(value) 출력');
for (const k in arr) {
    console.log(arr[k]);
}

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }
console.log('\n3. for-in -> 프로퍼티 이름(key) 출력');
for (const k in obj){
    console.log(k);
}

console.log('\n4. for-in -> 프로퍼티 값 출력');
for (const k in obj){
    console.log(obj[k]);
}

console.log('\n5. for-of -> 프로퍼티 값 출력');
for (const k of Object.values(obj)){
    console.log(k);
}