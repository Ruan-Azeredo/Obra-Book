import { Card } from '@nextui-org/react'
import React from 'react'
import { acaoFerramentas, acaoFuncionarios, acaoMateriais } from '../data'

const CardDayObra = (props) => {
    const data = props.data
    const dia = props.dia

    var funcionariosPerDay = []
    acaoFuncionarios.map(item => {
        if (item.date == dia.date) {
            funcionariosPerDay.push(item)
        }
    })

    var ferramentasPerDay = []
    acaoFerramentas.map(item => {
        if (item.date == dia.date) {
            ferramentasPerDay.push(item)
        }
    })

    var materiaisPerDay = []
    acaoMateriais.map(item => {
        if (item.date == dia.date) {
            materiaisPerDay.push(item)
        }
    })

    return (
        <Card>
            <div>{data.name}</div>
            <div>{dia.date}</div>
            <Card.Body>
                <div>
                    {funcionariosPerDay.map(item => (
                        <div>{item.employee_name}</div>
                    ))}
                </div>
                <div>
                {ferramentasPerDay.map(item => (
                    <div>
                        <span>{item.amount} </span>
                        <span>{item.tool_name}</span>
                    </div>
                ))}
                </div>
                <div>
                {materiaisPerDay.map(item => (
                    <div>
                        <span>{item.amount}</span>
                        <span>{item.unit} </span>
                        <span>{item.material_name}</span>
                    </div>
                ))}
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardDayObra