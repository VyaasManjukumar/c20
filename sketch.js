var fixedRect;
var movingRect;
var banana;

function setup() {

  createCanvas(800,400);

  fixedRect = createSprite(500, 200, 50, 100);
  fixedRect.shapeColor = "black";
  fixedRect.debug = true;

  movingRect =  createSprite(100,200,100,50);
  movingRect.shapeColor = "black";
  movingRect.debug = true;
}

function draw() {
  background("lightblue"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  console.log(fixedRect.x -  movingRect.x)


  if(fixedRect.x -  movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.x -  fixedRect.x < movingRect.width/2+fixedRect.width/2 &&

    
    fixedRect.y -  movingRect.y < movingRect.height/2+fixedRect.height/2 &&
    movingRect.y -  fixedRect.y < movingRect.height/2+fixedRect.height/2
    ){

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }

  else {
    fixedRect.shapeColor = "black";
    movingRect.shapeColor = "black";
  }
  drawSprites();
}