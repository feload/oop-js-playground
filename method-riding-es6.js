class Shape {

  constructor (color) {
    this.color = color;
  }

  move () {
    console.log('move');
  }

  draw () {
    console.log('draw shape');
  }

}

class Circle extends Shape {

  constructor (color) {
    super(color);
  }

  draw () {
    super.draw();
    console.log('draw circle');
  }
}

const c = new Circle("red");