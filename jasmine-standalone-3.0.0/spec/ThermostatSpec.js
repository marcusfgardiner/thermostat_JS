describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('temperature is increased by provided value', function(){
    thermostat.up_temp(3);
    expect(thermostat.temperature).toEqual(23);
  });

  it('temperature is decreased by provided value', function(){
    thermostat.down_temp(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('raises an error if temperature is going to fall below 10 degrees', function(){
    expect(function(){thermostat.down_temp(11);}).toThrow('Temperature is too low!');
  });

  it('Power saving on: raises an error if temperature goes above 25 degrees', function(){
    expect(function(){thermostat.up_temp(10);}).toThrow('Temperature is too high!');
  });

  it('Power saving on: does NOT raise an error if temperature goes above 25 and below 32 degrees', function(){
    thermostat._powerSavingSwitch();
    expect(function(){thermostat.up_temp(10);}).not.toThrow('Temperature is too high!');
  });

  it('Power saving off: raises an error if temperature goes above 32 degrees', function(){
    expect(function(){thermostat.up_temp(25);}).toThrow('Temperature is too high!');
  });

  it('Resets temperature to 20 when reset function is called', function(){
    thermostat.up_temp(5);
    thermostat.reset_temperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns low usage if temperate < 18', function() {
    thermostat.down_temp(5);
    expect(thermostat.currentUsage).toEqual('Low usage');
  });
});
