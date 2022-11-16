import { modeloReserva} from "../Models/ModeloReserva.js";

export class ServicioReserva {

    async buscarReservas(){
        let reservas = await modeloReserva.find()
        return reservas;
    }

    async buscarRecervaPorId(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }
    async guardarReserva(datos){
        let datosvalidados= new modeloReserva(datos)
        return await datosvalidados.save()
    }
    async editarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async eliminarReserva(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
    
}