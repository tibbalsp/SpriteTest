class Wizard8 {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/RW.png"),0,0,64,62,8,0.1);
        this.x=0;
        this.y=650;
        this.xspeed = 75;
        this.yspeed = -55;

    };


    update() {
        if(this.x < 0) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/RW.png"),0,0,64,62,8,0.1);
            this.xspeed +=150;
            this.yspeed -=110;
        }else if(this.x>900){
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/LW.png"),0,0,64,62,8,0.1);
            this.xspeed -=150;
            this.yspeed +=110;
        }

        this.x += this.xspeed*this.game.clockTick;
        this.y += this.yspeed*this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}