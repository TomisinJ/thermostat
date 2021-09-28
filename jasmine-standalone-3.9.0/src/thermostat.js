class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
  }
  up(num) {
    return this.temperature += num 
  }

  down(num) {
    return this.temperature -= num
  }
}

let thermostat = new Thermostat

// console.log(thermostat.up(4))
console.log(thermostat.down(4))
