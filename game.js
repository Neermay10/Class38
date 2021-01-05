class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on('value',function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player(); 
            var playerCountRef = await database.ref('playerCount').once("value"); 
            if(playerCountRef.exists()){ 
                playerCount = playerCountRef.val(); 
                player.getCount(); 
            } 
            form = new Form();
            form.display(); 
        } 
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        car = [car1, car2, car3, car4]
    }
    
    /*play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);

        //static fuction called by class name
        Player.getPlayerInfo();
        
        //displaying player name and distance
        if(allPlayers !== undefined){

            //console.log(Player.getPlayerInfo())
            //var displayPosition = 130;
            var x = 0;
            var y;
            var index = 0;
            for(var plr in allPlayers){
               if(plr === "player" + player.index){
                    fill("red");
                }else{
                    fill("black")
                }
                index = index+1
                 x = x+200
                y = displayHeight-allPlayers[plr].distance;
                //car[index-1].x = x;
                car[index-1].y = y;

                if(index === player.index){
                    car[index - 1].shapeColor = "red";
                }
                
            
                //displayPosition += 20;
                //textSize(15);
                //text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition);
            }
        }*/


        play(){
            form.hide();
        
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              //var display_position = 100;
              
              //index of the array
              var index = 0;
        
              //x and y position of the cars
              var x = 0;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loops
                index = index + 1 ;
        
                //position the cars a little away from each other in x direction
                x = x + 200;
              //  console.log("x is"+ x);
                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                console.log(car[index-1])
               car[index-1].x = x;

                car[index-1].y = y;
        
                if (index === player.index){
                  car[index - 1].shapeColor = "red";
                 camera.position.x = displayWidth/2;
                 camera.position.y = car[index-1].y
                }
               
                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
              }
        
            }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }

}