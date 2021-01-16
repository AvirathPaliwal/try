class Drops{
    constructor(x,y){
        var pos={
            friction:0.001,
            restitution:0.1
        }
        this.body = Bodies.circle(x,y,5,pos);
        World.add(world,this.body);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})
        }
        
    }

    display(){
        fill("lightblue");
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}