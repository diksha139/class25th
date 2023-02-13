class Ground{

    constructor(x,y,w,h){
        var options={
            isStatic:true
        }


        this.width = w;
        this.height = h;


        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);




    }


    show(){
        var pos = this.body.position
        Matter.Body.rotate(this.body,angle)

        push();
            rectMode(CENTER);
            stroke("green")
            fill("red");
            translate(pos.x,pos.y)
            rotate(angle)
            rect(0,0,this.width,this.height);



        pop();
         angle= angle + 0.1

    }


}


