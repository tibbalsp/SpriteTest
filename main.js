const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/RSkip.png");
ASSET_MANAGER.queueDownload("./Sprites/LSkip.png");
ASSET_MANAGER.queueDownload("./Sprites/RW.png");
ASSET_MANAGER.queueDownload("./Sprites/LW.png");
ASSET_MANAGER.queueDownload("./Sprites/link.png");
ASSET_MANAGER.queueDownload("./Sprites/arrowUp.png");
ASSET_MANAGER.queueDownload("./Sprites/arrowDown.png");
ASSET_MANAGER.queueDownload("./Sprites/arrowLeft.png");
ASSET_MANAGER.queueDownload("./Sprites/arrowRight.png");



ASSET_MANAGER.downloadAll(() => {

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	

	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Wizard1(gameEngine))
	gameEngine.addEntity(new Wizard2(gameEngine))
	gameEngine.addEntity(new Wizard3(gameEngine))
	gameEngine.addEntity(new Wizard4(gameEngine))
	gameEngine.addEntity(new Wizard5(gameEngine))
	gameEngine.addEntity(new Wizard6(gameEngine))
	gameEngine.addEntity(new Wizard7(gameEngine))
	gameEngine.addEntity(new Wizard8(gameEngine))
	gameEngine.addEntity(new Arrow(gameEngine))

	gameEngine.addEntity(new CharacterController(gameEngine))







	gameEngine.init(ctx);

	gameEngine.start();
});
