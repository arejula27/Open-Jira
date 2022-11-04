import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
    | {
          message: string;
      }
    | IEntry;

export default function hanlder(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'Id invalido' });
    }

    switch (req.method) {
        case 'GET':
            return getEntry(req, res);
        case 'PUT':
            return updateEntry(req, res);

        default:
            return res.status(400).json({ message: 'El método no existe' });
    }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;
    db.connect();
    const entryFound = await Entry.findById(id);
    if (!entryFound) {
        db.disconnect();
        return res.status(400).json({ message: 'Id no existe' });
    } else {
        await db.disconnect();
        res.status(200).json(entryFound);
    }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;
    db.connect();
    const entryToUpdate = await Entry.findById(id);
    if (!entryToUpdate) {
        db.disconnect();
        return res.status(400).json({ message: 'Id no existe' });
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(
            id,
            {
                description,
                status
            },
            //comprobar que el status es valido
            //devolver el nuevo entry
            { runValidators: true, new: true }
        );

        await db.disconnect();
        res.status(200).json(updatedEntry!);
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status }!);
    }
};
