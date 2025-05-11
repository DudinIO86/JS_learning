const student={
    name:"Slava",
    surname:"Belkin",
    age:20,
    practice:{
        place:"IKYG",
        hours:47,
    }
}
const s=JSON.stringify(student,null,4);

console.log(s);

const s2=JSON.parse(s);
console.log(s2);

