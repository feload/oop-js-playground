
//---

function extend(Child, Parent) {
  // Implements object inheritance by updating an object's prototype. Warning: This will override object's constructor.
  Child.prototype = Object.create(Parent.prototype);
  // We set Circle's constructor because it was overriden by inheriting from Shape.
  Child.prototype.constructor = Child;
}

//--- Shape

function Shape (color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

//--- Circle

function Circle (radius, color) {
  // This is how you call the super constructor.
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log('draw');
}

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log('duplicate Circle');
}

//-- Square

function Square (size) {
  this.size = size;
}
extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log('duplicate square');
}

const shapes = [
  new Circle(),
  new Square()
];

for (let shape of shapes)
  shape.duplicate();

const s = new Shape();
const c = new Circle(10, "red");
const sq = new Square(2);