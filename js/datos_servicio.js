function crearDatos()
{
    var nombre_cliente = document.forms["client_form"]["nombre_cliente"].value;
    var cedula = document.forms["client_form"]["cedula"].value;
    var direccion = document.forms["client_form"]["direccion"].value;
    var telefono = document.forms["client_form"]["telefono"].value;
    var servicio = document.forms["client_form"]["servicio"].value;

    var datos = {
        'nombre_cliente': nombre_cliente,
        'direccion': direccion,
        'cedula': cedula,
        'telefono': telefono,
        'servicio': servicio
    };

    //Solo para visualizar si se crean todos los datos
    console.log(JSON.stringify(datos));    
}