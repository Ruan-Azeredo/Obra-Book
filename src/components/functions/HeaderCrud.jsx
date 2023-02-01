import ModalButton from "../ModalButton";

export function HeaderFuncionarios(props) {
    const data = props.data
    var qtTotal = 0
    var qtActive = 0

    data.map(item => {
        qtTotal++
        if(item.status){qtActive++}
    })

    return (
        <div className='bg-mainColor w-[95%] flex mx-auto z-20 relative rounded-[15px] justify-between'>
            <div className="bg-white m-4 p-3 gap-4 flex text-center rounded-lg text-background">
                <div className="text-start font-semibold flex h-fit self-center">Funcionários Ativos:</div>
                <div>
                    <span className="text-3xl text-mainColor font-bold">{qtActive}</span><span className="text-gray-400 font-medium">/{qtTotal}</span>
                </div>
            </div>
            <div className='m-4'>
                <ModalButton type='Funcionário' action='adiciona' data={undefined}/>
            </div>
        </div>
    )
}

export function HeaderFerramentas(props) {
    const data = props.data
    var qtTotal = 0

    data.map(item => {
        qtTotal++
    })

    return (
        <div className='bg-mainColor w-[95%] flex mx-auto z-20 relative rounded-[15px] justify-between'>
            <div className="bg-white m-4 p-3 gap-4 flex text-center rounded-lg text-background">
                <div className="text-start font-semibold flex h-fit self-center">Quantidade de Ferramentas:</div>
                <div>
                    <span className="text-3xl text-mainColor font-bold">{qtTotal}</span>
                </div>
            </div>
            <div className='m-4'>
                <ModalButton type='Ferramenta' action='adiciona' data={undefined}/>
            </div>
        </div>
    )
}

export function HeaderMateriais(props) {
    const data = props.data
    var qtTotal = 0

    data.map(item => {
        qtTotal++
    })

    return (
        <div className='bg-mainColor w-[95%] flex mx-auto z-20 relative rounded-[15px] justify-between'>
            <div className="bg-white m-4 p-3 gap-4 flex text-center rounded-lg text-background">
                <div className="text-start font-semibold flex h-fit self-center">Quantidade de Materiais:</div>
                <div>
                    <span className="text-3xl text-mainColor font-bold">{qtTotal}</span>
                </div>
            </div>
            <div className='m-4'>
                <ModalButton type='Material' action='adiciona' data={undefined}/>
            </div>
        </div>
    )
}

export function HeaderObras(props) {
    const data = props.data
    var qtTotal = 0

    data.map(item => {
        qtTotal++
    })

    return (
        <div className='bg-mainColor w-[95%] flex mx-auto z-20 relative rounded-[15px] justify-between'>
            <div className="bg-white m-4 p-3 gap-4 flex text-center rounded-lg text-background">
                <div className="text-start font-semibold flex h-fit self-center">Quantidade de Obras:</div>
                <div>
                    <span className="text-3xl text-mainColor font-bold">{qtTotal}</span>
                </div>
            </div>
            <div className='m-4'>
                <ModalButton type='Obra' action='adiciona' data={undefined}/>
            </div>
        </div>
    )
}