export const funcionarios = [
    {
        id: 1,
        engenheiro_id: 1,
        name: 'Ruan',
        lastName: 'Azeredo',
        salary: 120,
        phone: '(27) 9962-7180',
        type: 'Pedreiro',
        status: true,
        cpf: '167.200.697-05',
        age: 34,
        street: 'Louzival Carvalho',
        district: 'Guriri',
        number: 60,
        zip_code: 29934738
    },
    {
        id: 2,
        name: 'Lazaro',
        lastName: 'Ramos',
        phone: '(27) 9962-7890',
        type: 'Ajudante',
        salary: '90',
        status: false,
    },
    {
        id: 3,
        name: 'Manoel',
        lastName: 'Gomes',
        phone: '(27) 9964-7901',
        type: 'Pintor',
        salary: '130',
        status: true,
    }
]

export const ferramentas = [
    {
        id: 1,
        name: 'Martelete',
        brand: 'Makita',
        price: 3200,
        avarage_life: 30,
        provider: 'Brasão Enhenaria'
    }
]

export const materiais = [
    {
        id: 1,
        name: 'Areia',
        price: 10,
        unit_of_measure_price: 'Kg'
    }
]

export const obras = [
    {
        id: 1,
        client_id: 1,
        client_name: 'Ramon',
        name: 'Casa Ramon',
        type: 'House'
    },
    {
        id: 2,
        client_id: 1,
        client_name: 'Ramon',
        name: 'Predio Ramon',
        type: 'Building'
    },
    {
        id: 3,
        client_id: 1,
        client_name: 'Ramon',
        name: 'Reforma Ramon',
        type: 'Remodeling'
    },
]

export const clientes = [
    {
        id: 1,
        name: 'Ramon',
        cpf: '167.300.695-08',
        phoneNo: '(27) 99602-5732'
    }
]

export const dias = [
    {
        date: '12/10/2021'
    },
    {
        date: '13/10/2021'
    }
]

export const acaoFuncionarios = [
    {
        id: 1,
        employee_id: 1,
        employee_name: 'Ruan',
        construction_id: 1,
        construction_name: 'Casa Ramon',
        date: '12/10/2021',
        description: 'Lorem inpsum, ...'
    },
    {
        id: 2,
        employee_id: 1,
        employee_name: 'Ruan',
        construction_id: 1,
        construction_name: 'Casa Ramon',
        date: '13/10/2021',
        description: 'Lorem inpsum, ...'
    }
]

export const acaoFerramentas = [
    {
        id: 1,
        tool_id: 1,
        tool_name: 'Martelete',
        construction_id: 1,
        construction_name: 'Casa Ramon',
        date: '12/10/2021',
        amount: 2
    }
]

export const acaoMateriais = [
    {
        id: 1,
        material_id: 1,
        material_name: 'Areia',
        construction_id: 1,
        construction_name: 'Casa Ramon',
        date: '12/10/2021',
        amount: 200,
        unit: 'kg'
    }
]