function Thermostat () {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.down = function() {
  this.temp -= 1;
};

Thermostat.prototype.up = function() {
  this.temp += 1;
};
