import { Button, Input, Modal, Switch, Textarea } from "@nextui-org/react"
import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { workerPost } from "../../api/workerPost"
import ObjecttContext from "../../contexts/ObjecttContext"
import { ferramentas, funcionarios, materiais, obras } from "../../data"
import ListBoxComponent from "../ListBoxComponent"

export function FuncionariosModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [firstName, setFirstName] = useState(data == undefined ? null : data.firstName);
    const [lastName, setLastName] = useState(data == undefined ? null : data.lastName);
    const [dailyWage, setDailyWage] = useState(data == undefined ? null : data.dailyWage);
    const [phoneNo, setPhoneNo] = useState(data == undefined ? null : data.phoneNo);
    const [cpf, setCpf] = useState(data == undefined ? null : data.cpf);
    const [age, setAge] = useState(data == undefined ? null : data.age);
    const [type, setType] = useState(data == undefined ? null : data.type);
    const [status, setStatus] = useState(data == undefined ? 0 : data.status);
    const [isAssigned, setisAssigned] = useState(data == undefined ? false : data.isAssigned);
    const [district, setDistrict] = useState(data == undefined ? null : data.district);
    const [street, setStreet] = useState(data == undefined ? null : data.street);
    const [number, setNumber] = useState(data == undefined ? null : data.number);
    const [zip_code, setZipCode] = useState(data == undefined ? null : data.zip_code);

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    let obj = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        dailyWage: dailyWage,
        phoneNo: phoneNo,
        cpf: cpf,
        age: age,
        type: type,
        status: status,
        isAssigned: isAssigned,
        district: district,
        street: street,
        number: number,
        zip_code: zip_code
    }

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, firstName, lastName, dailyWage, phoneNo, cpf, age, type, status, isAssigned, district, street, number, zip_code])


    const handleValueListBox = (value) => {
        setStatus(value.value)
    }

    return (
        <div>
            <Modal.Body>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.firstName}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Nome"
                    onChange={(event)=>setFirstName(event.target.value)}    
                    />
                    <Input
                    initialValue={data == undefined ? null : data.lastName}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Sobrenome"
                    onChange={(event)=>setLastName(event.target.value)}     
                    />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.dailyWage}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    contentLeft="R$"
                    color="primary"
                    size="lg"
                    labelPlaceholder="Salario"  
                    onChange={(event)=>setDailyWage(event.target.value)} 
                    />
                    <Input
                    initialValue={data == undefined ? null : data.phoneNo}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Celular"  
                    onChange={(event)=>setPhoneNo('' + event.target.value)} 
                    />
                </div>
                <div className={`${hidden} pt-8 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.cpf}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="CPF"  
                    onChange={(event)=>setCpf(event.target.value)} 
                    />
                    <Input
                    initialValue={data == undefined ? null : data.age}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Idade"  
                    onChange={(event)=>setAge(event.target.value)} 
                    />
                </div>
                <div className={`${hidden} pt-8 flex gap-6`}>
                    <Input
                    initialValue={data  == undefined ? null : data.type}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Tipo"
                    onChange={(event)=>setType(event.target.value)} 
                    />
                    <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.status} items={[{ name: 'Ativo', value: 1 }, { name: 'Desativo', value: 0 }]} onValueChange={handleValueListBox} />
                </div>
                <div className={`${hidden} pt-2`}>Endereço</div>
                <div className={`${hidden} pt-6 flex gap-3`}>
                    <Input
                    initialValue={data  == undefined ? null : data.district}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Bairro"
                    onChange={(event)=>setDistrict(event.target.value)} 
                    />
                    <Input
                    initialValue={data  == undefined ? null : data.street}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Rua"
                    onChange={(event)=>setStreet(event.target.value)} 
                    />
                </div>
                <div className={`${hidden} pt-8 flex gap-3`}>
                    <Input
                    initialValue={data  == undefined ? null : data.number}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Número"
                    onChange={(event)=>setNumber(event.target.value)} 
                    />
                    <Input
                    initialValue={data  == undefined ? null : data.zip_code}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Código Postal"
                    onChange={(event)=>setZipCode(event.target.value)} 
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}

export function FerramentasModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [name, setName] = useState(data == undefined ? null : data.name);
    const [brand, setBrand] = useState(data == undefined ? null : data.brand);
    const [price, setPrice] = useState(data == undefined ? null : data.price);
    const [averageLifeSpan, setaverageLifeSpan] = useState(data == undefined ? null : data.averageLifeSpan);
    const [provider, setProvider] = useState(data == undefined ? null : data.provider);
    console.log(averageLifeSpan)

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    let obj = {
        id: id,
        name: name,
        brand: brand,
        price: price,
        averageLifeSpan: averageLifeSpan,
        provider: provider
    }

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, name, brand, price, averageLifeSpan, provider])

    return (
        <div>
            <Modal.Body>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.name}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Nome"  
                    onChange={(event)=>setName(event.target.value)}
                    />
                    <Input
                    initialValue={data == undefined ? null : data.brand}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Marca"  
                    onChange={(event)=>setBrand(event.target.value)}
                    />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.price}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    contentLeft="R$"
                    color="primary"
                    size="lg"
                    labelPlaceholder="Preço"  
                    onChange={(event)=>setPrice(event.target.value)}
                    />
                    <Input
                    initialValue={data == undefined ? null : data.averageLifeSpan}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Vida Média"  
                    onChange={(event)=>setaverageLifeSpan(event.target.value)}
                    />
                </div>
                <div className={`${hidden} pt-8 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.provider}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Fornecedor"  
                    onChange={(event)=>setProvider(event.target.value)}
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}

