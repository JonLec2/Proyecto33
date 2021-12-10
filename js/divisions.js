class Divisions {
    constructor(x, y, w, h, angle) {
        var options = {
            isStatic:true,
           "restitution":0.02, 
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
       
    }

    display() {
        var pos = this.body.position;
        var angle=this.body.angle;
push();
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
};