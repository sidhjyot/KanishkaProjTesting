
var logo, logoImage ;
var gameState = "menuScreen";
var menuIcon, menuImage;
var contactImage, contactUs;
var gallery;
var video , videoImage;
var phoneImage, phoneNumber;
var phoneNo2, numberImage;
var galleryImage;

function preload()
{
 logoImage = loadImage("images/LOGO.jpeg");
 menuImage = loadImage("images/menu bar icon.png");
 contactImage = loadImage("images/contactUs.png");
 phoneImage = loadImage("images/phoneNo 1.png");
 numberImage = loadImage("images/phoneNo 2.png");
 galleryImage = loadImage("images/gallery.png");
 videoImage = loadImage("images/video.png");
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
  
  background(250, 250, 250);
  
//   if(keyDown("space")){
//     logo.visible = false;
// 	gameState = "menuScreen";
//   }

  if(mouseIsOver(menuIcon)){
	//console.log("hiii ");
	mainMenu();
  }

  if(mousePressedOver(contactUs)){
	  logo.visible = false;
	  displayPhoneNumber();
  }
  drawSprites();
 
}

function mainMenu(){

	var pos = 130;
	contactUs = createSprite(width-100, pos );
	contactUs.addImage("contact", contactImage);
	contactUs.scale = 0.5;

	gallery = createSprite(width-100, pos+50 );
	gallery.addImage("gallery", galleryImage);
	gallery.scale = 0.8;

    video = createSprite(width-100, pos+100 );
	video.addImage("video", videoImage);
	video.scale = 0.8;
}

function displayPhoneNumber(){

	phoneNumber = createSprite(width/2.2 , height/2);
	phoneNumber.addImage("phone", phoneImage);
	phoneNumber.scale = 0.5;

	phoneNo2 = createSprite(width/2.2, 380);
	phoneNo2.addImage("phone",numberImage);
	phoneNo2.scale = 0.5;
}

