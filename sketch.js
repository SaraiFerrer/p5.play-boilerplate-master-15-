var fixedRect, movingRect;

function setup(){
  //Dimensión de videojuego
  createCanvas(1200,800);
  fixedRect = createSprite (200,200,50,80);
  fixedRect.shapeColor="pink";
  movingRect = createSprite (400,200,80,30);
  movingRect.shapeColor="pink";
}

function draw(){
  background("#3399FF");
  movingRect.x= World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    ){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink";
  }
  drawSprites();
}