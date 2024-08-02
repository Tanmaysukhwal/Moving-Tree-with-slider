let lengthSlider, angleSlider;

function setup() {
  createCanvas(800, 800);
  background(0);
  
  // Create sliders for the initial branch length and angle
  lengthSlider = createSlider(10, 200, 150);
  lengthSlider.position(10, 10);
  
  angleSlider = createSlider(0, TWO_PI, PI / 0.01, 0.01);
  angleSlider.position(10, 40);
  
}

function draw() {
  background(0);
  stroke(186, 184, 108);
  
  // Get the values from the sliders
  let len = lengthSlider.value();
  let angle = angleSlider.value();
  
  // Starting point of the tree
  translate(width / 2, height);
  
  // Draw the tree
  branch(len, angle);
}

function branch(len, angle) {
  // Draw the current branch
  line(0, 0, 0, -len);
  translate(0, -len);
  
  // If the length is above a certain threshold, continue branching
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.68, angle);
    pop();
    
    push();
    rotate(-angle);
    branch(len * 0.68, angle);
    pop();
  }
  
  // Reset the transformation matrix
  translate(0, len);
}

function mouseMoved() {
  redraw();
}
