class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:1.89,
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

  score1(){
      if(this.body.position.y>560){
if(this.body.position.x>852 && this.body.position.x<1010){
    score=score+50
    
}

if(this.body.position.x>1071 && this.body.position.x<1190){
    score=score+100
    
}
      }
  }
        

}
