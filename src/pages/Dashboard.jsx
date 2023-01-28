import React from 'react'
import { useState } from 'react'
import { funcionarios } from '../data'

const Dashboard = () => {

  // const [mediaN, setMediaN] = useState(0)
  // const [mediaS, setMediaS] = useState(0)

  // funcionarios.map(item => {
  //   setMediaN(mediaN + 1)
  //   setMediaS(mediaS + item.salary)
  // })

  // var mediaTotal = mediaS[1] / mediaN[0]

    return (
      <div className='flex w-full p-[15px]'>
        <div className='w-6/12'>
          <div className='w-[320px] text-sm bg-mainColor rounded-[15px] p-3'>Ola Engenheiro(a), aqui temos algumas métricas que lhe podem ser uteis.</div>
          <div className='mt-5'>
            <div>Fases das Obras</div>
          </div>
        </div>
        <div>
          Média da Diaria dos Funcionarios: R$ 140,00
        </div>
      </div>
    )
}

export default Dashboard