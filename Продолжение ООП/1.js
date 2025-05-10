const VacuumCleaner={
    Model:"vacuum cleaner",
    counterOfStarts:0,
    isFull:false,
    isObstacle:false,

    startCleaning:function(){
        this.counterOfStarts++;
        console.log("I am the method of VacuumCleaner");
        console.log('I am cleaning... I have been started: ',this.counterOfStarts,'times');
    },

    goCharge:function(){
        console.log("I am the method of VacuumCleaner");
        console.log('I am going to charge...');
    }
}