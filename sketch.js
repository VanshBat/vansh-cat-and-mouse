var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("image/garden.png");
    catImg1 = loadAnimation("image/cat1.png");
    mouseImg1 = loadAnimation("image/mouse1.png");
    catImg2 = loadAnimation("image/cat2.png");
    mouseImg2 = loadAnimation("image/mouse2.png");
    catImg3 = loadAnimation("image/cat3.png");
    mouseImg3 = loadAnimation("image/mouse3.png");
    catImg4 = loadAnimation("image/cat4.png");
    mouseImg4 = loadAnimation("image/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

   
   
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       
   }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === RIGHT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
   }   
  
   if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;



    }

}
