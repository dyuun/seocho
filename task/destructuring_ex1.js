//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
//Function signature를 3개 이상으로 표현하기

const hong = { id: 1, name: 'Hong'};
const lee = { id: 2, name: 'Lee'};

// 방법 1
user1 = `${hong.id}`+ ' ' +`${hong.name}` ;
user2 = `${lee.id}`+ ' ' +`${lee.name}` ;
console.log("방법 1. " + user1 + " " + user2);


// 방법 2
var user = { name, id } = hong;
console.log ("방법 2. " + id, name);
