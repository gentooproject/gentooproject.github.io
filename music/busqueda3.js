    window.onload = function playlist(){
            var reproductor = document.getElementById("player"),
            videos = ["CurlPink1", "CurlPink2", "CurlPink3","CurlPink4", "CurlPink5", "CurlPink6","CurlPink7", "CurlPink8", "CurlPink9","CurlPink10", "CurlPink11", "CurlPink12","CurlPink13", "CurlPink14", "CurlPink15"],
        info = document.getElementById("info");
     
        info.innerHTML = "" + videos[0] ;
        reproductor.src = videos[0] + ".ogg"; //ejecutor de video

        reproductor.addEventListener("ended", function() {
     var nombreActual = info.innerHTML.split(": ")[0];
     var actual = videos.indexOf(nombreActual); //cargador de video
     actual = actual == videos.length - 1 ? 0 : actual + 1; //reproduce el proximo video
     this.src = videos[actual] + ".ogg"; // coloca el nombre del nuevo video correpondiuentemente a su video respectivo.
     info.innerHTML = "" + videos[actual];
         this.play();
}, false);
}
