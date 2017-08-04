var thermostat = new Thermostat();

$(document).ready(function() {

  $('#energyModeToggle').prop('checked', thermostat.powerSavingIsOn());
  updateEnergyUsageIndicator();
  updateTempIndicator();
  updateModeIndicator();

  $("input").on("click", function() {
    changeEnergyMode();
    updateModeIndicator();
    updateTempIndicator();
  });

  $('#temperature-up').click(function (){
    thermostat.up();
    updateEnergyUsageIndicator();
    updateTempIndicator();
  });

  $('#temperature-down').click(function (){
    thermostat.down();
    updateEnergyUsageIndicator();
    updateTempIndicator();
  });

  $('#reset').click(function (){
    thermostat.reset();
    updateEnergyUsageIndicator();
    updateTempIndicator();
  });

  function updateEnergyUsageIndicator(){
    $('#powerUsage').text(thermostat.energyUsage());
  }

  function updateTempIndicator() {
    $('#temperature').text(thermostat.getTemp() + " degrees");
  }

  function changeEnergyMode(){
    if($("#energyModeToggle").prop("checked")) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();
    }
  }

  function updateModeIndicator () {
    if (thermostat.powerSavingIsOn()) {
      $('#energyMode').text("Energy saving mode - On");
    } else {
      $('#energyMode').text("Energy saving mode - Off");
    }
  }

  $('#citySearch').click(function() {
    var currentCity = $('#city').val();
    var requestString = "http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&temp&APPID=515ecc49170f16c2dfa8b237a834e1fe&units=metric";
    $.get(requestString, function(weatherResponse)  {
    $("#localWeather").text("Weather in " + currentCity + ": " + weatherResponse.main.temp + " degrees");
    });
  });


});
