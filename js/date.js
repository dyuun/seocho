//var moment = require('moment'); // CJS 방식

import moment from 'moment'; //ESM 방식

const locale = 'ko';
//moment.locale('ko');
//moment.locale('us');//영어로 나오게
moment.locale(locale);

const d = new Date();
console.log("🚀 >> d:", d.toLocaleString);
const m = moment();
console.log("🚀 >> m: ", m.format('LLL'));
console.log("🚀 >> m: ", m.format('dddd'));
console.log("🚀 >> m: ", m.format('YYYY-MM-DD(ddd) hh:mm:ss')); //2024-06-04(화) 11:34:23

const writtenDate = moment('2024-04-30');//작성된 시간
console.log("🚀 >> m.fromNow(): ", writtenDate.fromNow());//지금으로부터 몇달 전인지
