
var logo, logoImage ;
var gameState = "menuScreen";
var menuIcon, menuImage;
var contactImage, contactUs;
var gallery;
var video , videoImage;
var phoneImage, phoneNumber;
var phoneNo2, numberImage;
var galleryImage;
var pic1, pic1Image;
var pic2, pic2Image;
var pic3, pic3Image;
var pic4, pic4Image;
var pic5, pic5Image;
var picGroup;
var nextButton, nextImage;
var dummy, dummyImage;
var address, addressImage;
var gameState;

function preload()
{
 logoImage = loadImage("images/LOGO.jpeg");
 menuImage = loadImage("images/menu bar icon.png");
 contactImage = loadImage("images/contactUs.png");
 phoneImage = loadImage("images/phoneNo 1.png");
 numberImage = loadImage("images/phoneNo 2.png");
 galleryImage = loadImage("images/gallery.png");
 pic1Image = loadImage("images/pic1.jpeg");
 pic2Image = loadImage("images/pic2.jpeg");
 pic3Image = loadImage("images/pic3.jpeg");
 pic4Image = loadImage("images/pic4.jpeg");
 pic5Image = loadImage("images/pic5.jpeg");
 nextImage = loadImage("images/download.png");
 dummyImage = loadImage("images/dummy.jpeg");
 addressImage = loadImage("images/addres.png");
}

function setup() {

	createCanvas(displayWidth-10, displayHeight-10);



	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
	logo = createSprite(250, 300, 700, 600);
	logo.addImage("logo" ,logoImage);
	logo.scale = 0.5;

	menuIcon = createSprite(displayWidth-200, 45,10, 10);
	menuIcon.addImage("icon", menuImage);
	menuImage.scale = 0.1;

	gameState = "contactUS";
	// gameState = "mainMenu"

	nextButton = createSprite(450, height-200, 100, 50);
	nextButton.addImage("next", nextImage);
	nextButton.scale = 0.5;
	nextButton.visible = false;

	phoneNumber = createSprite(width/2.2, 280)
	phoneNumber.addImage("phone", phoneImage);
	phoneNumber.scale = 0.5;
	phoneNumber.visible = false;

	phoneNo2 = createSprite(width/2.2, 380);
	phoneNo2.addImage("phone",numberImage);
	phoneNo2.scale = 0.5;
	phoneNo2.visible = false;

	 dummy = createSprite(260, 100, 20, 40);
	 dummy.addImage("icon", dummyImage);
	 dummy.scale = 0.2;
	 dummy.visible = false;

	 address = createSprite(width/2.2, 460);
	 address.addImage("adress", addressImage);
	 address.scale = 0.6;
	  address.visible = false;

	picGroup = new Group();

  
}


function draw() {
  
  background(250, 250, 250);
  
//   if(keyDown("space")){
//     logo.visible = false;
// 	gameState = "menuScreen";
//   }

  if(mouseIsOver(menuIcon) || touches.length > 0){
	//console.log("hiii ");
	mainMenu();
	touches = [];
  }

//   if (gameState === "contactUS"){
// 		gameState = "contactUS";
//   }

  if(mousePressedOver(contactUs) || touches.length > 0){
	touches = [];
	   console.log(touches.length);
	   console.log(touches);
	   logo.visible = false;
	   displayPhoneNumber();
	   gameState === "contactUS";
	   nextButton.visible = false;
	   phoneNumber.visible = true;
	   phoneNo2.visible = true;
	   dummy.visible = true;
	   address.visible = true;

  }

  if(mousePressedOver(gallery) || touches.length > 0){
	touches = [];
	logo.visible = false;
	nextButton.visible = true;
	hideContactDetails();
	phoneNumber.visible = false;
	phoneNo2.visible = false;
	dummy.visible = false;
	address.visible = false;

}
  

if(mousePressedOver(nextButton) || touches.length > 0){
	touches = [];
	spawnImages();
}

  drawSprites();
 
}

function mainMenu(){

	var pos = 130;
	contactUs = createSprite(width-200, pos );
	contactUs.addImage("contact", contactImage);
	contactUs.scale = 0.6;

	gallery = createSprite(width-200, pos+60 );
	gallery.addImage("gallery", galleryImage);
	gallery.scale = 0.7;

    // video = createSprite(width-100, pos+120 );
	// video.addImage("video", videoImage);
	// video.scale = 0.6;
}

function displayPhoneNumber(){
	if(gameState === "contactUS"){

	}

}

function spawnImages(){

	// if(frameCount % 5 === 0){
	 pic1 = createSprite(width/2, height/2);
	 //pic1.addImage("pic1", pic1Image);
	 
	 pic1.velocityX = -3;



	 var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: pic1.addImage(pic1Image);
              break;
      case 2: pic1.addImage(pic2Image);
              break;
      case 3: pic1.addImage(pic3Image);
              break;
      case 4: pic1.addImage(pic4Image);
              break;
      case 5: pic1.addImage(pic5Image);
              break;
      default: break;
	}
	 pic1.scale = 0.3;
	 picGroup.add(pic1);
	 
	// }
}

function hideContactDetails(){
	
}
