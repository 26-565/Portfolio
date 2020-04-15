//Counter

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

//Counter



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


  if (document.getElementById("winContainer")) {

    var element = document.getElementById("winContainer");
    element.parentNode.removeChild(element);

}



  var d = document;
  var docBody = d.getElementsByTagName("body")[0];



  var winContainer = d.createElement("div");
  winContainer.setAttribute('class', 'winContainer');
  winContainer.id = "winContainer";

  
  var window = d.createElement('div');
  window.setAttribute('class', 'window');
  window.id = "window";


  var window__titlebar = d.createElement("header");
  window__titlebar.setAttribute('class', 'window__titlebar');
  window__titlebar.id = "window__titlebar";

  var window__icon = d.createElement("img");
  window__icon.id = "window__icon";
  window__icon.setAttribute('width', '16');
  window__icon.setAttribute('height', '16');
  window__icon.setAttribute('src', './img/folder.svg');
  

  var window__titlebarText = d.createElement("span");
  window__titlebarText.setAttribute('class', 'window__titlebarText');
  window__titlebarText.id = "window_titlebarText";

  var window__closeButton = d.createElement("button");
  window__closeButton.setAttribute('class', 'window__closeButton');
  window__closeButton.setAttribute('onclick', 'closeWindow()');
  window__closeButton.id = "window__closeButton";


  var window__fieldContainer = d.createElement("div");
  window__fieldContainer.setAttribute('class', 'window__fieldContainer');
  window__fieldContainer.id = "window__fieldContainer";


  var window__field = d.createElement("div");
  window__field.setAttribute('class','window__field');
  window__field.id = "window__field";


  var taskbar__button = d.createElement("div");
  taskbar__button.setAttribute('class', 'taskbar__button');
  taskbar__button.setAttribute('onclick', 'minimize()');
  taskbar__button.id = "taskbutton";





  winContainer.appendChild(window);
  window.appendChild(window__titlebar);
  window__titlebar.appendChild(window__icon);
  window__titlebar.appendChild(window__titlebarText);
  window__titlebar.appendChild(window__closeButton);
  window.appendChild(window__fieldContainer);
  window__fieldContainer.appendChild(window__field);

  document.getElementById("taskbar").appendChild(taskbar__button);


  // document.getElementById("window").appendChild(window__titlebar);
  // document.getElementById("window").appendChild(window__fieldContainer);
  // document.getElementById("window__fieldContainer").appendChild(window__field);


  docBody.appendChild(winContainer);

  drag();
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




