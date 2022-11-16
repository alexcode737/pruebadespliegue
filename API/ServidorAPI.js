import express from 'express'

import {rutasPersonalizadas} from '../Routes/rutas.js'

import { conectarConMongo } from '../Database/conexion.js'

import cors from 'cors'

export class ServidorAPI{


    constructor(){
        this.app = express()
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticiones()
    }

    //Metodos de la clase ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("exito encendiendo el servidor: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutasPersonalizadas)
    }

    conectarConBD(){
        conectarConMongo() 
    }

    activarBody(){
        this.app.use(cors())//cors es un protocolo que sirve para comunicar dos servidores
        this.app.use(express.json())//Esto es un midleuesles de express que sirve para activar la lectura de datos en diferentes formatos
    }

}