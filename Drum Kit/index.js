var buttons = document.querySelectorAll(".drum").length;
for (var i=0;i<buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
        if (this.classList.contains("w")){
            var audio=new Audio("sounds/tom-1.mp3");
        }
        else if (this.classList.contains("a")){
            var audio=new Audio ("sounds/tom-2.mp3");
        }
        else if (this.classList.contains("s")){
            var audio=new Audio ("sounds/tom-3.mp3");
        }
        else if (this.classList.contains("d")){
            var audio=new Audio ("sounds/tom-4.mp3");
        }
        else if (this.classList.contains("j")){
            var audio=new Audio ("sounds/crash.mp3");
        }
        else if (this.classList.contains("k")){
            var audio=new Audio ("sounds/kick-bass.mp3");
        }
        else if (this.classList.contains("l")){
            var audio=new Audio ("sounds/snare  .mp3");
        }

        audio.play();
    })
}

document.addEventListener("keypress",function(event){
    console.log(event);
    
    var key=event.key;
    buttonAnimation(key);
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
})

function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);
}
