var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database, canvas;

var question, contestant, quiz;

function setup(){
  //create the canvas
  canvas = createCanvas(850,400);

  //create the database
  database = firebase.database();

  //create the quiz object
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  //create the background
  background("pink");

  //update the gameState
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}