'use strict;';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // --------------------------------------------------------


  it('temperature is increased by 1', function(){
    thermostat.upTempOne();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('temperature is decreased by provided value', function(){
    thermostat.downTempOne();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('raises an error if temperature is going to fall below 10 degrees', function(){
    thermostat.temperature = 10;
    expect(function(){thermostat.downTempOne();}).toThrow('Temperature is too low!');
  });

  it('Power saving on: raises an error if temperature goes above 25 degrees', function(){
    thermostat.temperature = 25;
    expect(function(){thermostat.upTempOne();}).toThrow('Temperature is too high!');
  });

  it('Power saving on: does NOT raise an error if temperature goes above 25 and below 32 degrees', function(){
    thermostat.temperature = 25;
    thermostat._powerSavingSwitch();
    expect(function(){thermostat.upTempOne();}).not.toThrow('Temperature is too high!');
  });

  it('Power saving off: raises an error if temperature goes above 32 degrees', function(){
    thermostat.temperature = 32;
    expect(function(){thermostat.upTempOne();}).toThrow('Temperature is too high!');
  });

  // --------------------------------------------------------

  it('temperature is increased by provided value', function(){
    thermostat.upTemp(3);
    expect(thermostat.getCurrentTemperature()).toEqual(23);
  });

  it('temperature is decreased by provided value', function(){
    thermostat.downTemp(5);
    expect(thermostat.getCurrentTemperature()).toEqual(15);
  });

  it('raises an error if temperature is going to fall below 10 degrees', function(){
    expect(function(){thermostat.downTemp(11);}).toThrow('Temperature is too low!');
  });

  it('Power saving on: raises an error if temperature goes above 25 degrees', function(){
    expect(function(){thermostat.upTemp(10);}).toThrow('Temperature is too high!');
  });

  it('Power saving on: does NOT raise an error if temperature goes above 25 and below 32 degrees', function(){
    thermostat._powerSavingSwitch();
    expect(function(){thermostat.upTemp(10);}).not.toThrow('Temperature is too high!');
  });

  it('Power saving off: raises an error if temperature goes above 32 degrees', function(){
    expect(function(){thermostat.upTemp(25);}).toThrow('Temperature is too high!');
  });

  it('Resets temperature to 20 when reset function is called', function(){
    thermostat.upTemp(5);
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('returns low usage if temperature <= 18', function() {
    thermostat.downTemp(5);
    expect(thermostat.currentUsage()).toEqual('Low usage');
  });

  it('returns medium usage if temperature < 25 and > 18', function() {
    thermostat.upTemp(4);
    expect(thermostat.currentUsage()).toEqual('Medium usage');
  });

  it('returns high usage if temperature >= 25', function() {
    thermostat._powerSavingSwitch();
    thermostat.upTemp(8);
    expect(thermostat.currentUsage()).toEqual('High usage');
  });
});
