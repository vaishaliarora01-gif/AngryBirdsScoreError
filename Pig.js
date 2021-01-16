class Pig extends BaseClass
{
    constructor(x,y,w,h)
    {
        super(x,y,w,h);
        this.img=loadImage("sprites/enemy.png");
        this.visibility=255;//25 means it's visible.0 meas not and in btw 0 and 255 partially visible.
    }

    display()
    {
        //super.display();
       // console.log(this.mybodies.speed);
        if(this.mybodies.speed<3.0)
        {
            super.display();
        }
        else
        {
            World.remove(myworld,this.mybodies);
           push();
            this.visibility=this.visibility-15;
            tint(255,this.visibility);
            image(this.img,this.mybodies.position.x,this.mybodies.position.y,this.w,this.h);
            pop();
           
        }
    }

    score(){

        if(this.visibility<=0 && this.visibility>=1005)
        {
            score++;
        }
    }
}