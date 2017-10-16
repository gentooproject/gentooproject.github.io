var myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
if( navigator.userAgent.match(/X11/i)
  ){
    if(window.prompt('Veo que usas Linux ❤, ¡muy bien! , te invito especialmente a mi sitio sobre Linux. ¿Deseas visitarlo en este momento?', 'https://daya.cf/go'))
  location.href='https://pinkhat.rpm.li';
  }
}
 myFunction()
