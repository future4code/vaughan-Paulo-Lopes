import { Request, Response } from "express";
import { getAdressInfo } from "../services/getAdressInfo";

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const {cepInfo, email, password} = req.body
        const adress = await getAdressInfo(cepInfo)

        res.send(adress)
    } catch (error: any) {
        console.log(error.message)
    }
}
