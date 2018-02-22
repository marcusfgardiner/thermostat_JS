describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('temperature is increased by provided value', function(){
    thermostat.up_temp(10)
    expect(thermostat.temperature).toEqual(30)
  });

  it('temperature is decreased by provided value', function(){
    thermostat.down_temp(5)
    expect(thermostat.temperature).toEqual(15)
  });

  it('raises an error if temperature is going to fall below 10 degrees', function(){
    expect(function(){thermostat.down_temp(11)}).toThrow('Temperature is too low!')
  });
});