export function MateriaisModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [name, setName] = useState(data == undefined ? null : data.name);
    const [quantity, setQuantity] = useState(data == undefined ? null : data.quantity);
    const [pricePerKg, setPricePerKg] = useState(data == undefined ? null : data.pricePerKg);

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    let obj = {
        id: id,
        name: name,
        quantity: quantity,
        pricePerKg: pricePerKg
    }

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, name, quantity, pricePerKg])

    return (
        <div>
            <Modal.Body>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.name}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Nome"  
                    onChange={(event)=>setName(event.target.value)}
                    />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.quantity}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    contentLeft="R$"
                    color="primary"
                    size="lg"
                    labelPlaceholder="Quantidade"  
                    onChange={(event)=>setQuantity(event.target.value)}
                    />
                    <Input
                    initialValue={data == undefined ? null : data.pricePerKg}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Preço"  
                    onChange={(event)=>setPricePerKg(event.target.value)}
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}

export function ObrasModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [name, setName] = useState(data == undefined ? null : data.name);
    const [clientID, setClientID] = useState(data == undefined ? null : data.clientID);

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    let obj = {
        id: id,
        name: name,
        clientID: clientID
    }

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, name, clientID])

    return (
        <div>
            <Modal.Body>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.name}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Nome"  
                    onChange={(event)=>setName(event.target.value)}
                    />
                    <Input
                    initialValue={data == undefined ? null : data.clientID}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Cliente"  
                    onChange={(event)=>setClientID(event.target.value)}
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}

export function AcaoFuncionariosModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action
    const constructions = props.constructions
    const array = props.array

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [date, setDate] = useState(data == undefined ? null : data.data);
    const [construction, setConstruction] = useState(data == undefined ? null : data.construction);
    const [funcionario, setFuncionario] = useState(data == undefined ? null : data.funcionario);
    const [description, setDescription] = useState(data == undefined ? null : data.description);

    var lock
    if (action == 'detalhesAcao') { lock = true }

    var hidden
    if (action == 'deleteAcao') { hidden = 'hidden' }

    const handleValueListBoxConst = (value) => {
        setConstruction(value.value)
    }

    const handleValueListBoxMater = (value) => {
        setFuncionario(value.value)
    }

    let obj = {
        id: id,
        data: date,
        constructionID: construction,
        workerID: funcionario,
        description: description,
        isReport: props.isReport
    }
    console.log(date)

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, date, construction, funcionario, description])

    return (
        <div>
            <Modal.Body>
            <div className={`${hidden} pt-7 flex gap-3 z-50`}>
                <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.constructionID} items={constructions} onValueChange={handleValueListBoxConst} />
                <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.workerID} items={array} onValueChange={handleValueListBoxMater} />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.data}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Data"  
                    onChange={(event)=>setDate(event.target.value)}
                    />
                </div>
                <div className={`${hidden} mt-8 z-10`}>
                    <Textarea
                        initialValue={data == undefined ? null : data.description}
                        readOnly={lock}
                        bordered
                        fullWidth
                        required
                        color="primary"
                        size="lg"
                        labelPlaceholder="Descrição"
                        onChange={(event)=>setDescription(event.target.value)}
                    />
                </div>
                
            </Modal.Body>
            {footer}
        </div>
    )
}

