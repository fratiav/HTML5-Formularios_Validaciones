window.addEventListener("load",validacion,false);

var nombre;

//Validacion  del campo nombre con mensaje personalizado setCustomValidity(). Hay que invalidar el error con setCustomValidity(""); 
function validacion(){
    nombre = document.getElementById("nombreVal");

    nombre.addEventListener("input",validar,false);

    validar();
    start();
}

function validar(){
    if(nombre.value==""){
        nombre.setCustomValidity("Introduce un nombre");
        nombre.style.background="rgba(248, 143, 124, 0.63)";
    }else{
        nombre.setCustomValidity("");
        nombre.style.background="white";
    }
}


//Evento Invalid y objeto Output
var edad, edadOut;

function start(){
    edad = document.getElementById("miedad");
    edadOut = document.getElementById("edadOut");

    edad.addEventListener("change",cambioEdad,false);

    //Este evento genera un objeto llamado "e" error
    document.nuevoform.addEventListener("invalid",validarForm,true);

    document.getElementById("enviarform").addEventListener("click",enviar,false);

    document.nuevoform.addEventListener("input",validar_tiempo_real,false);

    
}

function cambioEdad(){
    edadOut.innerHTML = edad.value;
}

//El elemento e tiene todos los elementos que han incumplido la validacion
function validarForm(e){
    var elemento = e.target;
    elemento.style.background = "red";
}

//Devuelve si la validacion es true o false
function enviar(){
    var correcto = document.nuevoform.checkValidity();

    if(correcto){
        document.nuevoform.submit();
    }
}

//Validacion tiempo real. En e recoge los que no estan validados
function validar_tiempo_real(e){
    var elemento = e.target;

    //Propiedades del validity: valueMissing, patternMismatch, typeMismatch, tooLong, rangeUnderflow, stepMismatch, customError
    if(elemento.validity.valid){
        elemento.style.background = "white";
    }else{
        elemento.style.background = "tomato";
    }
}