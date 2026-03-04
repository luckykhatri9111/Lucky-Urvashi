let pages = document.querySelectorAll(".page");
let current = 0;

function nextPage(){
  pages[current].classList.remove("active");
  current++;
  if(current < pages.length){
    pages[current].classList.add("active");
  }
}

document.addEventListener("click", ()=>{
  nextPage();
});


function acceptLove(){
  document.getElementById("effect").innerHTML="🎉💖🌸";
  setTimeout(nextPage,1500);
}

function rejectLove(){
  alert("Please think again 😢❤️");
}

function hearts(){
  alert("❤️❤️❤️ Love Everywhere ❤️❤️❤️");
}

function flowers(){
  alert("🌹🌹 Roses For You 🌹🌹");
}

function fireworks(){
  alert("🎆🎆 Celebration 🎆🎆");
}

function finalYes(){
  document.getElementById("final").innerHTML="🎉💍❤️ Forever Together ❤️💍🎉";
}

function finalNo(){
  document.getElementById("final").innerHTML="😢 I will wait for you...";
}
