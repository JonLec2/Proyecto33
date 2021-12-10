class raquet extends Baseclass{
    constructor(y,x,width, height,angle){
      super(y,x,width,height,angle);
   
      Matter.Body.setAngle(this.body, angle);
    }
  }
  