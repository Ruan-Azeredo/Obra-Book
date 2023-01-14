import { Input, Modal } from "@nextui-org/react"

export default function FuncionariosModalBody(props) {
    const data = props.data
    const footer = props.footer
    const action = props.action

    var lock
    if (action == 'detalhes') { lock = true }
    console.log(data)

    return (
        <div>
            <Modal.Body>
                <Input
                initialValue={data.name}
                readOnly={lock}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nome"
            />
                <Input
                initialValue={data.type}
                readOnly={lock}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Tipo"
            />
            </Modal.Body>
            {footer}
        </div>
    )
}