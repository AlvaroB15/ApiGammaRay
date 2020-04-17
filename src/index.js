const express = require('express');
const app = express();

// Settings  (Con)
app.set('port', process.env.PORT || 3000); // el process.env.port, es para cuando los servicios de la nube te da un puerto predeterminado y tu no debes darle un numero d epuerto
console.log("1");

// Middlewares
app.use(express.json()); // poder acceder a la informacion del json
console.log("2");

// Routes
app.use(require('./routes/song'));
// app.use(require('./routes/album'));
console.log("3");

//Starting the server

app.listen(app.get('port'), ()=>{ // el app.get es para llamar el numero del puerto que se le asigno al puerto bien manualamente, o vien automaticamente por el servicio de la nube (este es para cuando uno despliegue la aplicacion)
    console.log("4");
    console.log('Server on port ', app.get('port'));
    console.log("5");
});
console.log("6");