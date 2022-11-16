import mongose from 'mongoose';

//ESQUEMA DE DATOS ES UN ESTANDAR DONDE APARECEN SOLO LOS DATOS
//CON LOS QUE EL API VA A TRABAJAR
const Schema = mongose.Schema;
//const ObjectId = Schema.ObjectId;

const EsquemaHabitacion = new Schema({
  
    nombre:{
        required:true,
        type:String
    },
    valorNoche:{
        required:true,
        type:Number
    },
    descripcion:{
        required:true,
        type:String
    },
    fotografias:{
        required:true,
        type:[String]
    },
    numeroMaximoPersonas:{
        required:true,
        type:Number
    }

});

export const modeloHAbitacion = mongose.model('Habitaciones',EsquemaHabitacion)