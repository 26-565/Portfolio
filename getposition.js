document.addEventListener("DOMContentLoaded", function (event) {
    SetDOM(document.getElementById("window"));
  
    function SetDOM(elmnt) {
   
  
      function setPosition() {

        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop + "px";
        elmnt.style.left = elmnt.offsetLeft + "px";
      }
  
      window.onload = setPosition;


    }
  });

