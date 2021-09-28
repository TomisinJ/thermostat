class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
    this.powerSaveMode = true;
  }

  up(num) {
    const psmMaxTemp = 25;
    const maxTemp = 32;
    if (this.powerSaveMode === false && this.temperature + num > maxTemp) {
      return 'Maximum temperature reached';
    } else if (this.powerSaveMode === true && this.temperature + num > psmMaxTemp) {
    return 'In Power Save Mode, max temp exceeded';
    } else {
    return this.temperature += num 
  }}

  down(num) {
    const minTemp = 10;
    if (this.temperature - num >= minTemp) {
      return this.temperature -= num;
    } else {
      return 'Minimum temperature reached';
    }}
}



let thermostat = new Thermostat

console.log(thermostat.up(15))
// console.log(thermostat.down(14))
