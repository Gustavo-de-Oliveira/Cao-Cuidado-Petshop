import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

interface ResponseType {
	message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<ResponseType>): Promise<void> => {
	const { db } = await connect();

	try {
        const data = await db.collection('users').get();
        res.status(200).send(data); 
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    };

}