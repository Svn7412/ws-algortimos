const primeroLista = document.getElementById("primero");
const botonAgregar = document.getElementById("agregar");
const botonInformeCat = document.getElementById("cPC");
const totalProductos = document.getElementById("tP");
const precioTotal = document.getElementById("final");
const disminuirProducto = document.getElementById("segundo");
const buscarProducto = document.getElementById("iD2");
const aumentarProducto = document.getElementById("aum3");
let almacen = []
botonAgregar.onclick = function () {
    const categoria = document.getElementById("cT").value;
    document.getElementById("cT").value = "";
    const nombreProducto = document.getElementById("nP").value;
    document.getElementById("nP").value = "";
    let precio = document.getElementById("pR").value;
    document.getElementById("pR").value = "";
    precio = parseInt(precio);
    let cantidadDisponible = document.getElementById("cD").value;
    document.getElementById("cD").value = "";
    cantidadDisponible = parseInt(cantidadDisponible);
    let objeto = {
        cT: categoria,
        nP: nombreProducto,
        pR: precio,
        cD: cantidadDisponible,
    }
    if(categoria=="Elija la categoria" && nombreProducto=="" && precio==NaN && cantidadDisponible==NaN){
        alert("complete los campos");
    }else{
        verificar(objeto)
    }
    
}
function verificar(objeto) {
    if (document.getElementById("primero").checked) {
        almacen.unshift(objeto);
        alert("el producto ha sido ubicado de primero en la lista");
    }
    else {
        almacen.push(objeto);
        alert("el producto ha sido agregado");
    }
}
let categoriaT = [];
let categoriaH = [];
let categoriaR = [];
botonInformeCat.onclick = function () {
    categoriaT = almacen.filter(x => x.cT == 'TECNOLOGIA');
    categoriaH = almacen.filter(y => y.cT == 'HOGAR');
    categoriaR = almacen.filter(z => z.cT == 'ROPA');

    alert(`la categoria "tecnologia" tiene: ${categoriaT.length} productos disponibles`);

    alert(`la categoria "hogar" tiene: ${categoriaH.length} productos disponibles`);

    alert(`la categoria "ropa" tiene: ${categoriaR.length} productos disponibles`);
}
totalProductos.onclick = function () {
    categoriaT = almacen.filter(x => x.cT == 'TECNOLOGIA');
    categoriaH = almacen.filter(y => y.cT == 'HOGAR');
    categoriaR = almacen.filter(z => z.cT == 'ROPA');
    let total = categoriaT.length + categoriaH.length + categoriaR.length;
    alert(`la cantidad de productos totales es: ${total}`);
}
precioTotal.onclick = function () {
    let sum = 0;
    almacen.forEach(p => {
        sum += p.pR

    });
    alert(`el precio total de los productos es : ${sum}`)
}

disminuirProducto.onclick = function () {
    const nombreDis = document.getElementById("dis2").value;
    document.getElementById("dis2").value = "";
    let restar = document.getElementById("dis").value;
    document.getElementById("dis").value = "";
    restar = parseInt(restar)
    almacen.forEach(d => {
        if (d.nP == nombreDis) {
            d.cD = d.cD - restar;
            alert(`la cantidad ha disminuido, quedan disponibles: ${d.cD}`);
        }
    });
}
aumentarProducto.onclick = function () {
    const nombreAum = document.getElementById("aum").value;
    document.getElementById("aum").value = "";
    let aumentar = document.getElementById("aum1").value;
    document.getElementById("aum1").value = "";
    aumentar = parseInt(aumentar)
    almacen.forEach(c => {
        if (c.nP == nombreAum) {
            c.cD = c.cD + aumentar;
            alert(`la cantidad aumento, quedan disponibles: ${c.cD}`);
        }
    });
}
buscarProducto.onclick = function () {
    const buscar1 = document.getElementById("iD1").value;
    let decision = false;
    almacen.forEach(b => {

        if (b.nP == buscar1) {
            alert(`el producto :${b.nP} se encuentra en la lista`);
            decision=true;
        }
    });
    if (decision!=true) {
        alert("el producto no existe");
       
    }
}
