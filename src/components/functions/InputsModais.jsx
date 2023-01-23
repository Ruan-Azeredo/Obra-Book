import { Input, Modal, Switch, Textarea } from "@nextui-org/react"
import { ferramentas, funcionarios, materiais, obras } from "../../data"
import ListBoxComponent from "../ListBoxComponent"

export function FuncionariosModalBody(props) {
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
                    initialValue={data == undefined ? null : data.lastName}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Sobrenome"  
                    />
                </div>
                <div className={`${hidden} pt-7 flex gap-3`}>
                    <Input
                    initialValue={data == undefined ? null : data.salary}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    contentLeft="R$"
                    color="primary"
                    size="lg"
                    labelPlaceholder="Salario"  
                    />
                    <Input
                    initialValue={data == undefined ? null : data.phone}
                    readOnly={lock}
                    bordered
                    fullWidth
                    required
                    color="primary"
                    size="lg"
                    labelPlaceholder="Celular"  
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
                    />
                    <ListBoxComponent lock={lock} items={[{name: 'Ativo', value: true}, {name: 'Desativo', value: false}]} />
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
                    />
                </div>
            </Modal.Body>
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