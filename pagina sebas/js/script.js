const botonDescuento = document.getElementById("boton-descuento");

const botonHuevos = document.getElementById("boton-huevos");

const botonLeche = document.getElementById("boton-leche");

const botonPan = document.getElementById("boton-pan");

const botonFrutas = document.getElementById("boton-frutas");

const precioTotalHTML = document.getElementById("precio-total");

const botonPagar = document.getElementById("boton-pagar");

let descuentoOportunidad=1;
let descuento=0;
let precioTotal=0;
botonDescuento.onclick=function(){
    if(descuentoOportunidad==1){
        descuento=Math.random()*100;
        descuento=Math.round(descuento);
        alert(`Tienda Sebas te obsequia un descuento del ${descuento}%`);
        
        descuentoOportunidad=0;
    }else alert(`Usted ya canjeó su descuento y fue del ${descuento}%`)
}
let cantidadHuevos=30;
botonHuevos.onclick=function(){
    const valorHuevos = document.getElementById("input-huevos").value;
    
    if(cantidadHuevos>0 && cantidadHuevos<=30){
        cantidadHuevos=cantidadHuevos-valorHuevos;
        precioTotal=precioTotal+(valorHuevos*15000);
        precioTotalHTML.innerHTML=precioTotal;
    }else alert("No hay unidades de este producto disponibles");
}

let cantidadLeche=20;
botonLeche.onclick=function(){
    const valorLeche = document.getElementById("input-leche").value;
    if(cantidadLeche>0 && cantidadLeche<=20){
        cantidadLeche=cantidadLeche-valorLeche;
        precioTotal=precioTotal+(valorLeche*3500);
        precioTotalHTML.innerHTML=precioTotal;
    }else alert("No hay unidades de este producto disponibles");
}

let cantidadPan=50;
botonPan.onclick=function(){
    const valorPan = document.getElementById("input-pan").value;
    if(cantidadPan>0 && cantidadPan<=50){
        cantidadPan=cantidadPan-valorPan;
        precioTotal=precioTotal+(valorPan*2000);
        precioTotalHTML.innerHTML=precioTotal;
    }else alert("No hay unidades de este producto disponibles");
}

let cantidadFrutas=50;
botonFrutas.onclick=function(){
    const valorFrutas = document.getElementById("input-frutas").value;
    if(cantidadFrutas>0&&cantidadPan<=50){
        cantidadPan=cantidadPan-valorFrutas;
        precioTotal=precioTotal + (valorFrutas*5000);
        precioTotalHTML.innerHTML=precioTotal;
    }else alert("No hay unidades de este producto disponibles");
}
botonPagar.onclick=function(){
    descuento=descuento/100;

    let descuentoFinal= precioTotal*descuento;
    console.log(descuentoFinal);
    precioTotal=precioTotal-descuentoFinal;
    precioTotal=Math.round(precioTotal);
    alert(`Con el descuento de $${descuentoFinal} solo pagaras ${precioTotal}`)
    
}