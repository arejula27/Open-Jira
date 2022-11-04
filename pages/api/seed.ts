import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database'
import { Entry } from '../../models'

type Data = {
    message:string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (process.env.NODE_ENV === "production"){
        //en producción no quieres borrar la bvd
        return res.status(401).json({message:"No tienes acceso a este servicio"})
    } 

    await db.connect()

    await Entry.deleteMany() //eliminar todo
    await Entry.insertMany(seedData.entries)//insertar


    await db.disconnect()

    
    res.status(200).json({ message: "Proceso realizado correctamente" })
}