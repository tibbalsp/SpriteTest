class Arrow{

    constructor(game,playerx,playery,spriteWidth,spriteHeight,facingDir){
        this.game = game;

        this.x = playerx + 48;
        this.y = playery + 50;
        this.animationWidth = spriteWidth;
        this.animationHeight = spriteHeight;


        this.speed = 300;
        this.anamation = facingDir;

        this.animationList = [];
        this.animationIndex = 0;

        //Up
        this.animationList[0] = new Animator(ASSET_MANAGER.getAsset("./Sprites/arrowUp.png"),0,0,20,64,1,100000);  
        //Down
        this.animationList[1] = new Animator(ASSET_MANAGER.getAsset("./Sprites/arrowDown.png"),0,0,20,64,1,100000);
        //Left
        this.animationList[2] = new Animator(ASSET_MANAGER.getAsset("./Sprites/arrowLeft.png"),0,0,64,20,1,100000);
        //Right 
        this.animationList[3] = new Animator(ASSET_MANAGER.getAsset("./Sprites/arrowRight.png"),0,0,64,20,1,100000);
        
        
    };

    update(){ 
        //up down left right
        if(this.anamation==0||this.anamation==6){
            this.animationIndex=0;
            this.y -= this.speed*this.game.clockTick;
        }else if(this.anamation==1||this.anamation==4){
            this.animationIndex=1;
            this.y += this.speed*this.game.clockTick;
        }else if(this.anamation==2||this.anamation==5){
            this.animationIndex=2;
            this.x -= this.speed*this.game.clockTick;
        }else if(this.anamation==3||this.anamation==7){
            this.animationIndex=3;
            this.x += this.speed*this.game.clockTick;
        }

        if(this.x>1024 || this.x<-64 || this.y>768 || this.y<-64){
            this.Arrow=null;
            delete this.Arrow;

            console.log("Deleted?");

        }


        
    };

    draw(ctx){
        this.animationList[this.animationIndex].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };


}