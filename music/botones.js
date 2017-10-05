var v = document.getElementsByTagName("audio")[0];
var sound = false;

    boton.addEventListener("click", function(){
      if (!sound) {
        v.play();
        this.innerHTML = "||";
        sound = true;
      } else {
        v.pause();
        this.innerHTML = ">";
        sound = false;
      }
    });
