console.log(Roomba.model);
console.log(Roomba.isFull);

setTimeout(function(){Roomba.startCleaning()},1000);

Roomba.isUVLampOn=true;

setTimeout(function(){Roomba.switchUVLamp()},2000);
setTimeout(function(){Roomba.goCharge()},3000);