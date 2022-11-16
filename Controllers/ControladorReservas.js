import { ServicioHAbitacion } from "../services/ServicioHabitacion.js"
import {ServicioReserva} from "../services/ServicioRecerva.js"
import { Helpers } from "../helpers/Helpers.js"
export class ControladorReservas{
    
    constructor(){}
    
    async buscarReservas(request,response){
        let objserviciorecerva = new ServicioReserva
        try{

            response.status(200).json({
                "mensaje":"Exito buscando datos",
                "datos":await objserviciorecerva.buscarReservas(),
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Error trayendo reservas",
                "datos":null
            })

        }

    }
   async buscarReservaPorId(request,response){
        let objservicioreserva = new ServicioReserva
        let id=request.params.idReserva// recibo el id de la peticion 
        console.log('el id es: '+id)
        try{
            let c = await objservicioreserva.buscarRecervaPorId(id)
            if(c != null){
                response.status(200).json({

                    "mensaje":"Exito en la consulta "+ id, 
                    "datos":c,
                })
            }else{
                response.status(401).json({

                    "mensaje":"Error :"+ id + " no existe la reserva ", 
                    "datos":null
                })
            }
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }

        //response.send("estoy buscando una habitacion por id desde el controlador")
    }
     
    async registrarReserva(request,response){
        let objthelp= new Helpers
        let datosReserva = request.body
        
        
        let objserviciorecerva = new ServicioReserva
        
        let r= await objthelp.validar(datosReserva)
        
         console.log(r)
       // let objetoServicioHabitacion = new ServicioHAbitacion()
        if(r.estado==true){
            // Se guarda la informacion de la reserva
            objserviciorecerva.guardarReserva(r.info)
            response.status(200).json({
                "mensaje": "Exito",
                "datos" : r.info
    
            })
        }else if(r.info=="p"){
            response.status(403).json({
                "mensaje":"La habitacion no puede alvergar mas de "+r.estado+" personas", 
                "datos": null
    
            })
        } else if(r.info=="d"){
            response.status(402).json({
                "mensaje":"Revise las fechas ingresadas. debe recervar de 1 noche en adelante", 
                "datos": null
    
            })
        }else {
            response.status(400).json({ 
                "mensaje":"Error en la consulta"+error, 
                "datos":null
            })
        }
        // try{
        //     let objhabitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idhabitacion)
        //     if(objhabitacion!={}){
        //         let cantidadDiasReservados=(Date.parse(datosReserva.fechaSalida)-Date.parse(datosReserva.fechaEntrada))/60/60/24000
        //         if(cantidadDiasReservados>0){
        //             let cantidadPersonas=datosReserva.numeroAdultos+datosReserva.numeroNinos
        //             if(cantidadPersonas>0&&cantidadPersonas<=objhabitacion.numeroMaximoPersonas){
        //                 let costoReserva=objhabitacion.valorNoche*cantidadDiasReservados;
        //                 datosReserva.costoreserva=costoReserva
        //                 await objserviciorecerva.guardarReserva(datosReserva)
                        
        //                 response.status(200).json({

        //                     "mensaje":"Exito en el registro", 
        //                     "datos": datosReserva
        //                 })

        //             }else{
        //                 response.status(403).json({

        //                     "mensaje":"La habitacion no puede alvergar mas de "+objhabitacion.numeroMaximoPersonas+" personas", 
        //                     "datos": null
        //                 })
        //             }
        //         }else{
        //             response.status(402).json({

        //                 "mensaje":"Revise las fechas ingresadas. debe recervar de 1 dia en adelante", 
        //                 "datos": null
        //             })
        //         }
            
            
        //     }else{
        //         response.status(401).json({

        //             "mensaje":"La habitacion no existe", 
        //             "datos": objhabitacion
        //         })
        //     }
            
           
            
        // }catch(error){

        //     response.status(400).json({
        //         "mensaje":"Error en la consulta"+error, 
        //         "datos":null
        //     })
        // }
       // response.send("estoy agregando desde el controlador")
    }

    async editarReserva(request,response){
        let objserviciorecerva = new ServicioReserva
        let id=request.params.idReserva
        let datosEditar = request.body
        
        let r= await objthelp.validar(datosEditar)
        
         console.log(r)
       // let objetoServicioHabitacion = new ServicioHAbitacion()
        if(r.estado==true){
                objserviciorecerva.editarReserva(id,r)
            response.status(200).json({
                "mensaje": "Exito",
                "datos" : r.info
    
            })
        }else if(r.info=="p"){
            response.status(403).json({
                "mensaje":"La habitacion no puede alvergar mas de "+r.estado+" personas", 
                "datos": null
    
            })
        } else if(r.info=="d"){
            response.status(402).json({
                "mensaje":"Revise las fechas ingresadas. debe recervar de 1 noche en adelante", 
                "datos": null
    
            })
        }else {
            response.status(400).json({ 
                "mensaje":"Error en la consulta"+error, 
                "datos":null
            })
        
       // response.send("estoy editando desde el controlador")
    }
}
    async eliminarReserva(request,response){
        let objserviciorecerva = new ServicioReserva
        let id = request.params.idReserva
        try{
            await objserviciorecerva.eliminarReserva(id)
            response.status(200).json({
                "mensaje":"Exito al eliminar",
                "datos":null
            })

        }catch(error){
            response.status(400).json({
                "mensaje":"Error al eliminar"+error,
                "datos":null
            })
        }

    }
    
}