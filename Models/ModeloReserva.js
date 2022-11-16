//idHabitacion
//¿Cuando entra?
//¿Cuando sale?
//numeroadultos
//numeroninos
//costoreserva (valorNoche*di)
import mongose from 'mongoose'

const Schema = mongose.Schema;

const EsquemaReserva = new Schema({

    idhabitacion:{
        require:true,
        type:String
    },
    fechaEntrada:{
        require:true,
        type:Date
    },
    fechaSalida:{
        require:true,
        type:Date
    },
    numeroAdultos:{
        require:true,
        type:Number
    },
    numeroNinos:{
        require:true,
        type:Number
    },
    costoreserva:{
        require:false,
        type:Number
    }

})

export const modeloReserva = mongose.model('reserva',EsquemaReserva)