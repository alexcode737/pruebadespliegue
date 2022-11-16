import { modeloHAbitacion } from "../Models/ModeloHabitacion.js";

export class ServicioHAbitacion{
    
    //qui programo metodo para cada una de las consultas que quiero hacer en bd 
    async buscarHabitaciones(){
        let habitaciones = await modeloHAbitacion.find()
        return habitaciones;
    }

    async buscarHabitacionPorId(id){
        let habitacion = await modeloHAbitacion.findById(id)
        return habitacion;
    }

    async agregarHabitacionEnBD(datos){
        let datosValidados= new modeloHAbitacion(datos)
        return await datosValidados.save()
    }

    async editarHabitacion(id,datosconlosqueedito){
        
        return await modeloHAbitacion.findByIdAndUpdate(id,datosconlosqueedito)
    }
    async eliminarHabitacion(id){
        return await modeloHAbitacion.findByIdAndDelete(id)
    }

}
