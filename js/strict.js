'use strict'

function f(a){
   console.log('global.f = ', a);
}
{
    f(100);
    function f(a){
        console.log('global.f = ', a);
    }
}
f(200);