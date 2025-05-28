import {lessons} from './data.js';





const dat=JSON.parse(lessons);

function readJson(json){



    json.forEach((item)=>{
        console.log(item.name);
    })
}

readJson(dat);
// console.log(lesson.name);