export function AcaoFerramentasModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action
    const constructions = props.constructions
    const array = props.array

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [date, setDate] = useState(data == undefined ? null : data.data);
    const [construction, setConstruction] = useState(data == undefined ? null : data.construction);
    const [ferramenta, setFerramenta] = useState(data == undefined ? null : data.ferramenta);
    const [description, setDescription] = useState(data == undefined ? null : data.description);

    var lock
    if (action == 'detalhesAcao') { lock = true }

    var hidden
    if (action == 'deleteAcao') { hidden = 'hidden' }

    const handleValueListBoxConst = (value) => {
        setConstruction(value.value)
    }

    const handleValueListBoxMater = (value) => {
        setFerramenta(value.value)
    }

    let obj = {
        id: id,
        data: date,
        constructionID: construction,
        toolID: ferramenta,
        description: description,
        isReport: props.isReport
    }
    console.log(date)

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, date, construction, ferramenta, description])

    return (
        <div>
            <Modal.Body>
            <div className={`${hidden} pt-7 flex gap-3 z-50`}>
                <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.constructionID} items={constructions} onValueChange={handleValueListBoxConst} />
                <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.toolID} items={array} onValueChange={handleValueListBoxMater} />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.data}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Data"  
                    onChange={(event)=>setDate(event.target.value)}
                    />
                </div>
                <div className={`${hidden} mt-8 z-10`}>
                    <Textarea
                        initialValue={data == undefined ? null : data.description}
                        readOnly={lock}
                        bordered
                        fullWidth
                        required
                        color="primary"
                        size="lg"
                        labelPlaceholder="Descrição"
                        onChange={(event)=>setDescription(event.target.value)}
                    />
                </div>
                
            </Modal.Body>
            {footer}
        </div>
    )
}

export function AcaoMateriaisModalBody(props) {
    const { setObjecttGlobal } = useContext(ObjecttContext)

    const data = props.data
    const footer = props.footer
    const action = props.action
    const constructions = props.constructions
    const array = props.array

    const [id, setId] = useState(data == undefined ? null : data.id);
    const [date, setDate] = useState(data == undefined ? null : data.data);
    const [quantity, setQuantity] = useState(data == undefined ? null : data.quantity);
    const [construction, setConstruction] = useState(data == undefined ? null : data.construction);
    const [material, setMaterial] = useState(data == undefined ? null : data.material);
    const [description, setDescription] = useState(data == undefined ? null : data.description);

    var lock
    if (action == 'detalhesAcao') { lock = true }

    var hidden
    if (action == 'deleteAcao') { hidden = 'hidden' }

    const handleValueListBoxConst = (value) => {
        setConstruction(value.value)
    }

    const handleValueListBoxMater = (value) => {
        setMaterial(value.value)
    }

    let obj = {
        id: id,
        data: date,
        quantity: parseInt(quantity),
        constructionID: construction,
        supplyID: material,
        description: description,
        isReport: props.isReport
    }
    console.log(date)
    console.log(quantity)

    useEffect(() => {
        setObjecttGlobal(obj)
    }, [id, date, quantity, construction, material, description])

    return (
        <div>
            <Modal.Body>
            <div className={`${hidden} pt-7 flex gap-3 z-50`}>
                <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.constructionID} items={constructions} onValueChange={handleValueListBoxConst} />
                <ListBoxComponent lock={lock} initialValue={data  == undefined ? null : data.supplyID} items={array} onValueChange={handleValueListBoxMater} />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.data}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Data"  
                    onChange={(event)=>setDate(event.target.value)}
                    />
                    <Input
                    initialValue={data == undefined ? null : data.quantity}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Quantidade"  
                    onChange={(event)=>setQuantity(event.target.value)}
                    />
                </div>
                <div className={`${hidden} mt-8 z-10`}>
                    <Textarea
                        initialValue={data == undefined ? null : data.description}
                        readOnly={lock}
                        bordered
                        fullWidth
                        required
                        color="primary"
                        size="lg"
                        labelPlaceholder="Descrição"
                        onChange={(event)=>setDescription(event.target.value)}
                    />
                </div>
                
            </Modal.Body>
            {footer}
        </div>
    )
}