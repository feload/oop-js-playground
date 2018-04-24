const _stack = new WeakMap();

class Stack {
  constructor () {
    _stack.set(this, []);
  }

  push (value) {
    _stack.get(this).push(value);
  }

  pop () {
    const stack = _stack.get(this);
    if(stack.length) return stack.splice(-1)[0];
    return null;
  }

  inspect () {
    return _stack.get(this).join(', ');
  }

  get count () {
    return _stack.get(this).length;
  }
}

const s = new Stack();