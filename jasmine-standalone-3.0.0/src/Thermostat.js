var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MAX_TEMP_POWER_SAVING_OFF = 25;
  this.MAX_TEMP_POWER_SAVING_ON = 32;
  this.MIN_TEMP = 10;
  this.LOWER_ENERGY_USAGE = 18;
  this.MEDIUM_ENERGY_USAGE = 25;
  this.RESET_TEMPERATURE = 20;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.upTempOne = function(){
  if(this.powerSaving) {
      if(this.temperature >= this.MAX_TEMP_POWER_SAVING_OFF) throw 'Temperature is too high!';
      this.temperature ++;
  }
  else {
    if(this.temperature >= this.MAX_TEMP_POWER_SAVING_ON) throw 'Temperature is too high!';
      this.temperature ++;
  }
};

Thermostat.prototype.downTempOne = function() {
  if(this.temperature <= this.MIN_TEMP) throw 'Temperature is too low!';
      this.temperature --;
};


Thermostat.prototype.upTemp = function(degrees){
  if(this.powerSaving) {
      if((this.temperature += degrees) > this.MAX_TEMP_POWER_SAVING_OFF) throw 'Temperature is too high!';
  }
  else {
    if((this.temperature += degrees) > this.MAX_TEMP_POWER_SAVING_ON) throw 'Temperature is too high!';
  }
};

Thermostat.prototype.downTemp = function(degrees) {
  if((this.temperature -= degrees) < this.MIN_TEMP) throw 'Temperature is too low!';
};

Thermostat.prototype._powerSavingSwitch = function() {
  this.powerSaving = !(this.powerSaving);
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.RESET_TEMPERATURE;
};

Thermostat.prototype.currentUsage = function() {
  if(this.temperature <= this.LOWER_ENERGY_USAGE) {
    return "Low usage";
  }
  else if(this.temperature < this.MEDIUM_ENERGY_USAGE) {
    return "Medium usage";
  }
  else {
    return "High usage";
  }
};
