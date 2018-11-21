//clase 4 jquery
//vamos a cambiar el window.onload por document ready
// cambiamos la seleccion de los elementos por jquery
// cambiamos agregar nuevo elemento a la lista (appendChild) por append
// cambiamos textContent por text()
// cambiamos className por addClass
// toggle class con jquery
// nueva funcionalidad de eliminar productos con fadeOut
// cambiar el agregarQuitarClase, agregarClass y quitarClase por toggleClass, addClass, removeClass (verificando con hasClass)
// ver animate de jquery para agregar las animaciones personalizadas
// usamos $(elem).css() para tachar los elementos eliminados
// usamos setTimeout para ocultarlos despues de 1 segundo
// cambiamos los eventos click por click y this de jquery
// cambiamos mouseover y mouseout por hover


var listaSuper = ["leche", "azucar", "sal", "pan", "carne"];
var $lista;

$(document).ready(function() {
  obtenerLista();
  ingresarProducto();
  armarListaSupermercado();
});

function obtenerLista() {
  $lista = $("#lista");
}

function armarListaSupermercado() {
  listaSuper.forEach(function(item) {
    agregarNuevoProductoLista(item);
  });
}

function agregarNuevoProductoLista(producto) {
  if (producto) {
    var nuevoProducto = document.createElement("li");
    $(nuevoProducto).addClass("list-group-item");
    $(nuevoProducto).text(producto);
    agregarEventos(nuevoProducto);
    /* $(nuevoProducto).hide(); */
    $lista.append(nuevoProducto);
    $(nuevoProducto)
      .hide()
      .fadeIn(500);
  }
}

function agregarEventos(producto) {
  $(producto).click(function() {
    $(this).toggleClass("active");  
  });

  $(producto).hover(function() {
    $(this).addClass("sobre");
  });
}

var inputProductoNuevo;
function ingresarProducto() {
  inputProductoNuevo = $("#myinput");
}

function agregarNuevoProducto() {
  console.log(inputProductoNuevo);
  agregarNuevoProductoLista(inputProductoNuevo.val());
  inputProductoNuevo.val("");
}

function eliminarProductos() {
  $lista.children().each(function(index, hijo) {
    if ($(hijo).hasClass("active")) {
      $(hijo).css("text-decoration", "line-through");
      setTimeout(function() {
        $(hijo).slideUp(500);
      }, 1000);
    }
  });
}


