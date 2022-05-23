import { Request, Response } from "express";
import axios from "axios";
import { getAdressInfo } from "../services/getAdressInfo";

export const getUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const cepInfo = req.params.cep

        const adress = await getAdressInfo(cepInfo)

        res.send(adress)
    } catch (error: any) {
        console.log(error.message)
    }
}
