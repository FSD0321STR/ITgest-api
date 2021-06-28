var mongoose = require ('mongoose');
var app = require('./app');
var port = process.env.PORT || 8000;
console.log("comienza la app");

const ProviderRouter = require('./controllers/ProviderRouter')

app.use(express.json());
app.use('/provider', ProviderRouter);

mongoose.connect(`mongodb+srv://admin:mongoadmin@itgestcluster.1piwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        console.error(err);
    }else{
        console.log("Se ha conectado a la base de datos correctamente con mongoose");
        app.listen(port, function(){
            console.log("Servidor api rest de TasksApp-Vr escuchando en http://localhost:"+port);
        });
    }
});
