class rock {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   
    display(){
      var pos =this.body.position;
      //pos.x= mouseX;
      //pos.y = mouseY;
      
      rectMode(CENTER);
      //fill(71,221,247);
      fill(231,196,242);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }