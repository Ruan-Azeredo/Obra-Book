import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { EyeIcon } from '../components/icons/EyeIcon'
import { DeleteIcon } from '../components/icons/DeleteIcon'
import { EditIcon } from '../components/icons/EditIcon'
import { IconButton } from '../components/icons/IconButton'
import { FuncionariosModalBody, AcaoFuncionariosModalBody, FerramentasModalBody, MateriaisModalBody, AcaoFerramentasModalBody, AcaoMateriaisModalBody, ObrasModalBody } from "./functions/InputsModais";
import { useContext } from "react";
import ObjecttContext from "../contexts/ObjecttContext";
import { workerPost } from "../api/workerPost";
import { workerPut } from "../api/workerPut";
import { workerDelete } from "../api/workerDelete";
import { toolPost } from "../api/toolPost";
import { toolPut } from "../api/toolPut";
import { toolDelete } from "../api/toolDelete";
import { supplyPost } from "../api/supplyPost";
import { supplyPut } from "../api/supplyPut";
import { supplyDelete } from "../api/supplyDelete";
import { constructionPost } from "../api/constructionPost";
import { constructionPut } from "../api/constructionPut";
import { constructionDelete } from "../api/constructionDelete";
import { actionSupplyPost } from "../api/actionSupplyPost";
import { actionSupplyPut } from "../api/actionSupplyPut";
import { actionSupplyDelete } from "../api/actionSupplyDelete";
import { actionWorkerPost } from "../api/actionWorkerPost";
import { actionWorkerPut } from "../api/actionWorkerPut";
import { actionWorkerDelete } from "../api/actionWorkerDelete";
import { actionToolPost } from "../api/actionToolPost";
import { actionToolPut } from "../api/actionToolPut";
import { actionToolDelete } from "../api/actionToolDelete";

export default function ModalButton(props) {
    const { ObjecttGlobal } = useContext(ObjecttContext)

    const action = props.action
    const type = props.type
    const data = props.data
    const constructions = props.constructions
    const array = props.array
    const isReport = props.isReport

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    
    var icon
    var title
    var footer
    var create, update, deleta

    if (type == 'Funcionário' && action == 'adicionaAcao' ||
        type == 'Funcionário' && action == 'detalhesAcao' ||
        type == 'Funcionário' && action == 'editarAcao' ||
        type == 'Funcionário' && action == 'deleteAcao') {
        create = actionWorkerPost
        update = actionWorkerPut
        deleta = actionWorkerDelete
    } else if (type == 'Funcionário') {
        create = workerPost
        update = workerPut
        deleta = workerDelete
    } else if (type == 'Ferramenta' &&
        type == 'Ferramenta' && action == 'adicionaAcao' ||
        type == 'Ferramenta' && action == 'detalhesAcao' ||
        type == 'Ferramenta' && action == 'editarAcao' ||
        type == 'Ferramenta' && action == 'deleteAcao') {
        create = actionToolPost
        update = actionToolPut
        deleta = actionToolDelete
    } else if (type == 'Ferramenta') {
        create = toolPost
        update = toolPut
        deleta = toolDelete
    } else if (type == 'Material' && action == 'adicionaAcao' ||
        type == 'Material' && action == 'detalhesAcao' ||
        type == 'Material' && action == 'editarAcao' ||
        type == 'Material' && action == 'deleteAcao') {
        create = actionSupplyPost
        update = actionSupplyPut
        deleta = actionSupplyDelete
    } else if (type == 'Material') {
        create = supplyPost
        update = supplyPut
        deleta = supplyDelete
    } else if (type == 'Obra') {
        create = constructionPost
        update = constructionPut
        deleta = constructionDelete
    }

    if (action == 'detalhes' || action == 'detalhesAcao') {
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
    } else if (action == 'editar' || action == 'editarAcao') {
        title = 'Editar ' + type
        icon = (
            <IconButton onClick={() => console.log("Edit user", data.id)}>
                <EditIcon size={20} fill="#979797" />
            </IconButton>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto onPress={()=>update(ObjecttGlobal)}>Atualizar</Button>    
            </Modal.Footer>
        )
    } else if(action == 'delete' || action == 'deleteAcao'){
        title = 'Tem certeza que deseja deletar esse ' + type + '?'
        icon = (
            <IconButton onClick={() => console.log("Delete user", data.id)}>
                <DeleteIcon size={20} fill="#FF0080" />
            </IconButton>
        )
        footer = (
            <Modal.Footer>
                <Button auto color="error" onPress={closeHandler}>Fechar</Button>
                <Button auto flat color="error" onPress={()=>deleta(ObjecttGlobal)}>Deletar</Button>    
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
                <Button auto onPress={()=>create(ObjecttGlobal)}>Criar</Button>    
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
                <Button auto onPress={()=>create(ObjecttGlobal)}>Criar</Button>    
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

    } else if (type == 'Obra' && action == 'adiciona' ||
        type == 'Obra' && action == 'detalhes' ||
        type == 'Obra' && action == 'editar' ||
        type == 'Obra' && action == 'delete') {
        body = (
            <ObrasModalBody footer={footer} action={action} data={data} />
        )

    } else if (type == 'Funcionário' && action == 'adicionaAcao' ||
        type == 'Funcionário' && action == 'detalhesAcao' ||
        type == 'Funcionário' && action == 'editarAcao' ||
        type == 'Funcionário' && action == 'deleteAcao') {
        body = (
            <AcaoFuncionariosModalBody footer={footer} action={action} data={data} constructions={constructions} array={array} isReport={isReport}/>
        )
    } else if (type == 'Ferramenta' && action == 'adicionaAcao' ||
        type == 'Ferramenta' && action == 'detalhesAcao' ||
        type == 'Ferramenta' && action == 'editarAcao' ||
        type == 'Ferramenta' && action == 'deleteAcao') {
        body = (
            <AcaoFerramentasModalBody footer={footer} action={action} data={data} constructions={constructions} array={array} isReport={isReport}/>
        )
    } else if (type == 'Material' && action == 'adicionaAcao' ||
        type == 'Material' && action == 'detalhesAcao' ||
        type == 'Material' && action == 'editarAcao' ||
        type == 'Material' && action == 'deleteAcao') {
        body = (
            <AcaoMateriaisModalBody footer={footer} action={action} data={data} constructions={constructions} array={array} isReport={isReport}/>
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
