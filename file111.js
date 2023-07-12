// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//     alert("I got clicked.");
// }

// or

// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });
// but above code points to single button and we have to apply this property to every button 
// so we will use loops




//detecting button pressed:-
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var z=this.innerHTML;
        makesound(z);
        buttonAnimation(z);

    });

}

// detecting key pressed
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){

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
        var audio1=new Audio("sounds/tom-3.mp3");
         audio1.play();
         break;

         case "d":
        var audio2=new Audio("sounds/tom-4.mp3");
         audio2.play();
         break;

         case "j":
        var audio3=new Audio("sounds/snare.mp3");
         audio3.play();
         break;

         case "k":
        var audio4=new Audio("sounds/crash.mp3");
         audio4.play();
         break;

         case "l":
        var audio5=new Audio("sounds/kick-bass.mp3");
         audio5.play();
         break;

         default:console.log(z);

    }
    

}

function buttonAnimation(currentkey){

    var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    setTimeout( function(){
        activebutton.classList.remove("pressed");
    },100); 
}



// higher order functions: able to take functions as input for ex: addEventListenerI()
// call back function: the function passed as input for ex: handleclick