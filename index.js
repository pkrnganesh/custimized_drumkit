for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
 document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonInnerHTML =  this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
 }); }
 //when buttons pressed
 document.addEventListener("keypress",function(event){
    makesound(event.key);//here key is a property of an event and displays which key is pressed
    buttonAnimation(event.key);
});
    function makesound(key) {
    switch(key)
    {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}
function buttonAnimation(currentKey)
{
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");}
    ,100)    //set time out function here 100 milliseconds and function are arguments and after 
    //after 100 milliseconds it the class pressed will be removed

}

