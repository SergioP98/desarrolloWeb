var cookie = document.cookie;
var nombreCookie="";
if(cookie!=""){
	var loginNomb = document.getElementById('loginNombre');
	nombreCookie = cookie.split("=")[0];
	loginNomb.innerHTML= "Te has registrado con el usuario " + nombreCookie + ", prueba a hacer login.";
}else{
	cookie == "";
}

document.getElementById('submit').addEventListener('click', function(e){
e.preventDefault();
var nombre = document.getElementById('usuario').value;
var contrasenia = document.getElementById('contrasenia').value;
console.log("asafasfas " + getCookie(nombre));

if(getCookie(nombre)==contrasenia){
        setCookie('sesion', nombre);
    	loginNomb.innerHTML= "Bienvenido " + nombre + " te has logueado correctamente.";
    	var boton = document.getElementById("cerrarSesion");
        boton.style.display="block";
    } else {
    	alert('¡Error!. Credenciales Incorrectas');
    }

});


document.getElementById('cerrarSesion').addEventListener('click', function(e){
	location.href='formulario.html';
});


function setCookie(cname, cvalue, exdays) {
    if(exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();

    } else expires = ' ';
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function logoutSesion(cname){
    document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
