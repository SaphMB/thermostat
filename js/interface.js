window.onload = function () {
  alert("welcome");
};

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
    $('#energyMode').text("Energy saving - On");
  } else {
    $('#energyMode').text("Energy saving - Off");
  }
}
