
// WeakMaps use objects as keys.
const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle {
  constructor (radius) {

    // Alternative syntax.
    privateProps.set(this, {
      radius,
      move: () => {
      }
    });

    _radius.set(this, radius);
    _move.set(this, () => {
      console.log('move', this);
    });
  }

  // Getter
  get radius () {
    return _radius.get(this);
  }

  // Setter
  set radius (value) {
    _radius.set(this, value);
  }

  draw () {
    _move.get(this)();
    console.log('draw');
  }
}

const c = new Circle(10);