class Paper{
  constructor(x,y){
    var ball_options={
      isStatic:true,
      restitution:0.3,
      friction:0.5,
      density:1.2
   }
       this.image=loadImage("paper.png");
       this.body= Matter.Bodies.circle(x,y,10,ball_options);
       World.add(world,this.body)  
 }
    display(){
      var pos=this.body.position;
      fill("white")
      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,10,10)
    }
            
}