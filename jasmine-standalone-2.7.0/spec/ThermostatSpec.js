describe ('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when is is initialized', function() {
    it('should have a temperature is 20 degreese', function () {
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

  describe('when the user adjusts the temperature', function(){
    it('should decrease the temperature by 1º',function(){
      initialTemp = thermostat.getTemp();
      thermostat.down();
      expect(thermostat.getTemp()).toEqual(initialTemp - 1);
    });

    it('should increase the temperature by 1º',function(){
      initialTemp = thermostat.getTemp();
      thermostat.up();
      expect(thermostat.getTemp()).toEqual(initialTemp + 1);
    });

  });
});
