const values={
        "1":"green",
        "2":'red',
        "3":'yellow',
        "4":'blue',
        "5":'purple'
};
var level=0;
var arr=[];
var ans = [];
var started = false;
var counter = 0;

$(document).keypress(function(){
    if (!started){
        newEntry();
        started=true;
    }
})

$(".btn").click(function() {

    
  var userChosenColour = $(this).attr("id");
  ans.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
    if (values[arr[counter]]==userChosenColour){
        $("#scoreval").text(arr.length-counter-1);
        counter++;
        if (counter==arr.length){
            counter=0;
            setTimeout(function(){newEntry();},1000);
        }
    }
  else{
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 500);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      started=0;
      level=0;
      counter=0;
      ans= []
      arr= []
  }

});

function newEntry(){
    level++;
    $("h1").text("Level "+level);
    var num = Math.floor(Math.random()*5)+1;
    arr.push(num);
    console.log(num);
    console.log(values[num]);
    $("#" + values[num]).fadeIn(300).fadeOut(300).fadeIn(300);
    
    playSound(values[num]);
    $("#scoreval").text(arr.length);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}