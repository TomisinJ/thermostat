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
  });
});
