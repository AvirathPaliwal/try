class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
        "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png",
        "Walking Frame/walking_8.png",)
        this.umbrella = Bodies.circle(x,y,50,option);
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        imageMode(CENTER)
        animation(this.image,pos.x,pos.y);

    }
}