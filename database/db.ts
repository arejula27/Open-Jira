import mongoose from "mongoose";


/*
* 0 = disconnected
* 1 = connected
* 2 = connecting
* 3 = disconnecting 
*/


const mongoConection = {
    isConnected: 0,

}

export const connect = async()=>{
    if(mongoConection.isConnected){
        console.log("Estabamos conectados");
        return    
    }

    if (mongoose.connections.length>0){

        //comprobamos que esta creada la conexion
        mongoConection.isConnected = mongoose.connections[0].readyState
        if(mongoConection.isConnected===1){
            console.log("Usando conexion anterior");
            return
        }

        //si no esta en estado conectada quitamos ls conexiones
        await disconnect();
    }

   

    await mongoose.connect(process.env.MONGO_URL || "");
    mongoConection.isConnected=1
    console.log("conetcado a mongo",process.env.MONGO_URL );
    
}


export const disconnect = async ()=>{
    if(process.env.NODE_ENV === "development") return

    if(mongoConection.isConnected===0)return
    await mongoose.disconnect()
    console.log("desconectado");
    
}