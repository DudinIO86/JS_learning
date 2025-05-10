function Samba(serialNumber){
    this.serialNumber=serialNumber;
    this.model="Samba-1";
    this.power=250;
    this.batterySize=2500;
    this.workTime=50;

    this.__proto__=DancingSeries;
}

const Samba1=new Samba(121232);
console.log(Samba1.serialNumber);
console.log(Samba1.startCleaning());

const robots=[];

for (let index = 0; index < 10; index++) {
    robots.push(new Samba(index));
}

console.log(robots[3].serialNumber);
console.log(robots[7].serialNumber);

const Samba2=Object.create(null);

console.log(Samba2.toString());