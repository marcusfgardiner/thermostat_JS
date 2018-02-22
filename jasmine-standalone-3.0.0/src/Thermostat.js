var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up_temp = function(degrees){
  if(this.powerSaving) {
      if((this.temperature += degrees) > 25) throw 'Temperature is too high!';
  }
  else {
    if((this.temperature += degrees) > 32) throw 'Temperature is too high!';
  }
};

Thermostat.prototype.down_temp = function (degrees) {
  if((this.temperature -= degrees) < 10) throw 'Temperature is too low!';
};

Thermostat.prototype._powerSavingSwitch = function() {
  this.powerSaving = !(this.powerSaving);
};

Thermostat.prototype.reset_temperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.currentUsage = function() {
  if(this.temperature <= 18) {
    return "Low usage";
  }
  else if(this.temperature < 25) {
    return "Medium usage";
  }
  else {
    return "High usage";
  }
};
