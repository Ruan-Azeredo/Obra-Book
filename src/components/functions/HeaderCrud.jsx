import { Row } from "@nextui-org/react";
import ModalButton from "../ModalButton";

export default function HeaderFuncionarios() {
    return (
        <div className='bg-mainColor w-[95%] flex mx-auto z-20 relative rounded-[15px] justify-between'>
            <div className="bg-white m-4 p-3 gap-4 flex text-center rounded-lg text-background">
                <div className="text-start font-semibold flex h-fit self-center">Funcionários Ativos:</div>
                <div>
                    <span className="text-3xl text-mainColor font-bold">24</span><span className="text-gray-400 font-medium">/36</span>
                </div>
            </div>
            <div className='m-4'>
                <ModalButton type='Funcionário' action='adiciona' data={undefined}/>
            </div>
        </div>
    )
}