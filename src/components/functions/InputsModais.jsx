import { Input, Modal, Switch } from "@nextui-org/react"

export default function FuncionariosModalBody(props) {
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
                    <Switch className="mx-20"/>
                </div>
                <div className={`${hidden}`}>Endereço</div>
                <div className={`${hidden} pt-8 flex gap-3`}>
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