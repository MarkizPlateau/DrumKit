let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}


// document.querySelectorAll(".drum").forEach(function(element){
//   element.addEventListener("click",function (){
//     alert("Click!");
//   });
// })
