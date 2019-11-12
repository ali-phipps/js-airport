describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });
  it('lands a plane when sunny', function(){

    expect(airport.land(plane)).toEqual([plane]);
  });
});
