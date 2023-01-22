import { Card } from '@nextui-org/react'
import React from 'react'
import { acaoFerramentas, acaoFuncionarios, acaoMateriais } from '../data'
import { buildingLibrary, buildingOffice, homeModern } from './icons'

const CardDayObra = (props) => {
    const data = props.data
    const dia = props.dia
    const typeBuilding = data.type

    var funcionariosPerDay = []
    acaoFuncionarios.map(item => {
        if (item.date == dia.date && item.construction_id == data.id) {
            funcionariosPerDay.push(item)
        }
    })

    var ferramentasPerDay = []
    acaoFerramentas.map(item => {
        if (item.date == dia.date && item.construction_id == data.id) {
            ferramentasPerDay.push(item)
        }
    })

    var materiaisPerDay = []
    acaoMateriais.map(item => {
        if (item.date == dia.date && item.construction_id == data.id) {
            materiaisPerDay.push(item)
        }
    })

    var hidden
    if (materiaisPerDay == []) {
        hidden = 'hidden'
    }

    var icon = null
    if (typeBuilding == 'House') {
        icon = homeModern
    } else if (typeBuilding == 'Building') {
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
                <div className='text-gray-400 text-sm mt-[2px] px-3 py-[6px]'>{dia.date}</div>
            </div>
            <Card css={{background: "var(--darkGray)", border: "none", borderRadius: "8px"}}>
                <Card.Body>
                    <div className='flex justify-between'>
                        <div>
                            {funcionariosPerDay.map(item => (
                                <div className='bg-mainColor rounded-full px-3'>{item.employee_name}</div>
                            ))}
                        </div>
                        <div>
                        {ferramentasPerDay.map(item => (
                            <div className='bg-background rounded-full px-3 flex gap-2'>
                                <span className='text-mainColor font-bold'>{item.amount} </span>
                                <span>{item.tool_name}</span>
                            </div>
                        ))}
                        </div>
                        <div>
                        {materiaisPerDay.map(item => (
                            <div className='bg-lightGray rounded-lg px-3 py-1'>
                                <span className='text-mainColor font-semibold'>{item.amount} </span>
                                <span>{item.unit} </span>
                                <div>{item.material_name}</div>
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