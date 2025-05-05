const student={
    firstName:"Ivan",
    age:21,
}

const getYearOfBith=(currentYear)=>{
    return currentYear-student.age;
}

console.log(getYearOfBith(2022));
student.age=25;
console.log(getYearOfBith(2021));

const getYearOfBithPureVersion=(age,currentYear)=>{
    return age-currentYear;
}

const addField=(object, key,value)=>{
    object[key]=value;
    return object;
}

const updatedStudent=addField(student,'lastName','Belkin');
console.log(student);
console.log(updatedStudent);

const addFieldPureVersion=(object,key,value)=>{
    return{
        ...object,
        [key]:value
    }
}

const updatedStudentPure=addFieldPureVersion(student,'practiceTime',148);

console.log(student);
console.log(updatedStudentPure);