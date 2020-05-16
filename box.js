class box {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.1,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.visibility = 255;
    }
    
    color(r,g,b){
        fill(r,g,b);
    }
    
    display(){
      var pos =this.body.position;
     
      console.log(this.body.speed);

      if(this.body.speed<7){
      rectMode(CENTER);      
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
        score = score + 10;
      }
    }
  }