const express = require('express') //Importamos la libreria express
const app = express()//Inicializamos la libreria en una constante
const port = 3000//Definimos el puerto
const router = require('./routes')//Importamos las rutas

//Middlewares --> 
//Obtienen los datos de la peticion antes de que lleguen a nuestra funcion

app.use(express.json())//Permitimos la comucacion a traves de formato JSON
app.use(express.urlencoded({extended: false}))//Permitimos recibir datos de codificacion de formularios


//Utilizamos las rutas
app.use(router)

//Levantamos el servidor de express
app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`))