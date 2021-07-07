const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//cargamos rutas:
const user_routes = require('./routes/user');


app.use(cors({origin: '*', optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convierte a objeto JSON los datos que vienen por http

//cabeceras:


//Rutas base:
app.use('/api', user_routes);


// app.get('/prueba', function (req, res){
//     res.status(200).send({message: 'Bienvenido al backend de ITgest'});
// });

module.exports = app;
