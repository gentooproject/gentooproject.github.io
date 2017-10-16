var myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
if( navigator.userAgent.match(/X11/i)
  ){
    if(window.prompt('Veo que usas Linux ❤, ¡muy bien! , te invito especialmente a mi sitio ¿Deseas visitarlo?', 'https://pinkhat.rpm.li'))
  location.href='https://pinkhat.rpm.li';
  }
}
 myFunction()
