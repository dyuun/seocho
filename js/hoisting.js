console.log('i=', i);
var i = 1;

console.log('x=', x);
var x = 1;

function getUserName(user){
    return user.name;
}

var hong = {id:1, name: 'Hong'};
getUserName(hong);

getUserName({id:1, name: 'Hong'});