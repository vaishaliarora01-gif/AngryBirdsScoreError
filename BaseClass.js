class BaseClass
{
    constructor(x,y,w,h,angle)
    {
        this.mybodies=Bodies.rectangle(x,y,w,h,{restitution:0.6,density:1.0,friction:1.0});
        World.add(myworld,this.mybodies);
        this.w=w;
        this.h=h;
        this.img=loadImage("sprites/base.png");
    }

    display()
    {
        var pos=this.mybodies.position;
        var angle=this.mybodies.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img,0,0,this.w,this.h);
        pop();
    }
}