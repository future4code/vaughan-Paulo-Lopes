import axios from "axios";
import { Adress } from "../types/Adress";

const baseUrl = "https://viacep.com.br/ws"

export const getAdressInfo = async(cepInfo: string): Promise<any> => {
    try {

        const response = await axios.get(`${baseUrl}/${cepInfo}/json`)
        const adress: Adress = {
            state: response.data.uf,
            city: response.data.localidade,
            district: response.data.bairro,
            street: response.data.logradouro
        }

        return adress

    } catch (error: any) {
        console.log("Unexpected error")
    }
}