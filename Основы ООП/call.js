console.log(Roomba.model);
console.log(Roomba.isFull);

Roomba.startCleaning.call(Roomba);

const notARobot={
    counterOfStarts:10,
};

Roomba.startCleaning.call(notARobot);

const notARobot2={
    counterOfStarts:10,
};

// Roomba.startCleaning.apply(notARobot2,[arg1,arg2,arg3]);

setTimeout(Roomba.startCleaning.bind(Roomba),1000);