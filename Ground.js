class Ground
{
    constructor(x,y,w,h)
    {
        this.mybodies=Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(myworld,this.mybodies);
        this.w=w;
        this.h=h;
    }
    display()
    {
        var pos=this.mybodies.position;
        push();
        fill ("brown");
        stroke("black");
        strokeWeight(4);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();

    }
}