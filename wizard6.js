class Wizard6 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/LW.png"),0,0,64,62,8,0.1);
        this.x=900;
        this.y=125;
        this.speed = -50;
    };


    update() {
        if(this.x < 0) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/RW.png"),0,0,64,62,8,0.1);
            this.speed +=100;
        }else if(this.x>900){
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/LW.png"),0,0,64,62,8,0.1);
            this.speed -=100;
        }

        this.x += this.speed*this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}