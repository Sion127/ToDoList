//Primero debemos pensar en capturar el evento de cuando el formulario se está enviando 
//Sea cuando damos click en el botón o damos enter para enviar
//Asignaremos el elemento Formulario a una constante
const formulario = document.getElementById('To-Do-Form');

//Para que tengamos la referencia de nuestros "To Do's" en un futuro y claro imprimirlos dentro de nuestra lista
//Se debe tener en cuenta un espacio en memoria dentro de nuestra aplicación
//Crear un arreglo vacío que almacene las tareas por hacer.
const toDoPendientes = [];

//El evento del FORMULARIO .onSubmit, se tendrá que remplazar.
//Asignando una funsion que busque lo que hay en el cuadro de texto con un  callback que haga referencia al evento que se quiera prevenir hacer por defecto.
//Ese texto deberá tomarlo, guardarlo en una variable o arreglo.
//Y por último limpiar los que se encuentra en el cuadro de texto opara aagregar más tareas
formulario.onsubmit = (e) => {
    //Evitar que el boton haga su funcion por defecto con el método .PREVENTDEFAOUT();
    e.preventDefault();
    //Constante que hace referencia al elemento "ACTION-TO-DO en el HTML"
    const action_To_DO = document.getElementById("action-To-Do");
    //Constante que almacena el texto que contenga el elemento "ACTOION-TO-DO"
    const action_To_DO_Text = action_To_DO.value;
    //Limpiamos el valor de la constante que haga referencia al input "action-To-Do"
    //Con esto veremos que él input se limpia sin necesidad que efectue el evento por defecto de ACTUALIZAR 
    action_To_DO.value = '';
    //Agrgamos el valor de la COSNTANTE que guarda el valor del del INPUT
    toDoPendientes.push(action_To_DO_Text);
}


