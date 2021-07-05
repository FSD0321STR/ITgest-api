const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const CategoriesRouter = require('./controllers/CategoriesRouter')
const FormProductRouter = require('./controllers/FormProductRouter')


//cargamos rutas:
const user_routes = require('./routes/user');
// const ProviderRouter = require('./controllers/ProviderRouter');

app.use(cors({ origin: '*',optionsSuccessStatus: 200 }))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convierte a objeto JSON los datos que vienen por http


//Rutas base:
app.use('/api', user_routes);
// app.use('/product', product_routes)
// app.use('/provider', ProviderRouter);
app.use('/categories', CategoriesRouter);
app.use('/formproduct', FormProductRouter);


app.get('/prueba', function (req, res){
    res.status(200).send({message: 'Bienvenido al backend de ITgest'});
});

module.exports = app;