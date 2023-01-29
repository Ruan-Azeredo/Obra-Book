import { Button, Input, Modal, Switch, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { workerPost } from "../../api/workerPost"
import { ferramentas, funcionarios, materiais, obras } from "../../data"
import ListBoxComponent from "../ListBoxComponent"

export function FuncionariosModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

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
                    <ListBoxComponent lock={lock} items={[{ name: 'Ativo', value: 1 }, { name: 'Desativo', value: 0 }]} onValueChange={handleValueListBox} />
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
            <Button onClick={() => {
                console.log(obj)
                workerPost(obj)
            }}>Console.log</Button>
            {footer}
        </div>
    )
}

export function FerramentasModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

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
                    />
                    <Input
                    initialValue={data == undefined ? null : data.avarage_life}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Vida Média"  
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
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}

export function MateriaisModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

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
                    />
                    <Input
                    initialValue={data == undefined ? null : data.unit_of_measure_price}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Unidade de Medida"  
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}

export function AcaoFuncionariosModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    return (
        <div>
            <Modal.Body>
            <div className={`${hidden} pt-7 flex gap-3 z-50`}>
                <ListBoxComponent items={funcionarios} />
                <ListBoxComponent items={obras} />
            </div>
                <div className="mt-8 z-10">
                    <Textarea
                        initialValue={data == undefined ? null : data.description}
                        readOnly={lock}
                        bordered
                        fullWidth
                        required
                        color="primary"
                        size="lg"
                        labelPlaceholder="Descrição"
                    />
                </div>
                
            </Modal.Body>
            {footer}
        </div>
    )
}

export function AcaoFerramentasModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    return (
        <div>
            <Modal.Body>
            <div className={`${hidden} pt-7 flex gap-3 z-50`}>
                <ListBoxComponent items={ferramentas} />
                <ListBoxComponent items={obras} />
            </div>
                <div className="mt-8 z-10">
                    <Textarea
                        initialValue={data == undefined ? null : data.description}
                        readOnly={lock}
                        bordered
                        fullWidth
                        required
                        color="primary"
                        size="lg"
                        labelPlaceholder="Descrição"
                    />
                </div>
                
            </Modal.Body>
            {footer}
        </div>
    )
}

export function AcaoMateriaisModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

    var lock
    if (action == 'detalhes') { lock = true }

    var hidden
    if (action == 'delete') { hidden = 'hidden' }

    return (
        <div>
            <Modal.Body>
            <div className={`${hidden} pt-7 flex gap-3 z-50`}>
                <ListBoxComponent items={materiais} />
                <ListBoxComponent items={obras} />
            </div>
                <div className="mt-8 z-10">
                    <Textarea
                        initialValue={data == undefined ? null : data.description}
                        readOnly={lock}
                        bordered
                        fullWidth
                        required
                        color="primary"
                        size="lg"
                        labelPlaceholder="Descrição"
                    />
                </div>
                
            </Modal.Body>
            {footer}
        </div>
    )
}