'use strict';

function Thermostat () {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PS_MODE_ON = 25;
  this.MAX_TEMP_PS_MODE_OFF = 32;
  this.temp = this.DEFAULT_TEMP;
  this.powerSavingIsOn = true;
  var maxTemp;
  this._setMaxTemp();
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
  console.log(this.maxTemp);
  if (this.getTemp() === this.maxTemp) {
    return }
  this.temp += 1;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingIsOn = false;
  this._setMaxTemp();
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingIsOn = true;
  this._setMaxTemp();
  this.temp -= this.temp % this.maxTemp;
};

// Private implementation
Thermostat.prototype._setMaxTemp = function() {
  this.maxTemp = this.powerSavingIsOn ? this.MAX_TEMP_PS_MODE_ON : this.MAX_TEMP_PS_MODE_OFF;
};
