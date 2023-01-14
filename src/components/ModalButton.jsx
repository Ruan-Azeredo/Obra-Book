import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { EyeIcon } from '../components/icons/EyeIcon'
import { DeleteIcon } from '../components/icons/DeleteIcon'
import { EditIcon } from '../components/icons/EditIcon'
import { IconButton } from '../components/icons/IconButton'

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
    var button

    if (action == 'detalhes') {
        title = 'Detalhes do ' + type
        button = ''
        icon = (
            <IconButton onClick={() => console.log("View user", data.id)}>
                <EyeIcon size={20} fill="#979797" />
            </IconButton>
        ) 
    } else if (action == 'editar') {
        title = 'Editar ' + type
        button = 'Atualizar'
        icon = (
            <IconButton onClick={() => console.log("Edit user", data.id)}>
                <EditIcon size={20} fill="#979797" />
            </IconButton>
        )
    } else {
        title = 'Tem certeza que deseja deletar esse ' + type + '?'
        button = 'Deletar'
        icon = (
            <IconButton onClick={() => console.log("Delete user", data.id)}>
                <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
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
            <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
            />
            {/* <Row justify="space-between">
                <Checkbox>
                <Text size={14}>Remember me</Text>
                </Checkbox>
                <Text size={14}>Forgot password?</Text>
            </Row> */}
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
                Close
            </Button>
            {button != '' ? (
                <Button auto onPress={closeHandler}>
                    {button}
                </Button>    
            ) : null }
            </Modal.Footer>
        </Modal>
    </div>
  );
}
