function Airport() {
  this.planes = [];
}
Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  answer = plane.test_method();
  if (answer === true) {
    return this.planes;
  }
  else {
    return false;
  }

};
