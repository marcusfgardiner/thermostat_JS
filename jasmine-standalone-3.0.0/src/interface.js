$(document).ready(function () {
  var thermostat = new Thermostat();
  $('#12345').text("Current temperature is: " + thermostat.temperature);
    $('.2').text("Power saving switch is on: " + thermostat.powerSaving);
  $( '#temperature-up' ).click(function() {
    thermostat.upTempOne();
    $('#12345').text("Current temperature is: " + thermostat.temperature);
  });

  $( '#temperature-down' ).click(function() {
    thermostat.downTempOne();
    $('#12345').text("Current temperature is: " + thermostat.temperature);
  });

  $( '#temperature-reset' ).click(function() {
    thermostat.resetTemperature();
    $('#12345').text("Current temperature is: " + thermostat.temperature);
  });

  $( '#power-saving-switch' ).click(function() {
    thermostat._powerSavingSwitch();
    $('#12345').text("Current temperature is: " + thermostat.temperature);
    $('.2').text("Power saving switch is on: " + thermostat.powerSaving);
  });

});

// powerSaveDisplay = function() {
//   return thermostat.powerSaving ? 'On' : 'Off';
// };
