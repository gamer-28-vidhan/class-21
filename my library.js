function bounceoff(obj1,obj2)
    {
if(obj1.x-obj2.x <obj2.width/2+obj1.width/2 &&
 obj2.x-obj1.x <obj2.width/2+obj1.width/2){

obj2.velocityX = obj2.velocityX*(-1)
obj1.velocityX = obj1.velocityX*(-1)



  }
 }

 function collide(th1,th2){

  if(th1.x-th2.x <th2.width/2+th1.width/2 &&
    th2.x-th1.x <th2.width/2+th1.width/2
    && th2.y-th1.y <th2.height/2+th1.height/2 &&
    th1.y-th2.y <th2.height/2+th1.height/2 )

    { 
      th1.shapeColor="red"
     th2.shapeColor="red"
    }
      else 
      {
         th1.shapeColor="green"
       th2.shapeColor="green"
      } 
    }