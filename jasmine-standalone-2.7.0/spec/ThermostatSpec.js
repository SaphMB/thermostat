describe ('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when is is initialized', function() {
    it('should have a temperature is 20 degreese', function () {
      expect(thermostat.getTemp()).toEqual(20);
    });
  });

});
