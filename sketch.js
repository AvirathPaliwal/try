const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[]
var maxdrops=100;
var createDrope;
var  thunder,thunder1,thunder2,thunder3,thunder4;
var rand;
var thunderCreatedFrame=0;
function preload(){
   thunder1 = loadImage("thunderbolt/1.png"); 
   thunder2 = loadImage("thunderbolt/2.png"); 
   thunder3 = loadImage("thunderbolt/3.png"); 
   thunder4 = loadImage("thunderbolt/4.png"); 
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,350);
    umbrella.scale=0.1
    
    if(frameCount%150===0){
        for(var i = 0; i<maxdrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)))
     }
      
  }
}

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount
        thunder = createSprite(random(10,370),random(10,30));
        switch(rand){
            case rand: thunder.addImage("t",thunder1)
                break;
            case rand: thunder.addImage("h",thunder2)
                break;
            case rand: thunder.addImage("u",thunder3)
                break;
            case rand: thunder.addImage("nder",thunder4)
                break;
                default: break;
        }
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display(); 
    for(var i = 0; i<maxdrops ; i++){
        drops[i].display();
        drops[i].updateY();
    }
    drawSprites();
}   
