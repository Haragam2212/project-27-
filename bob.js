class Bob extends BaseClass{
    constructor(x,y,radius){
      var options = {
         isStatic: true
     }
       super(x,y,radius,options);
       this.body=Bodies.circle(x,y,radius,options);
       this.radius=radius
       World.add(world,this.body)
    }   
   display(){
     var pos= this.body.position;
     circle(pos.x,pos.y,this.radius);
    
   
   
   }
   
   
   
   
   
   
   }