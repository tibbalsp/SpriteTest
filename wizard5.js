class Wizard5 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/RSkip.png"),0,0,64,62,13,0.1);
        
        this.x=0;
        this.y=275;
        this.speed = 100;
    };


    update() {
        if(this.x>900) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/LSkip.png"),0,0,64,62,13,0.1);
            this.speed -=200;
        }else if(this.x<0){
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/RSkip.png"),0,0,64,62,13,0.1);
            this.speed +=200;

        }
        



        this.x += this.speed*this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}