class box {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.1,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    color(r,g,b){
        fill(r,g,b);
    }
    
    display(){
      var pos =this.body.position;
      //pos.x= mouseX;
      //pos.y = mouseY;
      
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  }