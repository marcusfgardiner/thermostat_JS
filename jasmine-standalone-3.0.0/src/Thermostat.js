var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.up_temp = function(degrees){
  this.temperature += degrees;
};

Thermostat.prototype.down_temp = function (degrees) {
  if((this.temperature -= degrees) < 10) throw 'Temperature is too low!';
};
