function extend (Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.constructor = Child;
}

function HTMLElement () { }
HTMLElement.prototype.focus = function () {
  console.log('focused');
}

function HTMLSelectElement (elements) {
  this.elements = elements;
}

extend(HTMLSelectElement, HTMLElement);

HTMLSelectElement.prototype.makeList = function () {
  return `${this.elements}`;
}

const s = new HTMLSelectElement([1,2,3]);