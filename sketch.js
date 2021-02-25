var database;
var gameState = 0
var playerCount
var form, player, game



function setup(){
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
  
}

function draw(){
  background("white");
  
  
}
