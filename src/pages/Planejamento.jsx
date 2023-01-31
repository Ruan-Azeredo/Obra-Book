import { Button, Card } from '@nextui-org/react'
import React from 'react'
import CardDayObra from '../components/CardDayObra'
import { archiveIcon, groupIcon, wrenchIcon } from '../components/icons'
import ModalButton from '../components/ModalButton'
import { acaoFuncionarios, obras, dias, acaoFerramentas, acaoMateriais } from '../data'

const Planejamento = () => {

  var days = []

  acaoFuncionarios.map(item => {
    if (!days.includes(item.data)) {
      days.push(item.data)
    }
  })

  acaoFerramentas.map(item => {
    if (!days.includes(item.data)) {
      days.push(item.data)
    }
  })

  acaoMateriais.map(item => {
    if (!days.includes(item.data)) {
      days.push(item.data)
    }
  })

  return (
    <div className='text-white w-full p-[15px]'>
      <div className='mx-7 my-5 text-lg font-medium'>Planejamento</div>
      <div className='flex'>
        <div className='w-6/12'>
          {days.map(itemDias => (
            <div key={itemDias}>
              <div>
                {obras.map(item => (
                <div key={item} className='mb-6'>
                  <CardDayObra data={item} dia={itemDias} />
                </div>
              ))}
              </div>
            </div>
            ))}
        </div>
        <div className='justify-between gap-4 ml-4 flex flex-row'>
          <div className='flex flex-col'>
            <ModalButton type='Funcionário' action='adicionaAcao' data={undefined}/>
            {acaoFuncionarios.map(item => (
              <div className='mb-4'>
                <Card isHoverable variant="bordered" css={{ w: "160px", padding: "8px", background: "var(--darkGray)", border: "none"}}>
                    <div className='w-fit mx-auto'>{groupIcon}</div>
                    <div className='mt-2'>
                      <div className='font-light text-sm'>
                        <div className='flex justify-between'>
                          <div className='font-medium'>{item.employee_name}</div>
                          <div className='text-gray-400'>{item.date}</div>
                        </div>
                        <div className='mt-2'>{item.construction_name}</div>
                      </div>
                    </div>
                </Card>
              </div>
            ))}
          </div>
        
          <div className='flex flex-col'>
          <ModalButton type='Ferramenta' action='adicionaAcao' data={undefined}/>
            {acaoFerramentas.map(item => (
              <div className='mb-4'>
                <Card isHoverable variant="bordered" css={{ w: "160px", padding: "8px", background: "var(--darkGray)", border: "none"}}>
                    <div className='w-fit mx-auto'>{wrenchIcon}</div>
                    <div className='mt-2'>
                      <div className='font-light text-sm'>
                        <div className='flex justify-between'>
                          <div className='font-medium'>{item.employee_name}</div>
                          <div className='text-gray-400'>{item.date}</div>
                        </div>
                        <div className='mt-2'>{item.construction_name}</div>
                      </div>
                    </div>
                </Card>
              </div>
            ))}
          </div>
        
          <div className='flex flex-col'>
          <ModalButton type='Material' action='adicionaAcao' data={undefined}/>
            {acaoMateriais.map(item => (
              <div className='mb-4'>
                <Card isHoverable variant="bordered" css={{ w: "160px", padding: "8px", background: "var(--darkGray)", border: "none"}}>
                    <div className='w-fit mx-auto'>{archiveIcon}</div>
                    <div className='mt-2'>
                      <div className='font-light text-sm'>
                        <div className='flex justify-between'>
                          <div className='font-medium'>{item.employee_name}</div>
                          <div className='text-gray-400'>{item.date}</div>
                        </div>
                        <div className='mt-2'>{item.construction_name}</div>
                      </div>
                    </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Planejamento