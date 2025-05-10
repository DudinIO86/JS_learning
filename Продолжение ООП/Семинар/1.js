const MusicSeries={
    model:"music series",
    power:200,
    batterySize:2400,
    boxSize:0.4,
    workTime:45,
    startWipe(){
        console.log('I am method of Music Series');
    },
};

const Blues={
    model:"Blues",
    power:230,
    batterySize:3000,
    workTime:67,
};

Object.setPrototypeOf(Blues,MusicSeries);

function getPrototypeChain(obj){
    const prototypeChain=[];

    let currentObj=obj;

    while(currentObj!==null){
        prototypeChain.push(currentObj);
        currentObj=Object.getPrototypeOf(currentObj);
    }
    return prototypeChain;
}

const prototypeChain=getPrototypeChain(Blues);
console.log(prototypeChain);