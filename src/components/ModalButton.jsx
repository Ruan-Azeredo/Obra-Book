import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { EyeIcon } from '../components/icons/EyeIcon'
import { DeleteIcon } from '../components/icons/DeleteIcon'
import { EditIcon } from '../components/icons/EditIcon'
import { IconButton } from '../components/icons/IconButton'
import { FuncionariosModalBody, AcaoFuncionariosModalBody, FerramentasModalBody, MateriaisModalBody } from "./functions/InputsModais";

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
    } else if(action == 'adiciona'){
        title = 'Adicione um novo ' + type
        icon = (
            <div className="bg-white text-background px-4 py-[2px] rounded-lg font-medium flex gap-2 text-sm">
                <span className="h-fit flex self-center">
                    Adicionar {type}
                </span>
                <span className="text-xl h-fit flex self-center">
                    +
                </span>
            </div>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto onPress={closeHandler}>Criar</Button>    
            </Modal.Footer>
        )
    } else if (action == 'adicionaAcao') {
        title = 'Adicione uma ação de ' + type
        icon = (
            <div className="bg-mainColor text-white mb-4 px-2 py-1 rounded-lg font-base flex gap-1 text-sm">
                <span className=" h-fit flex self-center">
                    +
                </span>
                <span className="h-fit flex self-center">
                    Ação {type}
                </span>
            </div>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto onPress={closeHandler}>Criar</Button>    
            </Modal.Footer>
        )
    }

    var body
    if (type == 'Funcionário' && action == 'adiciona' ||
        type == 'Funcionário' && action == 'detalhes' ||
        type == 'Funcionário' && action == 'editar' ||
        type == 'Funcionário' && action == 'delete') {
        body = (
            <FuncionariosModalBody footer={footer} action={action} data={data} />
        )

    } else if (type == 'Ferramenta' && action == 'adiciona' ||
        type == 'Ferramenta' && action == 'detalhes' ||
        type == 'Ferramenta' && action == 'editar' ||
        type == 'Ferramenta' && action == 'delete') {
        body = (
            <FerramentasModalBody footer={footer} action={action} data={data} />
        )

    } else if (type == 'Material' && action == 'adiciona' ||
        type == 'Material' && action == 'detalhes' ||
        type == 'Material' && action == 'editar' ||
        type == 'Material' && action == 'delete') {
        body = (
            <MateriaisModalBody footer={footer} action={action} data={data} />
        )

    } else if (type == 'Funcionário' && action == 'adicionaAcao') {
        body = (
            <AcaoFuncionariosModalBody footer={footer} action={action} data={data} />
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
            width="600px"
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
