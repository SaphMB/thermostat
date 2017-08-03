window.onload = function () {
  alert("welcome");
};

var thermostat = new Thermostat();

$(document).ready(function() {

  $('#temperature').text(thermostat.getTemp() + " degrees");

  $('#energyModeToggle').prop('checked', thermostat.powerSavingIsOn());
  updateModeIndicator();

  $("input").on("click", function() {
    if($("#energyModeToggle").prop("checked")) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();
    };
    updateModeIndicator();
  });
});

function updateModeIndicator () {
  if (thermostat.powerSavingIsOn()) {
    $('#energyMode').text("Energy saving - On");
  } else {
    $('#energyMode').text("Energy saving - Off");
  };
};
