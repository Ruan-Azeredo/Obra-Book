export const funcionariosF = [
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
    },
    {
        id: 4,
        name: 'Vitor',
        lastName: 'Santos',
        phone: '(27) 92344-7901',
        type: 'Pintor',
        salary: '120',
        status: true,
    },
    {
        id: 4,
        name: 'Marcos',
        lastName: 'Barros',
        phone: '(27) 99004-7342',
        type: 'Pedreiro',
        salary: '110',
        status: false,
    }
]

export const ferramentasF = [
    {
        id: 1,
        name: 'Martelete',
        brand: 'Makita',
        price: 3200,
        avarage_life: 30,
        provider: 'Brasão Enhenaria'
    }
]

export const materiaisF = [
    {
        id: 1,
        name: 'Areia',
        price: 10,
        unit_of_measure_price: 'Kg'
    },
    {
        id: 2,
        name: 'Tijolo',
        price: 8,
        unit_of_measure_price: 'Dezena'
    },
    {
        id: 3,
        name: 'Cimento',
        price: 40,
        unit_of_measure_price: 'Saco'
    },
    {
        id: 4,
        name: 'Brita',
        price: 40,
        unit_of_measure_price: 'Kg'
    }
]

export const obrasF = [
    {
        id: 1,
        client_id: 1,
        client_name: 'Ramon',
        name: 'Casa Ramon',
        type: 'Casa'
    },
    {
        id: 2,
        client_id: 1,
        client_name: 'Ramon',
        name: 'Predio Ramon',
        type: 'Predio'
    },
    {
        id: 3,
        client_id: 1,
        client_name: 'Ramon',
        name: 'Reforma Ramon',
        type: 'Reforma'
    },
]

export const clientesF = [
    {
        id: 1,
        name: 'Ramon Gonçalves',
        cpf: '167.300.695-08',
        phoneNo: '(27) 99602-5732'
    },
]

export const diasF = [
    {
        date: '12/10/2021'
    },
    {
        date: '13/10/2021'
    }
]

export const acaoFuncionariosF = [
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
    },
    {
        id: 3,
        employee_id: 2,
        employee_name: 'Lazaro',
        construction_id: 1,
        construction_name: 'Casa Ramon',
        date: '13/10/2021',
        description: 'Lorem inpsum, ...'
    }
]

export const acaoFerramentasF = [
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

export const acaoMateriaisF = [
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