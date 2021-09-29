class Thermostat {
  constructor(temperature, powerSaveMode) {
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

  psmOff() {
    if (this.powerSaveMode === true) {
      return this.powerSaveMode = false;   
    } else if (this.powerSaveMode === false) {
      return 'Power save Mode is already off ';
    }}
    
  reset() {
    return this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    }
    if (this.temperature <= 25) {
      return 'medium-usage';
    }
    if (this.temperature > 25) {
      return 'high-usage';
    }
  }
}

let thermostat = new Thermostat

console.log(thermostat.up(15))
// console.log(thermostat.down(5))
// console.log(thermostat.down(14))
console.log(thermostat.psmOff())
console.log(thermostat.energyUsage())