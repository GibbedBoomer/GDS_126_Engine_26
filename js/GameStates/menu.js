var startButton = new GameObject();
startButton.width = 200;
startButton.hitBoxWidth = 800;


var menu = {
	info:{
		src:`images/newMenuScreenSpriteSheet.png`
	},
	states:{
		idle:{
			fps:15,
			cycle:true,
			frames:[
				{width:1024, height:512, startX:0, startY:0}
			]
		},
		animated:{
			fps:2,
			cycle:true,
			frames:[
				{width:1024, height:512, startX:0, startY:0},
				{width:1024, height:512, startX:1024, startY:0},
				{width:1024, height:512, startX:2048, startY:0},
				{width:1024, height:512, startX:3072, startY:0},
				{width:1024, height:512, startX:4096, startY:0},
				{width:1024, height:512, startX:0, startY:512},
				{width:1024, height:512, startX:1024, startY:512},
				{width:1024, height:512, startX:2048, startY:512},
				{width:1024, height:512, startX:3072, startY:512},
				{width:1024, height:512, startX:4096, startY:512},
				{width:1024, height:512, startX:0, startY:1024},
				{width:1024, height:512, startX:1024, startY:1024},
				{width:1024, height:512, startX:2048, startY:1024},
				{width:1024, height:512, startX:3072, startY:1024},
				{width:1024, height:512, startX:4096, startY:1024},
				{width:1024, height:512, startX:0, startY:1536},
				{width:1024, height:512, startX:1024, startY:1536},
				{width:1024, height:512, startX:2048, startY:1536},
				{width:1024, height:512, startX:3072, startY:1536},
				{width:1024, height:512, startX:4096, startY:1536}
			]
		}
	}
};


var menuBackground = new GameObject();

menuBackground.makeSprite(menu);
menuBackground.changeState("animated");

menuBackground.width = 1024;
menuBackground.height = 512;

gameStates[`menu`] = function(){

	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			gameStates.changeState(`level1`)
		}

		startButton.img.src = "images/buttonHover.png"
	}
	else
	{
		startButton.img.src = "images/buttonNormal.png"
	}

	menuBackground.play().drawSprite();

	startButton.drawStaticImage();
}

console.log(menuBackground.spriteData)