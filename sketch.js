const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var engine, world;


var maxDrops=100;
var drops=[];

function preload(){
    
}

function setup(){
    engine=Engine.create();

    world=engine.world;
   createCanvas(400,700);

   if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
   }
    
}

function draw(){

        Engine.update(engine);

    background("black");

    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    
}   

