class Log extends BaseClass
{
    constructor(x,y,h,angle)
    {
       super(x,y,20,h,angle);
       Body.setAngle(this.mybodies,angle);
       this.img=loadImage("sprites/wood2.png");
    }
}