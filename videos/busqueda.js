    window.onload = function playlist(){
            var reproductor = document.getElementById("player"),
            videos = ["video1", "video2", "video3"],
        info = document.getElementById("info");
     
        info.innerHTML = "" + videos[0];
        reproductor.src = videos[0] + ".mp4"; //ejecutor de video

        reproductor.addEventListener("ended", function() {
     var nombreActual = info.innerHTML.split(": ")[0];
     var actual = videos.indexOf(nombreActual); //cargador de video
     actual = actual == videos.length - 1 ? 0 : actual + 1; //reproduce el proximo video
     this.src = videos[actual] + ".mp4"; // coloca el nombre del nuevo video correpondiuentemente a su video respectivo.
     info.innerHTML = "" + videos[actual];
         this.play();
}, false);
}
