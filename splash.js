function move() {

  
  
  

    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        window.location.href = 'desktop.html';
      } else {
        var myNumber = Math.floor(Math.random()*8);
        width = width + myNumber;
        elem.style.width = width + '%'; 
        
      }
    }
  }

  // function move2() {
  //   var elem = document.getElementById("myBar");   
  //   var width = 0;
  //   var id = setInterval(frame, 20);
  //   function frame() {
  //     if (width >= 100) {
  //       clearInterval(id);
  //       window.location.href = 'desktop.html';

  //     } else {
  //       width++; 
  //       elem.style.width = width + '%'; 
        
  //     }
  //   }
  // }

  
  window.onload = setTimeout(move, 1050);
  // window.onload = setTimeout(move, 1000);




