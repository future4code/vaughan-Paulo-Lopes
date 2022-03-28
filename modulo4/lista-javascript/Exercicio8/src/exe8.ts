function renewWallet (currentYear: number, bornYear: number, emissionYear: number) {
    const age = currentYear - bornYear
    const walletTime = currentYear - emissionYear

    if (age <= 20) {
        console.log("Voce deve renovar sua carteira de 5 em 5 anos")
        if (walletTime >= 5) {
            console.log(`Sua carteira já passou de ${walletTime} anos. Você deve renova-la`)
        } else {
            console.log(`Sua carteira tem menos de ${walletTime} anos, não precisa renovar`)
        }
    } else if (age >= 21 && age <= 50) {
        console.log("Você deve renovar sua carteira de 10 em 10 anos")
        if (walletTime >= 10) {
            console.log(`Sua carteira já passou de ${walletTime} anos. Você deve renova-la`)
        } else {
            console.log(`Sua carteira tem menos de ${walletTime} anos, não precisa renovar`)
        }
    } else if (age >= 51) {
        console.log("Você deve renovar sua carteira de 15 em 15 anos")
    }
}

renewWallet(2022, 1972, 2010)