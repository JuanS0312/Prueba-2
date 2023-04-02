class Comentarios{
    constructor(){
        this.listaComentarios = [];
    }
    agregarComentario(usuario,comentario,fecha){
        const crearComentario = {
            usuario: usuario,
            comentario: comentario,
            fecha: fecha
        };
        if (usuario == "" || comentario == "") {
            alert("Debe ingresar usuario y comentario");
        } else {
        this.listaComentarios.push(crearComentario);
        alert(`Usuario: ${usuario} 
Comentario agregado: ${comentario}`);
        console.log(this.listaComentarios);
        }
    }
    editarComentario(comentarioNum, agregarComentario){
        if(comentarioNum < this.listaComentarios.length && comentarioNum >= 0){
            this.listaComentarios[comentarioNum] = agregarComentario;
            alert("Comentario editado");
            console.log(`Comentario editado en la posicion:   ${comentarioNum}`);	
        }else{
            alert("No existe el comentario");
        }
    }
    eliminarComentario(comentarioNum){
        if(comentarioNum < this.listaComentarios.length && comentarioNum >= 0){
            this.listaComentarios.splice(comentarioNum,1);
            alert("Comentario eliminado");
            console.log(`Comentario eliminado en la posicion: ${comentarioNum}`);	
        }else{
            alert("No existe el comentario");
        }
    }
}