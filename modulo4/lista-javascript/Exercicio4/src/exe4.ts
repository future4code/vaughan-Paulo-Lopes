type employee = {
    name: string,
    salary: number,
    sector: SECTOR,
    homeOffice: boolean
}

enum SECTOR {
    MARKETING = "Marketing",
    SALES = "Vendas",
    FINANCIAL = "Fincaneiro"
}

const employees: employee[] = [
        { name: "Marcos", salary: 2500, sector: SECTOR.MARKETING, homeOffice: true },
        { name: "Maria" ,salary: 1500, sector: SECTOR.SALES, homeOffice: false},
        { name: "Salete" ,salary: 2200, sector: SECTOR.FINANCIAL, homeOffice: true},
        { name: "João" ,salary: 2800, sector: SECTOR.MARKETING, homeOffice: false},
        { name: "Josué" ,salary: 5500, sector: SECTOR.FINANCIAL, homeOffice: true},
        { name: "Natalia" ,salary: 4700, sector: SECTOR.SALES, homeOffice: true},
        { name: "Paola" ,salary: 3500, sector: SECTOR.MARKETING, homeOffice: true },
        { name: "Paulo" ,salary: 100000, sector: SECTOR.MARKETING, homeOffice: true }
]


function selectedEmployee () {
    employees.filter ((employee) => {
        if (employee.sector === SECTOR.MARKETING && employee.homeOffice === true) {
            const newList = [employee]
            console.table(newList)
        } 
    })
}

selectedEmployee()