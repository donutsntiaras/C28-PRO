class slingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            //length: 50
        }
       
        //this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;

    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            
            stroke(255);
            strokeWeight(2);
            //line(pointA.x,pointA.y,pointB.x,pointB.y);
            line(pointA.x , pointA.y - 20, pointB.x , pointB.y - 10);
            line(pointA.x , pointA.y - 20, pointB.x - 3, pointB.y + 30);
            pop();
        }
    }
  
}