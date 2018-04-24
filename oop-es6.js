const _move = Symbol();
const _size = Symbol();

class Circle {

  constructor (radius, size) {
    this.radius = radius;
    this[_size] = size;
  }

  [_move] () {
    console.log('move');
  }

  getSize () {
    return this[_size];
  }

  // Instance method.
  draw () {
    console.log('draw');
  }

  // Static method.
  static parse (str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

let c = new Circle(10, 5);