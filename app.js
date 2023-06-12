// // esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// // solo un registro en consola para nosotros.
console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formDollartoYen"
const formDollartoYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen
}

// declaramos una funcion con el mismo nombre "formYenToPound"
const formYenToPound = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
    
}




// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, formDollartoYen, formYenToPound};