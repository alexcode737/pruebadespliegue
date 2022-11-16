import { ServicioHAbitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

    constructor(){}


    async buscarHabitaciones(request,response){
        let objetoServicioHabitacion = new ServicioHAbitacion
        try{
            response.status(200).json({

                "mensaje":"Exito en la consulta", 
                "datos":await objetoServicioHabitacion.buscarHabitaciones(),
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }
        // response.send("estoy buscando habitaciones desde el controlador")

    }

    async buscarHabitacionPorId(request,response){
        let id=request.params.idhabitacion// recibo el id de la peticion 
        let objetoServicioHabitacion= new ServicioHAbitacion()

        console.log('el id es: '+id)
        try{
            response.status(200).json({

                "mensaje":"Exito en la consulta "+id, 
                "datos":await objetoServicioHabitacion.buscarHabitacionPorId(id),
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }

        //response.send("estoy buscando una habitacion por id desde el controlador")
    }

    async registrarHabitacion(request,response){
        let datosHabitacion=request.body//obtengo datos por el body
        let objetoServicioHabitacion= new ServicioHAbitacion()
        
        try{
            console.log(datosHabitacion)
            if(datosHabitacion.numeroMaximoPersonas<=8){
                await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)

                response.status(200).json({

                    "mensaje":"Exito en el registro de la habitacion", 
                    "datos":null
                })

            }else{
                response.status(400).json({
                    "mensaje":"no caben tantas babys", 
                    "datos":null
                })
            }
            
            
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null
            })
        }
       // response.send("estoy agregando desde el controlador")
    }

    async editarHabitacion(request,response){
        let id=request.params.idhabitacion
        let datosEditar = request.body
        let objetoServicioHabitacion= new ServicioHAbitacion()
        console.log(id,datosEditar)
        try{
            await objetoServicioHabitacion.editarHabitacion(id,datosEditar)
            response.status(200).json({

                "mensaje":"Exito Editando a: "+id, 
                "datos": datosEditar
            })
        }catch(error){

            response.status(400).json({
                "mensaje":"Error en la consulta"+error, 
                "datos":null,
            })
        }
       // response.send("estoy editando desde el controlador")
    }

    async eliminarHabitacion(request,response){
        let id = request.params.idhabitacion
        let objetoServicioHabitacion= new ServicioHAbitacion()
        try{
            await objetoServicioHabitacion.eliminarHabitacion(id)
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
/*INVESTIGAR RESPUESTAS HTTP*/
/*TAREA REALIZAR LOS STATUS DE LOS DEMAS CONTROLES*/