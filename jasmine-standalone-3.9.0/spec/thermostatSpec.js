describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Up Function', () => {
    it('increases the temperature by 1', () => {
      thermostat.up(1) 
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('Down Function', () => {
    it('decreases the temperature by 1', () => {
      thermostat.down(1)
      expect(thermostat.temperature).toEqual(19);
    });

    it('Error if below 10', () => {
      expect(thermostat.down(11)).toEqual('Minimum temperature reached');
    });
});

  describe('Power Save Mode', () => {
    it('starts with Power Save Mode on', () => {
      expect(thermostat.powerSaveMode).toBe(true);
    });

    it('Power Save Mode is on, max temp is 25', () => {
      expect(thermostat.up(10)).toEqual('In Power Save Mode, max temp exceeded');
    });

    it('Power Save Mode is off, max temp is 32', () => {
      thermostat.powerSaveMode = false
      expect(thermostat.up(15)).toEqual('Maximum temperature reached');
    });

    it('Power Save Mode can be turned off', () => {
      thermostat.psmOff()
      expect(thermostat.powerSaveMode).toBe(false);
    });
  });

  describe('Reset Function', () => {
    it('thermostat can be rest to 20', () => {
      thermostat.up(5)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('Energy Usage', () => {
    it('energy usage is low usage if < 18', () => {
      thermostat.down(3)
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });

    it('energy usage is medium usage if <= 25', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });

    it('energy usage is high usage if > 25', () => {
      thermostat.psmOff()
      thermostat.up(10)
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });

  });

});
