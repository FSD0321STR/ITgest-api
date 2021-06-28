const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://dbITgestion:${process.env.MONGODB_PASSWORD}@cluster0.seyh6.mongodb.net/ITgest?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect(`mongodb+srv://dbITgestion:${process.env.MONGODB_PASSWORD}@cluster0.seyh6.mongodb.net/ITgest?retryWrites=true&w=majority`, (err, res) => {
// 	if(err){
// 		throw err;
// 	}else{
// 		console.log("La conexión a la base de datos está funcionando correctamente...");

// 		app.listen(port, function(){
// 			console.log("Servidor del api rest de musica escuchando en http://localhost:"+port);
// 		});
// 	}
// });

