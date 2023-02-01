import { Card, Tooltip } from '@nextui-org/react'
import React from 'react'
import { buildingLibrary, buildingOffice, homeModern } from './icons'

const CardDayObra = (props) => {
    const data = props.data
    const dia = props.dia
    const typeBuilding = data.type
    const acaoFuncionarios = props.acaoFuncionarios
    const acaoFerramentas = props.acaoFerramentas
    const acaoMateriais = props.acaoMateriais
    const funcionarios = props.funcionarios
    const ferramentas = props.ferramentas
    const materiais = props.materiais

    var funcionariosPerDay = []
    acaoFuncionarios.map(item => {
        if (item.data == dia && item.constructionID == data.id) {
            funcionariosPerDay.push(item)
        }
    })

    var ferramentasPerDay = []
    acaoFerramentas.map(item => {
        if (item.data == dia && item.constructionID == data.id) {
            ferramentasPerDay.push(item)
        }
    })

    var materiaisPerDay = []
    acaoMateriais.map(item => {
        if (item.data == dia && item.constructionID == data.id) {
            materiaisPerDay.push(item)
        }
    })

    var hidden
    var na

    if (funcionariosPerDay[0] == undefined && ferramentasPerDay[0] == undefined && materiaisPerDay[0] == undefined) {
        hidden = 'hidden'
    }

    var icon = null
    if (typeBuilding == 'Casa') {
        icon = homeModern
    } else if (typeBuilding == 'Predio') {
        icon = buildingOffice
    } else {
        icon = buildingLibrary
    }

    return (
        <div className={`${hidden}`}>
            <div className='bg-darkGray rounded-lg flex justify-between mb-2'>
                <div className='flex'>
                    <div className='rounded-lg bg-background p-1 m-[3px]'>{icon}</div>
                    <div className='py-[6px] px-2'>{data.name}</div>
                </div>
                <div className='text-gray-400 text-sm mt-[2px] px-3 py-[6px]'>{dia}</div>
            </div>
            <Card css={{background: "var(--darkGray)", border: "none", borderRadius: "8px"}}>
                <Card.Body>
                    <div className='flex justify-between'>
                        <div>
                            {funcionariosPerDay.map(item => (
                                <div>
                                    {
                                        funcionarios.map(worker => {
                                            if (item.workerID == worker.id) {
                                            na = worker.firstName
                                            }
                                        })
                                    }
                                    <Tooltip content={item.description}>
                                        <div className='bg-mainColor rounded-full px-3 mb-4'>{na}</div>
                                    </Tooltip>
                                </div>
                            ))}
                        </div>
                        <div>
                        {ferramentasPerDay.map(item => (
                            <div className='bg-background rounded-full px-3 flex gap-2'>
                                {
                                    ferramentas.map(tool => {
                                        if (item.toolID == tool.id) {
                                        na = tool.name
                                        }
                                    })
                                }
                                <span>{na}</span>
                            </div>
                        ))}
                        </div>
                        <div>
                        {materiaisPerDay.map(item => (
                            <div className='bg-lightGray rounded-lg px-3 py-1'>
                                {
                                    materiais.map(supply => {
                                        if (item.supplyID == supply.id) {
                                        na = supply.name
                                        }
                                    })
                                }
                                <span className='text-mainColor font-semibold justify-center flex'>{item.quantity} </span>
                                <div>{na}</div>
                            </div>
                        ))}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardDayObra