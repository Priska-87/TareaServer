const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.send('¡Hello World!')
});

//SALUDO INICIAL CON PARAMS
app.get('/saludo/:nombre', (req, res) => {
    let nombre = req.params.nombre
    console.log(req.params)
    res.send(`Hola ${nombre}, te damos la bienvenida.`)

})

//PRIMERA RUTA DEBE SUMAR DOS NÚMEROS CON USO DE PARAMS

app.get('/suma/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultado = num1 + num2
    res.status(200).json(`El resultado de la suma es: ${resultado}`);
})

//SEGUNDA RUTA DEBE RESTAR DOS NUMEROS Y SI UNO ES CERO DECIR QUE NO SE PUEDE RESTAR

app.get('/resta/:number1/:number2', (req, res) => {
    let number1 = Number(req.params.number1);
    let number2 = Number(req.params.number2);
    let result = number1 - number2

    if(number1 > 0 & number2 > 0) {
    res.status(200).json(`El resultado de la resta es: ${result}`);
    } else {
        res.status(400).json('No se puede restar 0');
    }   
});

// TERCERA RUTA MOSTRAR NOMBRE Y APELLIDO

app.get('/usuario', (req, res) => {
    let nombre = req.query.nombre
    let apellido = req.query.apellido
    console.log(req.query);
    res.status(200).json(`Bienvenido usuarix: ${nombre}`);
})


app.listen(port, () => {
    console.log(`Levantando servidor en puerto http://localhost:${port}`)
});