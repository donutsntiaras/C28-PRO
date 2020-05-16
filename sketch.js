const {Engine,World,Bodies,MouseConstraint,Constraint} = Matter; 

var sling;
var box1;
var land;

//pyramid1
var boxes1 = [];
var boxes2 = [];
var boxes3 = [];

//pyramid2
var boxes4 = [];
var boxes5 = [];
var boxes6 = [];

//pyramid3
var boxes7 = [];
var boxes8 = [];
var boxes9 = [];
var boxes10 = [];
var boxes11 = [];
var boxes12 = [];

//pyramid4
var boxes13 = [];
var boxes14 = [];
var boxes15 = [];
var score = 0;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    land = new Ground(600,595,1200,10);
    
    //shooter
    land1 = new Ground(250,400,0.1,0.1);
    rock1 = new rock(250,400,30,30);
           
    sling = new slingShot(rock1.body, land1.body);

    h1 = new Ground(750,250,200,4);
    h2 = new Ground(978,300,200,4);
    h3 = new Ground(1100,80,200,4);
   
    //pyramid1
    for(var i=0; i<4; i++){
        boxes1[i] = new box(750,100,30,30);
    }
    for(var j=0; j<3; j++){
        boxes2[j] = new box(710,100,30,30);
    }
    for(var k=0; k<3; k++){
        boxes3[k] = new box(780,100,30,30);
    }
   
    //pyramid2
    for(var l=0; l<3; l++){
        boxes4[l] = new box(980,150,30,30);
    }
    for(var m=0; m<2; m++){
        boxes5[m] = new box(1010,200,30,30);
    }
    for(var n=0; n<2; n++){
        boxes6[n] = new box(950,150,30,30);
    }
    
    //pyramid3
    for(var o=0; o<5; o++){
        boxes7[o] = new box(900,450,30,30);
    }
    for(var p=0; p<4; p++){
        boxes8[p] = new box(940,510,30,30);
    }
    for(var q=0; q<4; q++){
        boxes9[q] = new box(860,500,30,30);
    }
    for(var r=0; r<5; r++){
        boxes10[r] = new box(900,450,30,30);
    }
    for(var s=0; s<4; s++){
        boxes11[s] = new box(940,510,30,30);
    }
    for(var t=0; t<4; t++){
        boxes12[t] = new box(860,500,30,30);
    }

    //pyramid4
    for(var u=0; u<3; u++){
        boxes13[u] = new box(1100,10,30,30);
    }
    for(var v=0; v<2; v++){
        boxes14[v] = new box(1130,5,30,30);
    }
    for(var w=0; w<2; w++){
        boxes15[w] = new box(1070,5,30,30);
    }
    
  
}

function draw(){
    background(0);
    Engine.update(engine);

    stroke(255);
    strokeWeight(2);
    textSize(10);
    text("score:" + score, 600, 100);

    noStroke();
    land.display();

    rock1.display();
    land1.display();
    sling.display();
    
    h1.display();
    h2.display();
    h3.display();
    
    //pyramid1
    for(var box1 of boxes1){
        box1.display();
        box1.color(0,255,101);
    }
    for(var box2 of boxes2){
        box2.display();
        box2.color(225,255,0);
    }
    for(var box3 of boxes3){
        box3.display();
        box3.color(21,0,255);
    }

    //pyramid2
    for(var box4 of boxes4){
        box4.display();
        box4.color(199,0,255);
    }
    for(var box5 of boxes5){
        box5.display();
        box5.color(255,183,208);
    }
    for(var box6 of boxes6){
        box6.display();
        box6.color(255,0,0);
    }

    //pyramid3
    for(var box7 of boxes7){
        box7.display();
        box7.color(0,210,255);
    }
    for(var box8 of boxes8){
        box8.display();
        box8.color(249,138,82);
    }
    for(var box9 of boxes9){
        box9.display();
        box9.color(18,247,2);
    }
    for(var box10 of boxes10){
        box10.display();
        box10.color(0,210,255);
    }
    for(var box11 of boxes11){
        box11.display();
        box11.color(249,138,82);
    }
    for(var box12 of boxes12){
        box12.display();
        box12.color(18,247,2);
    }

    //pyramid4
    for(var box13 of boxes13){
        box13.display();
        box13.color(255,0,140);
    }
    for(var box14 of boxes14){
        box14.display();
        box14.color(89,0,255);
    }
    for(var box15 of boxes15){
        box15.display();
        box15.color(123,0,255);
    }


    
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
      World.remove(world,rock1.body);
      rock1 = new rock(250,400,30,30);
      sling.attach(rock1.body);
    }
}