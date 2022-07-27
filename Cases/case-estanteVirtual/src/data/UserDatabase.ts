import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    signup = async (user: User) => {
        await this.connection("user_olimpiada")
        .insert({
            id: user.id,
            name: user.name,
            competition: user.competition,
            score: user.score,
            unity: user.unity
        })
    }

    getSwimmingWinners = async(qualifiers: string) => {
        try {
            if(!qualifiers) {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Natação"})
        
                return response
            }
            if(qualifiers === "quarterfinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Natação"})
                .orderBy("score", "asc")
                .limit(8)
        
                return response
            }
            if(qualifiers === "semifinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Natação"})
                .orderBy("score", "asc")
                .limit(4)
        
                return response
            }
            if(qualifiers === "final") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Natação"})
                .orderBy("score", "asc")
                .limit(2)
        
                return response
            }
            if(qualifiers === "winner") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Natação"})
                .orderBy("score", "asc")
                .limit(1)
        
                return response
            }

        }catch (error: any) {
            throw new Error(error.message)
        }
    }
    getRunningWinners = async(qualifiers: string) => {
        try {
            if(!qualifiers) {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Corrida"})
        
                return response
            }
            if(qualifiers === "quarterfinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("score", "asc")
                .limit(8)
        
                return response
            }
            if(qualifiers === "semifinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("score", "asc")
                .limit(4)
        
                return response
            }
            if(qualifiers === "final") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("score", "asc")
                .limit(2)
        
                return response
            }
            if(qualifiers === "winner") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("score", "asc")
                .limit(1)
        
                return response
            }

        }catch (error: any) {
            throw new Error(error.message)
        }
    }
    getDartWinners = async(qualifiers: string) => {
        try {
            if(!qualifiers) {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Dardo"})
        
                return response
            }
            if(qualifiers === "quarterfinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("score", "asc")
                .limit(8)
        
                return response
            }
            if(qualifiers === "semifinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("score", "asc")
                .limit(4)
        
                return response
            }
            if(qualifiers === "final") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("score", "asc")
                .limit(2)
        
                return response
            }
            if(qualifiers === "winner") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("score", "asc")
                .limit(1)
        
                return response
            }

        }catch (error: any) {
            throw new Error(error.message)
        }
    }
    getWinners = async(competition: string, qualifiers: string) => {
        try {
            if(!qualifiers) {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: competition})
        
                return response
            }
            if(qualifiers === "quarterfinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: competition})
                .orderBy("score", "asc")
                .limit(8)
        
                return response
            }
            if(qualifiers === "semifinal") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: competition})
                .orderBy("score", "asc")
                .limit(4)
        
                return response
            }
            if(qualifiers === "final") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: competition})
                .orderBy("score", "asc")
                .limit(2)
        
                return response
            }
            if(qualifiers === "winner") {
                const response = await this.connection("user_olimpiada")
                .select("*")
                .where({competition: competition})
                .orderBy("score", "asc")
                .limit(1)
        
                return response
            }

        }catch (error: any) {
            throw new Error(error.message)
        }
    }
}