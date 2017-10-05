var player = false;
var canvas = false;
var context = false;
var paused = false;
 
var updateCanvas = function(percent){
    //Obtenemos la anchura del canvas
    var w = canvas.width * percent / 100;
 
    //Dibujamos un rectángulo relleno de blanco (limpiamos la imagen)
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);
 
    //Dibujamos un rectángulo de relleno gris 
    context.fillStyle = "#262732";
    context.fillRect(0, 0, w, canvas.height);
 
    //Lo envolvemos con una caja de color naranja
    context.strokeStyle = "#262732";
    context.strokeRect(0, 0, canvas.width, canvas.height);
}
 
var canvasClicked = function(event){
    //Hacemos una regla de tres para colocar el timer del reproductor 
    //en un tiempo directamente proporcional a la zona que hemos pinchado
    player.currentTime = player.duration * event.offsetX / canvas.width;
}
 
//Convierte segundos (double) a hh:mm:ss
var toHMS = function(it){
    if(isNaN(it)){
        return "00:00:00";
    }
 
    var hours = parseInt(it / 3600);
    var minutes = parseInt((it % 3600) / 60);
    var seconds = parseInt((it % 3600) % 60);
 
    return ((hours<10?"0"+hours:hours) + ":" + (minutes<10?"0"+minutes:minutes) + ":" + (seconds<10?"0"+seconds:seconds));
}
 
var pause = function(){
    //Pausamos la reproducción
    player.pause();
    paused = true;
 
    //Escondemos el pause y mostramos el play
    $('#pause').hide(); $('#play').show();
}
 
var play = function(){
    //Iniciamos la reproducción
    player.play();
    paused = false;
 
    //Escondemos el play y mostramos el pause
    $('#play').hide(); $('#pause').show();
}
 
var updateTimes = function(){
    //Actualizamos el display de tiempo transcurrido
    $('#currentTime').html(toHMS(player.currentTime));
     
    //La línea se rellenará con el porcentaje de tiempo transcurrido
    updateCanvas(parseInt(player.currentTime * 100 / player.duration));     
}
 
var addVol = function(inc){
    //Añadimos un incremento al volumen actual
    player.volume+= inc;
 
    //Actualizamos el display de volumen
    $('#vol').html(parseInt(player.volume*100));
}
 
//
var init = function(){
    //Inicializamos el player
    player = document.getElementById('player');
 
    //Asociamos eventos a los botones de play y pause
    $('#play').click(play);
    $('#pause').click(pause);
    $('#volUp').click(function() { addVol(0.1) } );
    $('#volDown').click(function(){ addVol(-0.1) });
 
    //Definimos la duración de la pista de audio, así como el valor del volumen (de 0 a 100)
    $('#duration').html(toHMS(player.duration));
    $('#vol').html(parseInt(player.volume*100));
 
    //Actualizamos cada 100ms
    setInterval(function(){ updateTimes(); }, 100);
 
    //Inicializamos el canvas
    canvas = document.getElementById('timer');  
    $('#timer').click(canvasClicked);
    context = canvas.getContext('2d');
};
 
$(document).ready(function(){
    $('.audio_control').click(function(event){
        event.preventDefault(); //Evitamos que se mueva la ventana al hacer clic en los enlaces
    });
 
    $('#player').bind('loadedmetadata', init); //Lanzamos la función init cuando se hayan cargado los metadatos
 
});
