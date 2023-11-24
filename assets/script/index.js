'use strict';
import {select, getElement, onEvent} from "./utilty.js";


let shape_color = select('.shape-color');
let shape_place = select('.shape-place');

class Shape {
  constructor(name, color, id) {
    this._name = name;
    this._color = color;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  get id() {
    return this._id;
  }

  getInfo() {
    return `Shape: ${this.name}, Color: ${this.color}`;
  }
}

const shapes = [];

function createShape() {
  if (shapes.length <= 34) {
  const shapeType = getElement('shapeSelector').value;
  const color = getElement('colorSelector').value;
  const newShape = new Shape(shapeType, color, shapes.length + 1);
  shapes.push(newShape);
  displayShape(newShape);
  }
  else{
    shape_color.textContent = 'Maximum number of shapes reached. Cannot create more'

  }
}

function displayShape(shape) {
  const shapesContainer =getElement('shapesContainer');
  const shapeDiv = document.createElement('div');
  shapeDiv.className = `shape ${shape.name}`;
  shapeDiv.style.backgroundColor = shape.color;
  shapeDiv.onclick = () => {
    shape_color.textContent = shape.getInfo();
    shape_place.textContent = `Unit: ${shape.id}`;
  };
  shapesContainer.appendChild(shapeDiv);
}

getElement('createButton').addEventListener('click', createShape);
// Add this function to your existing JavaScript
function clearShapes() {
  const shapesContainer = document.getElementById('shapesContainer');
  shapesContainer.innerHTML = ''; // This clears all the content within the shapes container
  
}

document.getElementById('clearButton').addEventListener('click', function() {
  // Reload the page
  location.reload();
});