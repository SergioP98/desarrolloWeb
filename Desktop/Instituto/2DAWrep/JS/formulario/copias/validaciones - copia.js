var nomb  = document.getElementById('nombre');
var ape = document.getElementById('apellido');
var correo = document.getElementById('correo');
var fecContrato = document.getElementById('contrato');
var telef = document.getElementById('movil');
var salario = document.getElementById('salario');
var contra = document.getElementById('password');
var confirContra = document.getElementById('password2');


var errorNombre = document.getElementById('errorNombre');
var errorApellido = document.getElementById('errorApellido');
var errorCorreo = document.getElementById('errorCorreo');
var errorTelef = document.getElementById('errorTelef');
var errorFecContra = document.getElementById('errorFecContra');
var errorSalario = document.getElementById('errorSalario');
var errorContra = document.getElementById('errorContra');
var errorContra2 = document.getElementById('errorContra2');

/*Para nombre*/
nomb.addEventListener("keyup", function () {
	var expreg = /^[A-Za-z]{2,15}$/g;
	if(!expreg.test(nomb.value)){
	 errorNombre.setCustomValidity("Solo letras. Tamaño mínimo: 2. Tamaño máximo: 15");
	} else{
	 errorNombre.setCustomValidity("");
	}
});

/*Para apellido*/
ape.addEventListener("keyup", function () {
	var expreg = /^[A-Za-z]{2,15}$/g;
	if(!expreg.test(ape.value)){
	 errorApellido.setCustomValidity("Solo letras. Tamaño mínimo: 2. Tamaño máximo: 15");
	} else{
	 errorApellido.setCustomValidity("");
	}
});

/*Para correo*/
correo.addEventListener("keyup", function () {
	/*var expreg = /^[^@]+@[^@]+\.[a-zA-Z]{2,2}$/g;*/ /*/^[A-Za-z]$/g;*/
	var expreg = /^[A-Za-z]+@+[pufo]+\.[es]{2,2}$/g;
	if(!expreg.test(correo.value)){
	 errorCorreo.innerHTML = "El correo tiene que acabar en @pufo.es";
	} else{
	 errorCorreo.innerHTML = "";
	}
});

/*Para contrato  */
function comprobarFecha(){
	//genero la fecha actual
    var hoy = new Date();
    var milisegFechHoy = hoy.getTime();
    //fecha introducida
    var fecha = fecContrato.value;
    var separoFecha = fecha.split("-");
    var fechaF = new Date(fecha);
    var milisegFechaF = fechaF.getTime();

    if(Number(separoFecha[0]) < 2000 || fecha == ""){
        errorFecContra.innerHTML="Introduzca una fecha válida no puede ser anterior al año 2000 o estar vacia";
    } else if(milisegFechHoy< milisegFechaF){
        errorFecContra.innerHTML="Introduzca una fecha válida no superior a la fecha actual";
    }else{
        errorFecContra.innerHTML="";
    }
}

/*Para telef*/
telef.addEventListener("keyup", function () {
	var expreg = /^[6|7][0-9]{8}$/g;
	if(!expreg.test(telef.value)){
	 errorTelef.setCustomValidity ("Debe ser un número válido español (9 dígitos que comienzan por 6 o 7)");
	} else{
	 errorTelef.setCustomValidity("");
	}
});

/*Para salario*/
salario.addEventListener("keyup", function() {
    var sal = parseFloat(salario.value);
	if(sal<858.55){
		errorSalario.innerHTML="No puede ser menor que el salario mínimo (858,55€) ";
	}else if(sal>12000){
        errorSalario.innerHTML="No puede ser mayor que el del CEO (12.000€)";
    }else{
	 salario.innerHTML="";
	}
});



contra.addEventListener("keyup", function () {
var expreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,16}$/g;
	if(!expreg.test(contra.value)){
		errorContra.setCustomValidity ("Debe tener al menos ocho caracteres y contener al menos una letra minúscula, una mayúscula, un número y un símbolo");
	}
	else{
	 errorContra.setCustomValidity("");
	}
});

confirContra.addEventListener("keyup", function () {
	if(confirContra.value != contra.value){
		errorContra2.innerHTML= "La contraseña no coincide";
	}
	else{
	 errorContra2.innerHTML="";
	}
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


