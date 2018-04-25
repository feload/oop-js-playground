const _radius = new WeakMap();

class Circle {
  constructor (radius) {
    _radius.set(this, radius);
  }

  draw () {
    console.log('Draw circle', _radius.get(this));
  }
}

module.exports = Circle;