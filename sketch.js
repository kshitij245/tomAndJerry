var cat1,cat2,cat3,mouse1,mouse2,mouse3;
var cat,mouse
var bg;
function preload() {
    //load the images here

    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat1=loadAnimation("images/cat1.png");
    cat3=loadAnimation("images/cat4.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse3=loadAnimation("images/mouse4.png");
    bg=loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("tomSleeping",cat1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseHappy",mouse1);
    mouse.scale=0.1;
}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
       cat.velocityX=0;
       cat.addAnimation("tomLive",cat3);
       cat.changeAnimation("tomLive");
       cat.scale=0.2;
       cat.x=300;

       mouse.addAnimation("jerryLive",mouse3);
       mouse.changeAnimation("jerryLive");
       mouse.scale=0.1;
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
  //For moving and changing animation write code here
   cat.velocityX=-5;
   cat.addAnimation("catRunning",cat2)
   cat.changeAnimation("catRunning")

   mouse.addAnimation("jerryTeasing",mouse2);
   mouse.changeAnimation("jerryTeasing");
   mouse.frameDelay=25;
    }

}
