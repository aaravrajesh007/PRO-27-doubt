class Rope {

    constructor(body1,point1,xoffset){
this.xoffset=xoffset;
        var options={
            bodyA:body1,
            pointB:point1,
            xOffset:xoffset,
            stiffness:0.04,
            length:10
        }
     this.Rope= Constraint.create(options);
     World.add(world,this.Sling);
    }
    display(){
        if(this.Rope.bodyA)
        {
        var pointX=this.Rope.bodyA.position;
        var pointY=this.Rope.pointB;
        push();
        strokeWeight(5)
        line(pointX.x,pointX.y,pointY.x+this.xoffset,pointY.y)
        pop();
        }
    }

}
