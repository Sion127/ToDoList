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

    //Crear una referencia al To Do List, para poder usarla e imprimir los valores del arreglo en la lista desordenada
    //Debe ser fuera del FOR para que no la busque por la cantidad de veces que tengamos en el arreglo
    const To_Do_List = document.getElementById("To-Do-List");
    //Para evitar que los valores se repitan dentro del arreglo de "toDoPendientes", se elimina el contenido HTML que se cuenta 
    To_Do_List.innerHTML = "";
    //Para agreagar los valores del arreglo y  de manera automática los valores podemos agregar al usar un ciclo FOR
    //Para recorrer el arreglo y mostrar en la lista desordenada las TAREAS PENDIENTES POR HACER
    for (let i = 0; i < toDoPendientes.length; i++){
        //Lo que contenga mi variable se le va concatenar nuevo contenido
        To_Do_List.innerHTML += "<li>" + toDoPendientes[i] + "</li>";
    }
    
}