const form= document.getElementById("informacion");
    form.addEventListener("submit",function (agregar) {
       agregar.preventDefault();
       let datosform = new FormData(form);
       let miArrayObjeto = dato_a_Obj(datosform);
       guardarMiArrayObjeto(miArrayObjeto);
       insertardatos(miArrayObjeto);       
       form.reset();
    }
    )
    //Evento de escucha de Document Object Model
    //Se inicia cuando el contenido de la pagina finaliza
    document.addEventListener("DOMContentLoaded", function(carga){      
        let cargaDeArrayObj = JSON.parse(localStorage.getItem("datos_Array"))
        cargaDeArrayObj.forEach(function(elementoArray) {
            insertardatos(elementoArray);
        });
        
    })

    function dato_a_Obj(datosform){
        let txtTitulo = datosform.get("txtTitulo");
        let txtAreaDescripcion = datosform.get("txtAreaDescripcion");
        let sTipos = datosform.get("sTipos");
        return{
            "txtTitulo":txtTitulo,
            "txtAreaDescripcion":txtAreaDescripcion,
            "sTipos":sTipos
        }
    }

    function insertardatos(miArrayObjeto){
        let tablaregistros = document.getElementById("registros");

       let filatablaregistro = tablaregistros.insertRow(-1);

       let celdatablaregistro = filatablaregistro.insertCell(0);
       celdatablaregistro.textContent = miArrayObjeto["txtTitulo"];

       celdatablaregistro = filatablaregistro.insertCell(1);
       celdatablaregistro.textContent = miArrayObjeto["txtAreaDescripcion"];

       celdatablaregistro = filatablaregistro.insertCell(2);
       celdatablaregistro.textContent = miArrayObjeto["sTipos"];
     }

     function guardarMiArrayObjeto(miArrayObjeto){
        //Creamos el Array de datos
        let arrayDeDatosGuardados = JSON.parse(localStorage.getItem("datos_Array")) || [];
        //Agregamos los datos de mi array objeto a mi array de datos guardados
        arrayDeDatosGuardados.push(miArrayObjeto);
        //Convierto mi array de datos a JSON
        let miArrayDeDatosGuardadosJSON =JSON.stringify(arrayDeDatosGuardados);
        //Guardo mi array de datos en formato JSON en local Storage
        localStorage.setItem("datos_Array",miArrayDeDatosGuardadosJSON);

     }
    
