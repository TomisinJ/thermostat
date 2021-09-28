describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20', () => {
    expect(thermostat.temperature).toEqual(20);
  });
});