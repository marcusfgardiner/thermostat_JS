
$(document).ready(function () {   
  var thermostat = new Thermostat();
  // document.getElementById("12345").innerHTML = thermostat.getCurrentTemperature();
  $('#12345').text("Current temperature is: " + thermostat.temperature);
  $( '#temperature-up' ).click(function() {
    thermostat.upTempOne();
    $('#12345').text("Current temperature is: " + thermostat.temperature);
    
  });
});

