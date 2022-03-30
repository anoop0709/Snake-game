var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 3;
var snakeY = blockSize * 3;

var snakeBody = [];
//food
var foodX;
var foodY;

// snake movement
var velocityX = 0;
var velocityY = 0;


var gameOver = false;



window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    
    placefood();
    document.addEventListener('keyup',changeDirection);
    setInterval(update,3000/10);
}

function update(){
    if(gameOver){
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize,blockSize);
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push(foodX,foodY);
        placefood();
    }
    if(snakeX < 0 || snakeX > board.width || snakeY < 0 || snakeY > board.height){
        gameOver = true;
        alert("Game Over");
    }

    context.fillStyle = "blue";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}

function placefood(){
   foodX =  Math.floor(Math.random()*rows) *blockSize;
   foodY =  Math.floor(Math.random()*cols) *blockSize;
}

function changeDirection(e){
    if(e.code == 'ArrowUp' && velocityY!= 1){
        velocityX = 0;
        velocityY = -1;
     }
     else if(e.code == 'ArrowDown' && velocityY!= -1){
        velocityX = 0;
        velocityY = 1;
     }
     else if(e.code == 'ArrowLeft' && velocityX!= 1){
        velocityX = -1;
        velocityY = 0;
     }
     else if(e.code == 'ArrowRight' && velocityX!= -1){
        velocityX = 1;
        velocityY = 0;
     }
     
}