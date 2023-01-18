import { Row } from "@nextui-org/react";
import ModalButton from "../ModalButton";

export default function HeaderFuncionarios() {
    return (
        <div className='bg-mainColor w-[95%] flex mx-auto h-40 z-20 relative rounded-[15px]'>
            <div className="bg-white w-32 m-4 flex flex-col text-center rounded-lg text-background">
                <div className="text-start m-3 font-semibold">Funcionários Ativos:</div>
                <div>
                    <span className="text-3xl text-mainColor font-bold">24</span><span className="text-gray-400 font-medium">/36</span>
                </div>
            </div>
            <ModalButton type='Funcionário' action='adiciona' data={undefined} />
        </div>
    )
}