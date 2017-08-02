'use strict';

describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when is is initialized', function() {
    it('should have a temperature of 20º', function () {
      expect(thermostat.getTemp()).toEqual(20);
    });

    it('shoudl be in power saving mode', function () {
      expect(thermostat.powerSavingIsOn()).toEqual(true);
    });

  });

  describe('when the user adjusts the temperature', function(){
    it('should decrease the temperature by 1º',function(){
      var initialTemp = thermostat.getTemp();
      thermostat.down();
      expect(thermostat.getTemp()).toEqual(initialTemp - 1);
    });

    it('should increase the temperature by 1º',function(){
      var initialTemp = thermostat.getTemp();
      thermostat.up();
      expect(thermostat.getTemp()).toEqual(initialTemp + 1);
    });

    it('has a minimum temperature of 10º', function() {
      for(var i = 1; i < 40; i++) {
        thermostat.down();
      };
      expect(thermostat.getTemp()).toEqual(10);
    });

    it('has a maximum temperature of 25º when in power-saving mode', function() {
      for(var i = 1; i < 40; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemp()).toEqual(25);
    });

    it('has a maximum temperature of 32º when not in power-saving mode', function() {
      thermostat.powerSavingOff();
      for(var i = 1; i < 40; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemp()).toEqual(32);
    });

    it('temperature stays within range acoording to the power-saving settings', function(){
      thermostat.powerSavingOff();
      for(var i = 1; i < 40; i++) {
        thermostat.up();
      };
      thermostat.powerSavingOn();
      expect(thermostat.getTemp()).toEqual(25);
    });

    it('can be reset to 20º', function() {
      thermostat.powerSavingOff();
      for(var i = 1; i < 40; i++) {
        thermostat.up();
      };
      thermostat.reset();
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('when the user asks about energy usage', function() {

    it('reports low-usage when below 18º', function () {
      while (thermostat.getTemp() >= 18 ) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('reports medium-usage when below 25º', function () {
      while (thermostat.getTemp() > 25 ) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('reports low-usage in below 18º', function () {
      while (thermostat.getTemp() < 25 ) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

  });

});
