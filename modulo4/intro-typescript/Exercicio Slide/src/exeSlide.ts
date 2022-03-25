function srcCarByBrand (fleet: string[], brand?: string): string[] {
    if (brand === undefined) {
        return fleet
    }

    return fleet.filter ((car => {
        return car === brand
    }))
}

console.log(srcCarByBrand(["Toyota", "Fiat", "Ford", "Ferrari"]))
console.log(srcCarByBrand(["Toyota", "Fiat", "Ford", "Ferrari"], "Ferrari"))