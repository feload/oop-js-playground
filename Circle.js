const _radius = new WeakMap();

export class Circle {
  constructor (radius) {
    _radius.set(this, radius);
  }

  draw () {
    console.log('Draw circle', _radius.get(this));
  }
}

// Comment out to support commonJS modules.
// module.exports = Circle;