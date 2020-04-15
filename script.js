//Counter

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

//Counter


var openOrNot = false;



function closeWindow() {

  var element = document.getElementById("winContainer");
  element.parentNode.removeChild(element);

}

function logOff() {
  window.location.href = "login.html";
}

function goToVector() {
  window.location.href = "vector.html";
}

function goTo3D() { 

newWindow();
  
}

function goToGames() {
  window.location.href = "games.html";
}

function goToResume() {
  window.location.href = "resume.html";
}

function goToSoundcloud() {
  window.location.href = "https://soundcloud.com/user-176341805-978472874";
}

function goToInstagram() {
  window.location.href = "https://www.instagram.com/26.565_design";
}

function sendMail() {
  window.location.href = "mailto:philipp024@gmail.com";
}

function minimize() {
  if (document.getElementById("taskbutton").className == "taskbar__button") {
    document.getElementById("taskbutton").className = "taskbar__buttonInactive";
    document.getElementById("window").style.visibility = "hidden";
  } else {
    document.getElementById("taskbutton").className = "taskbar__button";
    document.getElementById("window").style.visibility = "visible";
  }
}

/* addEventListener("click", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});

*/

function newWindow(){

//   if (document.getElementById("winContainer")) {

//     var element = document.getElementById("winContainer");
//     element.parentNode.removeChild(element);

// }



  // var d = document;
  // var docBody = d.getElementsByTagName("body")[0];



if(openOrNot == true){
  return;
}

  var winContainer = document.createElement("div");
  winContainer.setAttribute('class', 'winContainer');
  winContainer.id = "winContainer";

  
  var window = document.createElement('div');
  window.setAttribute('class', 'window');
  window.id = "window";


  var window__titlebar = document.createElement("header");
  window__titlebar.setAttribute('class', 'window__titlebar');
  window__titlebar.id = "window__titlebar";

  var window__icon = document.createElement("img");
  window__icon.id = "window__icon";
  window__icon.setAttribute('width', '16');
  window__icon.setAttribute('height', '16');
  window__icon.setAttribute('src', './img/folder.svg');
  

  var window__titlebarText = document.createElement("span");
  window__titlebarText.setAttribute('class', 'window__titlebarText');
  window__titlebarText.id = "window_titlebarText";

  var window__closeButton = document.createElement("button");
  window__closeButton.setAttribute('class', 'window__closeButton');
  window__closeButton.setAttribute('onclick', 'closeWindow()');
  window__closeButton.id = "window__closeButton";


  var window__fieldContainer = document.createElement("div");
  window__fieldContainer.setAttribute('class', 'window__fieldContainer');
  window__fieldContainer.id = "window__fieldContainer";


  var window__field = document.createElement("div");
  window__field.setAttribute('class','window__field');
  window__field.id = "window__field";


  var taskbar__button = document.createElement("div");
  taskbar__button.setAttribute('class', 'taskbar__button');
  taskbar__button.setAttribute('onclick', 'minimize()');
  taskbar__button.id = "taskbutton";



  document.body.appendChild(winContainer);



  winContainer.appendChild(window);
  
  window.appendChild(window__titlebar);
  window__titlebar.appendChild(window__icon);
  window__titlebar.appendChild(window__titlebarText);
  window__titlebar.appendChild(window__closeButton);
  window.appendChild(window__fieldContainer);
  window__fieldContainer.appendChild(window__field);

  document.getElementById("taskbar").appendChild(taskbar__button);

  // docBody.appendChild(winContainer);


  

  document.getElementById("window").appendChild(window__titlebar);
  document.getElementById("window").appendChild(window__fieldContainer);
  document.getElementById("window__fieldContainer").appendChild(window__field);

  drag();

  openOrNot = true;



}






