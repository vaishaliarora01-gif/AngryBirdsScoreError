class Slingshot
{
   constructor(bodyA,pointB)
   {
       var op={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.2,
           length:10
       }
        this.pointB=pointB;
        this.sling=Constraint.create(op);
        World.add(myworld,this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
   }

   fly()
   {
      this.sling.bodyA=null;
   }
   attach(body)
   {
     this.sling.bodyA=body;
   }
   display()
   {

    image(this.sling2,180,95);
    image(this.sling1,210,100);
     if(this.sling.bodyA!=null)
     {
       var p1=this.sling.bodyA.position;
       var p2=this.pointB;
       push();
       strokeWeight(12);
       stroke(48,22,8);
       if(p1.x<240)
       {
       line(p1.x-25,p1.y,p2.x-10,p2.y+10);
       line(p1.x-25,p1.y,p2.x+35,p2.y+5);
       image(this.sling3,p1.x-30,p1.y-15,15,30);
       }
       else
       {
        line(p1.x+25,p1.y,p2.x-10,p2.y+10);
        line(p1.x+25,p1.y,p2.x+35,p2.y+5);
        image(this.sling3,p1.x+30,p1.y-15,15,30);
        }
       pop();
     }
   }
}