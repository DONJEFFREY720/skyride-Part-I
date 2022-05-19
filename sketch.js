var backgroundImage
var score = 0
var flyingcar
var coins
var coinGroup
var bird





function preload(){
     backgroundImage = loadImage("images/sky.png")
     car = loadImage("images/flying-car.png")
     coin = loadImage("images/coin.png")
     coinmusic = loadSound("images/videoplayback.mp3")
     

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  flyingcar = createSprite(100,500,10,10)
  flyingcar.addImage(car)
  flyingcar.scale =0.5

  coinGroup = new Group()

  
  
  
 
}

function draw() {
 
     background(backgroundImage); 
     

    flyingcar.y = World.mouseY

    if (frameCount % 100 === 0) {
    coins = createSprite(1300, random(windowHeight), 100, 100);
    coins.addImage(coin)
     coins.velocityX = -12;
     coins.scale =0.1
     coins.depth = flyingcar.depth
     coins.depth-=1
     coins.lifetime=150
     coinGroup.add(coins)
    


  }

  if(coinGroup.isTouching(flyingcar)) {
     coinmusic.play()
     score+=1
     coinGroup.destroyEach()
     }

     drawSprites()
     textSize(35);
     fill("white");
     text("YOUR SCORE : " +score,10,50);




}









