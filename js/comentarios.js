window.onload = function() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var ano = fecha.getFullYear();
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    document.getElementById("fecha").value = ano + "-" + mes + "-" + dia;
    document.getElementById("fecha").disabled = true;
}

let comentarios = new Comentarios();
function agregarComentario() {
    let usuario = document.getElementById("usuario").value;
    let comentario = document.getElementById("comentario").value;
    let fecha = document.getElementById("fecha").value;
    comentarios.agregarComentario(usuario, comentario, fecha);
}