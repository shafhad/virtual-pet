//Create variables here
var dog1
var happyDog
var database
var foods 
var foodStock
function preload()
{
  //load images here
  dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
database=firebase.database()
dog1 = createSprite(250,250)
  dog1.addImage("d",dog)
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if (keyDown(UP_ARROW))
{
  foodStock=foodStock-1
  dog1.addImage("do",happyDog)
}
  drawSprites();

  //add styles here

}
function readStock(data)
{
  foods=data.val()
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0
  } else{
    x=x-1
  }
  database.ref("/").update({Food:x})
}




