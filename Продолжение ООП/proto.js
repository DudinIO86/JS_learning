const DancingSeries = {
  model: "dancing series",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,

  isUVLampOn: false,

  switchUVLamp: function () {
    console.log("I am the method of VacuumCleaner");
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not wortking"}.`);
  },

  __proto__:VacuumCleaner,
};

console.log(DancingSeries.startCleaning());
