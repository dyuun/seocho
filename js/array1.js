var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();
stack.unshift(9);//unshift: 왼쪽으로 이동


queue.push(10);
queue.push(20);
queue.push(30);

var stackOutput = queue.shift();
queue.shift();
console.log("🚀 ~ stack:", stack, stackOutput);//[1,2] 10
console.log("🚀 ~ queue:", queue, stackOutput);//[30] 10
// ctrl+alt+l:로봇모양

const list = ['글3', '글2', '글1'];

//const 글2index = list.indexOf('글2');

function addArticle(article) {
    list.unshift(article);
}
function removeOld(){
//list.unshift(); 
list.pop();
}

addArticle('글4');
removeOld();

list.push('글4');

console.log("🚀 ~ list:", list)

console.log("🚀 ~ 글4:",list.indexOf('글4'));
console.log("🚀 ~ 글4:",list.lastIndexOf('글4'));

const hong = { id: 1, name: 'Hong'};
const kim = { id: 2, name: 'Kim'};
const park = { id: 3, name: 'park'};
const choi = { id: 4, name: 'Choi'};

const users = [park, kim, hong];

const id2userIndex = users.findIndex((v, i) => {
    return v.id = 2;
});
console.log("🚀 ~ id2user:", id2userIndex)

const id2user = users.find(v => v.id = 2);
console.log("🚀 ~ id2user:", id2user)

for(const user of users) {
    console.log(user.id, user.name);
}
users.forEach(user=> console.log(user.id, user.name));

// [3,2,1,4]
const userIds = users.map(v => v.id)
console.log("🚀 ~ userIds:", userIds)

