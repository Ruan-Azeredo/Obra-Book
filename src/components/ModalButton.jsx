import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { EyeIcon } from '../components/icons/EyeIcon'
import { DeleteIcon } from '../components/icons/DeleteIcon'
import { EditIcon } from '../components/icons/EditIcon'
import { IconButton } from '../components/icons/IconButton'
import FuncionariosModalBody from "./functions/InputsModal";

export default function ModalButton(props) {

    const action = props.action
    const type = props.type
    const data = props.data

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    
    var icon
    var title
    var footer

    if (action == 'detalhes') {
        title = 'Detalhes do ' + type
        icon = (
            <IconButton onClick={() => console.log("View user", data.id)}>
                <EyeIcon size={20} fill="#979797" />
            </IconButton>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>    
            </Modal.Footer>
        )
    } else if (action == 'editar') {
        title = 'Editar ' + type
        icon = (
            <IconButton onClick={() => console.log("Edit user", data.id)}>
                <EditIcon size={20} fill="#979797" />
            </IconButton>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto onPress={closeHandler}>Atualizar</Button>    
            </Modal.Footer>
        )
    } else if(action == 'delete'){
        title = 'Tem certeza que deseja deletar esse ' + type + '?'
        icon = (
            <IconButton onClick={() => console.log("Delete user", data.id)}>
                <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto flat color="error" onPress={closeHandler}>Deletar</Button>    
            </Modal.Footer>
        )
    } else {
        title = 'Adicione um novo ' + type
        icon = (
            <div className="bg-white text-background px-4 py-2 rounded-lg font-semibold">+ {type}</div>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto onPress={closeHandler}>Criar</Button>    
            </Modal.Footer>
        )
    }

    var body
    if (type == 'Funcionário') {
        body = (
            <FuncionariosModalBody footer={footer} action={action} data={data} />
        )
    }

  return (
    <div>
        <button onClick={handler}>
            {icon}
        </button>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
            <Text id="modal-title" b size={18}>
                {title}
            </Text>
            </Modal.Header>
            {body}
        </Modal>
    </div>
  );
}
