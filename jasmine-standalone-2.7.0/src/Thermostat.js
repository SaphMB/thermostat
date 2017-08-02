'use strict';

function Thermostat () {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PS_MODE_ON = 25;
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.down = function() {
  if (this.getTemp() === this.MINIMUM_TEMP) {
    return }
  this.temp -= 1;
};

Thermostat.prototype.up = function() {
  if (this.getTemp() === this.MAX_TEMP_PS_MODE_ON) {
    return }
  this.temp += 1;
};
