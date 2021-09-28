class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
    this.powerSaveMode = true;
  }

  up(num) {
    return this.temperature += num 
  }

  down(num) {
    const minTemp = 10;
    if (this.temperature - num >= minTemp) {
      return this.temperature -= num;
    } else {
      return 'Minimum temperature reached';
    }}
}



let thermostat = new Thermostat

// console.log(thermostat.up(4))
console.log(thermostat.down(14))
