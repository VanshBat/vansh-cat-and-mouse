var bgImage;
var cat;

function preload() {
    //load the images here
    bgImage = loadImage("image/garden.png");
    catImage1 = loadAnimation("image/cat1.png");
    mouseImage1 = loadAnimation("image/mouse1.png");
    catImage2 = loadAnimation("image/cat2.png");
    mouseImage2 = loadAnimation("image/mouse2.png");
    catImage3 = loadAnimation("image/cat3.png");
    mouseImage3 = loadAnimation("image/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

   
   
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       
   }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === RIGHT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseImage2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
   }   
  
   if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseImage2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;



    }

}
