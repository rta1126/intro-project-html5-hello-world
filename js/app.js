// sprite object - basic framework for player and enemy
var basicSprite = function (x, y, sprite) {
        this.x = x;
        this.y = y;
        this.global_x = this.x;
        this.global_y = this.y;
        this.sprite = sprite;
        this.width = Resources.get(this.sprite).width;
        this.height = Resources.get(this.sprite).height;
    };
// Enemies our player must avoid
var Enemy = function (x, y) {
        this.sprite = basicSprite;
        this.sprite(x, y, 'images/enemy-bug.png');
        this.bugSpeed = 100 + Math.floor(Math.random() * 250);
    };
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function (dt){
    if (this.x <= ctx.canvas.width) {
        this.x = this.x + this.bugSpeed * dt;
    } else {
	    this.x = - this.width;
    }
    if (colides(player,this)) {
	    lifeCounter();
	    player.reset();
	}
};
var count = 9;
    document.getElementById("count").innerText = "Lives Remaining: " +count;
function lifeCounter() {
    document.getElementById("count").innerText = "Lives Remaining: " +count;
    count--;
    if (count < 1){
        Alert.render("Out of Lives - Game over!");
	}
    console.log(count);
}
// reset the enemy and the speed
Enemy.prototype.reset = function() {
    this.x;
    this.y;
    this.bugSpeed = 100 + Math.floor(Math.random() * 250);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
	this.sprite = basicSprite;
	this.sprite(x,y,'images/char-boy.png');
};
// set up what constitutes a collision
var colides = function (player, enemy) {
    return !(enemy.x > (player.x + player.width) ||
        (enemy.x + enemy.width) < (player.x) ||
        enemy.y !== player.y);
};
// render the player sprite on the board
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// what happens with a reset - send player back to start
Player.prototype.reset = function() {
	this.x = this.global_x;
	this.y = this.global_y;
};
// setup the keyboard input
Player.prototype.handleInput = function(keypress) {
    switch (true) {
        case (keypress === 'up'):
            if (this.y > 85) {
               this.y = this.y - 83;
               this.row--;
            }
            break;
        case (keypress === 'down'):
            if (this.y < 400) {
               this.y = this.y + 83;
               this.row++;
            }
            break;
        case (keypress === 'left'):
            if (this.x > 100) {
               this.x = this.x - 101;
               this.col--;
            }
            break;
        case (keypress === 'right'):
            if (this.x < ctx.canvas.width - 200) {
               this.x = this.x + 101;
               this.col++;
            }
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player;
// setup the game put player in start position
// establish the column move increment of 83 + 50
// and drop enemies into an array
function setup() {
    for (var i = 1;i < 5;i++) {
        var x = 0;
        var y = (83 * i) + 50;
        allEnemies.push(new Enemy(x,y));
    }
    player = new Player(0,465,101,83);
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
// Select player based on sprite image and start the game
window.onload = function () {
    document.getElementById("spriteSelector").addEventListener("click", function(e) {
	    reset();
    },false);
};
var selector = document.getElementsByName('buttonSprite');
var selectSprite = function() {
    player.sprite="images/" + this.value;
    player.render();
};
for(var i = selector.length; i--; ) {
    selector[i].onclick = selectSprite;
}
// Create an overlay window and Game Over alert
function gameAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var overlay = document.getElementById('overlay');
        var msgBox = document.getElementById('msgBox');
        overlay.style.display = "block";
        overlay.style.height = winH+"px";
        msgBox.style.left = (winW/2) - (550 * .5)+"px";
        msgBox.style.top = "300px";
        msgBox.style.display = "block";
        document.getElementById('msgBoxHead').innerHTML = "Oh no! you have run out of lives!!!";
        document.getElementById('msgBoxBody').innerHTML = "Game Over";
        document.getElementById('msgBoxFoot').innerHTML = '<button onclick="Alert.newGame()">Start New Game</button>';
    };
// start a new game with button on alert window
    this.newGame = function(){
        document.getElementById('msgBox').style.display = "none";
        document.getElementById('overlay').style.display = "none";
        location.reload();
    }
};
var Alert = new gameAlert();