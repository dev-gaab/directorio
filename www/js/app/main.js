// funcion para obtener los valores enviador por url
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = unescape(decodeURI(hash[1]));
    }
    return vars;
}

/***
* Funcion para salir de la app
***/
function appExit(){
	navigator.notification.confirm(
        "Quieres salir de la aplicación?",
        function (button) {
          if (button==2) {
            navigator.app.exitApp();
          }
        }
        ,
        "EXIT",
        ["Cancel","OK"]
    );
}