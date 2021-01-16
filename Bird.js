class Bird extends BaseClass
{
    constructor(x,y,w,h)
    {
        super(x,y,w,h);
        this.img=loadImage("sprites/bird.png");
        this.smokeImage=loadImage("sprites/smoke.png");
        this.trajectory=[];
    }

    display()
    {
        super.display();
       //this.mybodies.position.x=mouseX;
        //this.mybodies.position.y=mouseY;
        if(this.mybodies.velocity.x>10 && this.mybodies.position.x>260)
        {
        var position=[this.mybodies.position.x,this.mybodies.position.y];
        this.trajectory.push(position);
        //console.log(this.mybodies.speed);
        }
        for(var i=0; i<this.trajectory.length;i++)
        {
            image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
        }
   
    }
}