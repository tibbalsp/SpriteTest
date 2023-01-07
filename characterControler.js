class CharacterController {
    constructor(game){
        this.game = game;

        this.x=500;
        this.y=375;
        this.speed = 100;
        this.viewWidth = 1024;
        this.viewHeight = 768;
        this.facingDirection = 0;
        
        this.animationIndex = 4;

        this.animationList = [];

        this.animationWidth = 96.75;
        this.animationHeight = 100;

        //WalkUp
        this.animationList[0] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,625,96.75,100,10,0.4);  
        //WalkDown
        this.animationList[1] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,422,95,90,10,0.4);
        //WalkLeft
        this.animationList[2] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,522,96.75,100,10,0.4);
        //WalkRight 
        this.animationList[3] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,729,95.75,110,10,0.4);
        //FrontIdle
        this.animationList[4] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,0,96,110,3,0.4);
        //LeftIdle
        this.animationList[5] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,116,96,110,3,0.4);
        //BackIdle
        this.animationList[6] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,220,96,90,1,0.4);
        //RightIdle
        this.animationList[7] = new Animator(ASSET_MANAGER.getAsset("./Sprites/link.png"),0,324,92,90,3,0.4);



    };

    update(){   
        
        if(this.game.keys["w"]){
            this.animationIndex = 0;
            this.y -= this.speed*this.game.clockTick};
        if(this.game.keys["s"]){
            this.animationIndex = 1;
            this.y += this.speed*this.game.clockTick};
        if(this.game.keys["a"]){
            this.animationIndex = 2;
            this.x -= this.speed*this.game.clockTick};
        if(this.game.keys["d"]){
            this.animationIndex = 3;
            this.x += this.speed*this.game.clockTick;}
        
        if(this.game.keys["f"]){
            this.game.addEntity(new Arrow(this.game,this.x,this.y,this.animationWidth,this.animationHeight, this.animationIndex))
        }
     
        
    };


    draw(ctx) {
    this.animationList[this.animationIndex].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}