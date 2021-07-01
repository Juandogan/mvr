const express = require ('express'); 
const app = express(); // API

const path = require ('path')
const bodyParser = require ('body-parser');
const multipart = require ('connect-multiparty');

const morgan = require ('morgan'); // middleware Morgan muestra las peticiones en consola. 
const cors = require ('cors');     // autorizacion de cxn entre servidores
const { mongoose } = require('./database'); //mongodb

var fs = require('fs');
var https = require('https');


const multiPartMiddleware = multipart({
    uploadDir: './subidas'

});
    

    
// CREATE API

app.set('port', process.env.PORT || 3000);  // tomo app e nsu propiedad .set  // paso "port" y process.env.PORT (escucha puerto por defecto)
// sino usa el 3000

// Midlewares
app.use(morgan('dev')); // morgan es una funcion, la pegamos en la propiedad use de app. y pasamos el parametro dev que indica que mostrara el mensaje por consola de desarrollo. 
app.use(express.json()); // habilita para que el servidor entienda formato json, es una propiedad de la dependencia Express.npom
app.use(cors('http://157.230.228.106:4200'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));


app.post('/upload', multiPartMiddleware, (req,res)=>{
    res.json(req.files['archivos'].path    

    );
    console.log(req.files['archivos'].path )    
    
});

// Routes http://
//app.use('/', express.static('client', {redirect:false}))
app.use('/',express.static('client', {redirect:false}));

app.use('/productos',require('./routes/productos.routes'))
app.use('/upload', express.static(path.resolve('./subidas')))


app.get('*', function(req, res, next)
{res.sendFile(path.resolve('client/index.html'));
}) 


const PUERTO = 3002 ;

// Starting server  
 https.createServer({
     cert: fs.readFileSync('museodelavidarural.com.crt'),
     key: fs.readFileSync('museodelavidarural.com.key') 
   },app).listen(PUERTO, function(){
    console.log('Servidor https correindo en el puerto 443');
 });



// Starting server  
app.listen(app.get('port'), () => {console.log("Puerto escuchando en puerto: ", app.get('port'))});    
       

             