let productos = [];

let formulario;

let inputNombre;
let inputPrincipal;
let inputAgregado1;
let inputAgregado2;
let inputAderezo;
let inputPapas;
let inputBebida;
let tabla;
let errores;

class Producto {
    constructor(nombre, principal, agregado1, agregado2, aderezo, papas, bebida){
        this.nombre = nombre;
        this.principal = principal;
        this.agregado1 = agregado1;
        this.agregado2 = agregado2;
        this.aderezo = aderezo;
        this.papas = papas;
        this.bebida = bebida;
    }
}

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("nombre");
    inputPrincipal = document.getElementById("principal");
    inputAgregado1 = document.getElementById("agregado1");
    inputAgregado2 = document.getElementById("agregado2");
    inputAderezo = document.getElementById("aderezo");
    inputPapas = document.getElementById("papas");
    inputBebida = document.getElementById("bebida");
    tabla = document.getElementById("tablaProductos");
    errores = document.querySelector("errores")
    errores.style.display = "none";
}
inicializarElementos()

formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevoProducto = new Producto(inputNombre.value, inputPrincipal.value, inputAgregado1.value, inputAgregado2.value, inputAderezo.value, inputPapas.value, inputBebida.value)
    if(inputNombre.value != "" && inputPrincipal.value != "" && inputAgregado1.value != "" && inputAgregado2.value != "" && inputAderezo.value != "" && inputPapas.value != "" && inputBebida.value != ""){
        productos.push(nuevoProducto)

        productos.reverse()
        limpiarTabla();
        agregarProductosTabla()
        errores.style.display = "none"
        formulario.reset()
    }else{
        errores.style.display = "block"
    }
    
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1)
    }
}

function agregarProductosTabla(){
    productos.forEach(producto => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${producto.nombre} </td>
        <td>${producto.pricipal} </td>
        <td>${producto.agregado1} </td>
        <td>${producto.agregado2} </td>
        <td>${producto.aderezo} </td>
        <td>${producto.papas} </td>
        <td>${producto.bebida} </td>
        `

    tabla.append(filaTabla)

    });
}