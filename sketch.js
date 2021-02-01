function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  character = new Character(300, 200);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  character.display();
}