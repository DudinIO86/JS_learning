const Djaviv={
    model:"Djaviv",
    power:2100,
    baterrySize:2300,
    workTime:50,

    startCleaning:function(){
        this.counterOfStarts++;
        console.log("I am the method of Djaviv");
        console.log('I am cleaning... I have been started: ',this.counterOfStarts,'times');
    },

   __proto__:DancingSeries,

}