
var logo, logoImage ;
var gameState = "menuScreen";
var menuIcon, menuImage;

function preload()
{
 logoImage = loadImage("images/LOGO.jpeg")
 menuImage = loadImage("images/menu bar icon.png")
}

function setup() {
	createCanvas(650, 650);


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
	logo = createSprite(250, 300, 700, 600);
	logo.addImage("logo" ,logoImage);
	logo.scale = 0.5;

	menuIcon = createSprite(620, 45,10, 10);
	menuIcon.addImage("icon", menuImage);
	menuImage.scale = 0.1;

  
}


function draw() {
  
  background(255, 255, 255);
  
  if(keyDown("space")){
    logo.visible = false;
	gameState = "menuScreen";
  }

  drawSprites();
 
}



