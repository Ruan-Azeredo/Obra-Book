import { Button, Card } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardDayObra from '../components/CardDayObra'
import { archiveIcon, groupIcon, wrenchIcon } from '../components/icons'
import ModalButton from '../components/ModalButton'

const Relatorio = () => {
  const [acaoFuncionarios, setAcaoFuncionarios] = useState([])
  const [acaoFerramentas, setAcaoFerramentas] = useState([])
  const [acaoMateriais, setAcaoMateriais] = useState([])
  const [obras, setObras] = useState([])
  const [funcionarios, setFuncionarios] = useState([])
  const [ferramentas, setFerramentas] = useState([])
  const [materiais, setMateriais] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/api/workerActions")
    .then((response) => setAcaoFuncionarios(response.data))
    
    axios.get("http://localhost:8080/api/toolActions")
    .then((response) => setAcaoFerramentas(response.data))
    
    axios.get("http://localhost:8080/api/supplyActions")
    .then((response) => setAcaoMateriais(response.data))
    
    axios.get("http://localhost:8080/api/constructions")
    .then((response) => setObras(response.data))
  
    axios.get("http://localhost:8080/api/workers")
    .then((response) => setFuncionarios(response.data))
    
    axios.get("http://localhost:8080/api/tools")
    .then((response) => setFerramentas(response.data))
    
    axios.get("http://localhost:8080/api/supplies")
    .then((response) => setMateriais(response.data))
  }, [])

  var days = []

  var constructions = []
  var arrayFuncionarios = []
  var arrayFerramentas = []
  var arrayMateriais = []

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
  
  obras.map(obra => {
    constructions.push({name: obra.name, value: obra.id})
  })
  
  funcionarios.map(item => {
    arrayFuncionarios.push({name: item.firstName, value: item.id})
  })

  ferramentas.map(item => {
    arrayFerramentas.push({name: item.name, value: item.id})
  })

  materiais.map(item => {
    arrayMateriais.push({name: item.name, value: item.id})
  })

  var obraName
  var na
  var isReport

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
                    <CardDayObra data={item} dia={itemDias}
                      acaoFuncionarios={acaoFuncionarios}
                      acaoFerramentas={acaoFerramentas}
                      acaoMateriais={acaoMateriais}
                      funcionarios={funcionarios}
                      ferramentas={ferramentas}
                      materiais={materiais}
                    />
                </div>
              ))}
              </div>
            </div>
            ))}
        </div>
        <div className='justify-between gap-4 ml-4 flex flex-row'>
          <div className='flex flex-col'>
            <ModalButton type='Funcionário' action='adicionaAcao' data={undefined} constructions={constructions} array={arrayFuncionarios} isReport={false} />
            {acaoFuncionarios.map(item => (
              <div className='mb-4'>
                {
                  obras.map(obra => {
                    if (item.constructionID == obra.id) {
                      obraName = obra.name
                    }
                  })
                }
                {
                  funcionarios.map(worker => {
                    if (item.workerID == worker.id) {
                      na = worker.firstName
                    }
                  })
                }
                {item.isReport == true ? isReport = true : isReport = false}
                <Card isHoverable hidden={isReport} variant="bordered" css={{ w: "160px", padding: "8px", background: "var(--darkGray)", border: "none"}}>
                    <div className='w-fit mx-auto'>{groupIcon}</div>
                    <div className='mt-2'>
                      <div className='font-light text-sm'>
                        <div className='flex justify-between'>
                          <div className='font-medium'>{na}</div>
                          <div className='text-gray-400'>{item.data}</div>
                        </div>
                        <div className='mt-2'>{obraName}</div>
                      </div>
                    </div>
                </Card>
                <div className='flex mt-1 justify-center gap-2'>
                  <ModalButton type='Funcionário' action='detalhesAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                  <ModalButton type='Funcionário' action='editarAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                  <ModalButton type='Funcionário' action='deleteAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                </div>
              </div>
            ))}
          </div>
        
          <div className='flex flex-col'>
            <ModalButton type='Ferramenta' action='adicionaAcao' data={undefined} constructions={constructions} array={arrayFerramentas} isReport={false}/>
            {acaoFerramentas.map(item => (
              <div className='mb-4'>
                {
                  obras.map(obra => {
                    if (item.constructionID == obra.id) {
                      obraName = obra.name
                    }
                  })
                }
                {
                  ferramentas.map(tool => {
                    if (item.toolID == tool.id) {
                      na = tool.name
                    }
                  })
                }
                {item.isReport == true ? isReport = true : isReport = false}
                <Card isHoverable hidden={isReport} variant="bordered" css={{ w: "160px", padding: "8px", background: "var(--darkGray)", border: "none"}}>
                    <div className='w-fit mx-auto'>{wrenchIcon}</div>
                    <div className='mt-2'>
                      <div className='font-light text-sm'>
                        <div className='flex justify-between'>
                          <div className='font-medium'>{na}</div>
                          <div className='text-gray-400'>{item.data}</div>
                        </div>
                        <div className='mt-2'>{obraName}</div>
                      </div>
                    </div>
                </Card>
                <div className='flex mt-1 justify-center gap-2'>
                  <ModalButton type='Ferramenta' action='detalhesAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                  <ModalButton type='Ferramenta' action='editarAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                  <ModalButton type='Ferramenta' action='deleteAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                </div>
              </div>
            ))}
          </div>
        
          <div className='flex flex-col'>
            <ModalButton type='Material' action='adicionaAcao' data={undefined} constructions={constructions} array={arrayMateriais} isReport={false}/>
            {acaoMateriais.map(item => (
              <div className={`mb-4 hidden ${isReport}`}>
                {
                  obras.map(obra => {
                    if (item.constructionID == obra.id) {
                      obraName = obra.name
                    }
                  })
                }
                {
                  materiais.map(suppy => {
                    if (item.supplyID == suppy.id) {
                      na = suppy.name
                    }
                  })
                }
                {/* {item.isReport == true ? setIsReport('') : setIsReport('hidden')} */}
                <Card isHoverable hidden={isReport} variant="bordered" css={{ w: "160px", padding: "8px", background: "var(--darkGray)", border: "none" }}>
                    <div className='w-fit mx-auto'>{archiveIcon}</div>
                    <div className='mt-2'>
                      <div className='font-light text-sm'>
                        <div className='flex justify-between'>
                          <div className='font-medium'>{na}</div>
                          <div className='text-gray-400'>{item.data}</div>
                        </div>
                        <div className='mt-2'>{obraName}</div>
                      </div>
                    </div>
                </Card>
                <div className='flex mt-1 justify-center gap-2'>
                  <ModalButton type='Material' action='detalhesAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                  <ModalButton type='Material' action='editarAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                  <ModalButton type='Material' action='deleteAcao' data={item} constructions={constructions} array={arrayMateriais} isReport={false}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Relatorio