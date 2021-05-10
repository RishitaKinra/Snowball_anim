class SnowBall{
    constructor(x,y,w,h){
        var options = {
            restitution: 1,
            friction: 1,
            density: 1
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.snow = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.img = loadImage("snow_splash.png");
        World.add(world,this.snow);
    }

    display(){
        var pos = this.snow.position;
        var angle = this.snow.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.img, pos.x, pos.y, this.w, this.h);
        pop();
    }
}