var canvas;
var music;
var ball;
var ground1;
var ground2;
var ground3;
var ground4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball = createSprite(10,50,20,20);
    //create 4 different surfaces
    block1 = createSprite(90,580,180,20);
    block2 = createSprite(300,580,180,20);
    block3 = createSprite(510,580,180,20);
    block4 = createSprite(720,580,180,20);

    block1.shapeColor = "green";
    block2.shapeColor = "yellow";
    block3.shapeColor = "red";
    block4.shapeColor = "blue";
    ball.shapeColor = "white";

    
    ball.velocityX = 4;
    ball.velocityY = 4;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,255,0);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
    }
    


    
        


 
    drawSprites();

}
