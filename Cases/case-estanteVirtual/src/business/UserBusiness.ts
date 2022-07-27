import { idGenerator, userDatabase } from "../types/Classes"

export class UserBusiness {
    signup = async(name: string, competition: string, score: number, unity: string) => {
        if(!name) {
            throw new Error("The name input is missing")
        }
        if(!competition) {
            throw new Error("The competition input is missing")
        }
        if(!score) {
            throw new Error("The score input is missing")
        }
        if(!unity) {
            throw new Error("The unity input is missing")
        }

        const id = idGenerator.generateId()

        await userDatabase.signup({
            id: id,
            name: name,
            competition: competition,
            score: score,
            unity: unity
        })
    }

    getSwimmingWinners = async (qualifiers: string) => {
        if(!qualifiers) {
            throw new Error("The qualifier input is missing/wrong. Try: quarterfinal, semifinal, final, winner")
        }
        const result = await userDatabase.getSwimmingWinners(qualifiers)

        return result
    }

    getRunningWinners = async (qualifiers: string) => {
        if(!qualifiers) {
            throw new Error("The qualifier input is missing/wrong. Try: quarterfinal, semifinal, final, winner")
        }
        const result = await userDatabase.getRunningWinners(qualifiers)

        return result
    }
    getDartWinners = async (qualifiers: string) => {
        if(!qualifiers) {
            throw new Error("The qualifier input is missing/wrong. Try: quarterfinal, semifinal, final, winner")
        }
        const result = await userDatabase.getDartWinners(qualifiers)

        return result
    }
    getWinners = async (competition: string, qualifiers: string) => {
        if(!qualifiers) {
            throw new Error("The qualifier input is missing/wrong. Try: quarterfinal, semifinal, final, winner")
        }
        if(!competition) {
            throw new Error("The competition input is missing/wrong.")
        }
        const result = await userDatabase.getWinners(competition, qualifiers)

        return result
    }
}