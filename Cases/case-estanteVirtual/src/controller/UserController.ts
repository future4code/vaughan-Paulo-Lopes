import { Request, Response } from "express";
import { userBusiness } from "../types/Classes";

export class UserController {
    signup = async(req: Request, res: Response) => {
        try {
            const {name, competition, score, unity} = req.body
            const response = await userBusiness.signup(name, competition, score, unity)

            res.send("The user was registered in the competition")
        } catch(error:any){
            res.send(error.sqlMessage || error.message)
        }
    }

    getSwimmingWinner = async(req: Request, res: Response) => {
        try {
            const {qualifiers} = req.query as any
            const response = await userBusiness.getSwimmingWinners(qualifiers)

            res.send(response)

        } catch(error:any){
            res.send(error.sqlMessage || error.message)
        }
    }
    getRunningWinner = async(req: Request, res: Response) => {
        try {
            const {qualifiers} = req.query as any
            const response = await userBusiness.getRunningWinners(qualifiers)

            res.send(response)

        } catch(error:any){
            res.send(error.sqlMessage || error.message)
        }
    }
    getDartWinner = async(req: Request, res: Response) => {
        try {
            const {qualifiers} = req.query as any
            const response = await userBusiness.getDartWinners(qualifiers)

            res.send(response)

        } catch(error:any){
            res.send(error.sqlMessage || error.message)
        }
    }
    getWinner = async(req: Request, res: Response) => {
        try {
            const {competition, qualifiers} = req.query as any
            const response = await userBusiness.getWinners(competition, qualifiers)

            res.send(response)

        } catch(error:any){
            res.send(error.sqlMessage || error.message)
        }
    }
    
}