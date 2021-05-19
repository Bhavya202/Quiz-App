class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("skyblue");
    fill("black");
    textSize(30);
    text("Result Of The Quiz", 340, 50);
    text("................................", 320, 60);
    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      debugger;
      var displayAnswers = 230;
      fill("blue");
      textSize(20);
      text(" Contestants Who Answered Correctly Are Highlighted In Green ", 130, 230);
      for(var plr in allContestants){
        debugger;
        var correctAnswers = "2";
        if(correctAnswers === allContestants[plr].answer)
          fill("green");
        
        else
          fill("red");

        displayAnswers+=30;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, displayAnswers)
      }
    }
  }
};