var fixedRect,movingRect;
var a,c

 function setup() 

 { 
   createCanvas(800,400);

   fixedRect= createSprite(200, 200, 90, 20);

    fixedRect.shapeColor="green"

     movingRect= createSprite(400, 200, 20, 90);

      movingRect.shapeColor="green"

       movingRect.velocityX = -5
      fixedRect.velocityX = 5;

      a = createSprite(300,200,30,30)

      c = createSprite(350,160,20,20)
      } 

        function draw()

         {
            background(255,255,255); 

            bounceoff(movingRect, fixedRect);

            collide(a,c);

            c.x = mouseX
            c.y = mouseY

          
           
               drawSprites();
              }
      
    


 

