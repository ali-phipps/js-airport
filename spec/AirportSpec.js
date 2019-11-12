describe("Airport", function() {
  var heathrow;
  var plane;

  beforeEach(function() {
    heathrow = new Airport();
    plane = jasmine.createSpyObj("Plane", { 'test_method': true });
  });
  
  it('lands a plane when sunny', function(){
    expect(heathrow.land(plane)).toEqual([plane]);
    expect(plane.test_method).toHaveBeenCalled();
  });
});
