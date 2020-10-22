var red_balloon, blue_balloon, green_balloon, pink_balloon, bow, backgroundimg, redballoonimg, blueballoonimg, greenballoonimg, pinkballoonimg, bowimg, backgroundimg2, arrow, arrowimg

 function preload() {
   //load your images here 
   redballoonimg = loadImage("red_balloon0.png");
   blueballoonimg = loadImage("blue_balloon0.png");
   greenballoonimg = loadImage("green_balloon0.png");
   pinkballoonimg = loadImage("pink_balloon0.png");
   bowimg = loadImage("bow0.png");
   backgroundimg2 = loadImage("background0.png");
   arrowimg = loadImage("arrow0.png");

 }

 function setup() {
   createCanvas(600, 600);

   background("white");

   //add code here

   backgroundimg = createSprite(0, 0, 50, 50);
   backgroundimg.addImage(backgroundimg2);
   backgroundimg.scale = 2.5
   backgroundimg.velocityX = -3;

   arrow = createSprite(450, mouseY, 30, 10);
   arrow.addImage(arrowimg);
   arrow.scale = 0.3

   bow = createSprite(450, mouseY, 10, 10);
   bow.addImage(bowimg);

   for (var i = 180; i < 330; i = i + 60) {
     red_balloon = createSprite(150, i, 1, 1);
     red_balloon.addImage(redballoonimg);
     red_balloon.scale = 0.1
   }

   for (var i = 60; i < 450; i = i + 60) {
     blue_balloon = createSprite(50, i, 1, 1);
     blue_balloon.addImage(blueballoonimg);
     blue_balloon.scale = 0.1
   }

   for (var i = 120; i < 390; i = i + 60) {
     green_balloon = createSprite(100, i, 1, 1);
     green_balloon.addImage(greenballoonimg);
     green_balloon.scale = 0.1
   }

   for (var i = 240; i < 270; i = i + 60) {
     pink_balloon = createSprite(200, i, 1, 1);
     pink_balloon.addImage(pinkballoonimg);
     pink_balloon.scale = 1.2
   }


 }

 function draw() {

   //add code here

   if (backgroundimg.x < 0) {
     backgroundimg.x = backgroundimg.width / 2;
   }

   if (keyDown("space")) {
     arrow.x = 450
     arrow.velocityX = -5;
   }

   bow.y = World.mouseY
   arrow.y = World.mouseY

   drawSprites();
 }