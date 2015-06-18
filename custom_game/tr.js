var game = new Game();
function Game(){
	this.init = function(){
		//this.background = document.getElementById('background');
		this.background = $('#background')[0];
		
		
			
		this.backgrounContext = this.background.getContext('2d');
		this.backgrounContext.fillStyle = "rgb(0,0,0)";
		this.backgrounContext.fillRect(10,10,55,50);
		
		this.backgrounContext.fillStyle = "rgb(150,0,0)";
		this.backgrounContext.fillRect(100,100,55,50);
		
	};
	
	
};



function init(){
	
	game.init();
};

