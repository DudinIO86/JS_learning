const studentsGroup1PracticeTime=[
    {
        firstName:"Ivanov",
        practiceTime:56
    },
    {
        firstName:"Petrov",
        practiceTime:560
    },
    {
        firstName:"Sidorov",
        practiceTime:135
    }
]

const studentsGroup2PracticeTime=[
    {
        firstName:"Sena",
        practiceTime:5
    },
    {
        firstName:"Kutr",
        practiceTime:56
    },
    {
        firstName:"Sid",
        practiceTime:13
    }
]

function findMax(){
    const values=arguments;
    let maxValue=-Infinity;

    for(let index=0;index<values.length;index++){
        if(values[index]>maxValue) maxValue=values[index];
    }
    return maxValue;
}

const Group1PracticeTime=studentsGroup1PracticeTime.map((students)=>students.practiceTime);
console.log(Group1PracticeTime);
const Group2PracticeTime=studentsGroup2PracticeTime.map((students)=>students.practiceTime);
console.log(Group2PracticeTime);

const maxTimeFromGroup1=findMax(...Group1PracticeTime);
console.log(maxTimeFromGroup1);
const maxTimeFromGroup2=findMax(...Group2PracticeTime);
console.log(maxTimeFromGroup2);

const botGroupTime=[...Group1PracticeTime,...Group2PracticeTime];

const maxTimeBothGroups=findMax(...botGroupTime);
console.log(maxTimeBothGroups);