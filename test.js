// // importar la función sum del archivo app.js
const { sum } = require('./app.js');

// // comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

//     // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//Test Euro to Dollar
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

//Test Dollar to Yens
test("One dollar should be 13632 yens", function(){
    // importo la funcion desde app.js
    const { formDollartoYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(formDollartoYen(127.9)).toBe(13632.008333333335); 
})

//Test Yens to Pound
test("One Yen should be yens 0.53 pounds", function(){
    // importo la funcion desde app.js
    const { formYenToPound} = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(formYenToPound(0.8)).toBe(0.5333333333333334); 
})