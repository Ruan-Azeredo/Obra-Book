import { Input, Modal } from "@nextui-org/react"

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
                <div className={`${hidden} pt-7`}>
                    <Input
                    initialValue={data == undefined ? null : data.name}
                    readOnly={lock}
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    labelPlaceholder="Nome"  
                    />
                </div>
                <div className={`${hidden} pt-7`}>
                    <Input
                    initialValue={data  == undefined ? null : data.type}
                    readOnly={lock}
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    labelPlaceholder="Tipo"
                    />
                </div>
            </Modal.Body>
            {footer}
        </div>
    )
}