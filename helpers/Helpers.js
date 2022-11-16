import { ServicioHAbitacion } from "../services/ServicioHabitacion.js"
export class Helpers {
    async validar(datosReserva){
        let objetoServicioHabitacion = new ServicioHAbitacion()
        try{
            let objhabitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idhabitacion)

                let cantidadDiasReservados=(Date.parse(datosReserva.fechaSalida)-Date.parse(datosReserva.fechaEntrada))/60/60/24000
                if(cantidadDiasReservados>0){
                    let cantidadPersonas=datosReserva.numeroAdultos+datosReserva.numeroNinos
                    if(cantidadPersonas>0&&cantidadPersonas<=objhabitacion.numeroMaximoPersonas){
                        let costoReserva=objhabitacion.valorNoche*cantidadDiasReservados;
                        datosReserva.costoreserva=costoReserva
                        //await objserviciorecerva.guardarReserva(datosReserva)
                        
                        return {"estado":true, "info":datosReserva}

                    }else{
                       return {"estado":objhabitacion.numeroMaximoPersonas, "info":"p"}
                    }
                }else{
                    return {"estado":false, "info":"d"}
                }
            
        }catch(error){

            return error
        }
    }
}