'use strict';

function Thermostat () {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PS_MODE_ON = 25;
  this.MAX_TEMP_PS_MODE_OFF = 32;
  this.temp = this.DEFAULT_TEMP;
  this.powerSaving = true;
  this.LOW_USAGE_CAP = 18;
  this.MED_USAGE_CAP = 25;
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
  if (this.getTemp() === this.maxTemp) {
    return }
  this.temp += 1;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  this._setMaxTemp();
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this._setMaxTemp();
  this.temp -= this.temp % this.maxTemp;
};

Thermostat.prototype.powerSavingIsOn = function() {
  return this.powerSaving;
};

Thermostat.prototype.reset = function() {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.getTemp() < this.LOW_USAGE_CAP) {
    return 'low-usage';
  } else if (this.getTemp() < this.MED_USAGE_CAP) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  };
};


// Private implementation
Thermostat.prototype._setMaxTemp = function() {
  this.maxTemp = this.powerSaving ? this.MAX_TEMP_PS_MODE_ON : this.MAX_TEMP_PS_MODE_OFF;
};
