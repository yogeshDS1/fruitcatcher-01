
var back_img;

var basket,basketImg;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;

function preload(){
  back_img = loadImage("jungle.jpg");
  basketImg = loadImage("basket2.png");
  fruit1 = loadImage("apple2.png");
  fruit2 = loadImage("banana2.png");
  fruit3 = loadImage("melon2.png");
  fruit4 = loadImage("orange2.png");
  fruit5 = loadImage("pineapple2.png");

}

function setup() {
  createCanvas(900, 500);
  
  //create basket sprite and add image
 
  basket=createSprite(250,450,20,50)
  basket.addImage(basketImg);
  }
   

function draw() {
 
  background(back_img);
  
  //move basket right and left with mouse and call spawnFruits function
  basket.x=mouseX;
  drawSprites();
  spawnFruits();


} 
function spawnFruits() {

 if(frameCount % 70 == 0) {
  xx=Math.round(random(50,850)); 
    var fruit = createSprite(r,-10,150,20);
    fruit.velocityY = 4 ;
    var  r = Math.round(random(1,5))
    switch(r){
      case 1 : fruit.addImage(fruit1);
      break;
      case 2 : fruit.addImage(fruit2);
      break;
      case 3 : fruit.addImage(fruit3);
      break;
      case 4 : fruit.addImage(fruit4);
      break; 
      case 5 : fruit.addImage(fruit5);
      





      default: break;
    }  
  }
}


