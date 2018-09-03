/*esta funcion se ejecutara cuando termine de cargar el sitio*/
$(function (){
  /*tomara todos los elementos que tengan data... y llamar a la funcion tooltip*/
  /*se debe contar con los archivos de jquery, bootstrap y popper para que se ejecute*/
  $(`[data-toggle="tooltip"]`).tooltip()
  })