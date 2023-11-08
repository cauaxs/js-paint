function setup() {
    createCanvas(600, 600);
    background("blue");
    }
  
  function draw() {
    stroke("purple");
    strokeWeight(5);
    fill("pink")
    if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
    }
  }