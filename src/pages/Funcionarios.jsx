import { Col, Row, Table, Text, Tooltip, User } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderFuncionarios } from '../components/functions/HeaderCrud'
import ModalButton from '../components/ModalButton'
import { StyledBadge } from '../components/StyledBadge'
import { funcionariosF } from '../data'

const Funcionarios = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    console.log(process.env)
    if(process.env.REACT_APP_ENV == 'fakeData'){
      setData(funcionariosF)
    } else{
      axios.get("http://localhost:8080/api/workers")
      .then((response) => setData(response.data))
    }
  }, [])

  const columns = [
    { name: 'Nome', key: 'name' },
    { name: 'Celular', key: 'celular' },
    { name: 'Tipo', key: 'tipo' },
    { name: 'Salario', key: 'salario' },
    { name: 'Status', key: 'status' },
    {name: 'Actions', key: 'actions'}
  ]

  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey]
    switch (columnKey) {
      case 'name':
        return (
          <User
            src={`https://ui-avatars.com/api/?name=${data.firstName}+${data.lastName}`}
            name={data.firstName}
            description={data.lastName}
            css={{
              padding: "4px 0"
            }}
          />
        )
      case 'celular':
        return (
          <div className='text-sm'>{data.phoneNo}</div>
        )
      case 'tipo':
        return (
            <div className='border-mainColor border-solid border-2 rounded-full px-6 py-1 text-sm w-fit'>
              {data.type}
            </div>
        )
      case 'salario':
        return (
          <Col>
            <Row>
              <Text b size={16} css={{ tt: "capitalize" }}>R$ {data.dailyWage},00</Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>por dia</Text>
            </Row>
          </Col>
        )
      case 'status':
        var state
        data.status == true ? state = 'Ativo' : state = 'Desativo'
        return (
          <StyledBadge type={state}>{state}</StyledBadge>
        )
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Detalhes">
                <ModalButton type='Funcionário' action='detalhes' data={data} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Editar">
                <ModalButton type='Funcionário' action='editar' data={data} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete" color="error">
                <ModalButton type='Funcionário' action='delete' data={data} /> 
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue
    }
  }

  return (
    <div className='text-white w-full p-[15px]'>
      <div className='mx-7 my-5 text-lg font-medium'>Funcionarios</div>
      <HeaderFuncionarios data={data} />
      <div className='relative -top-14 z-10'>
        <Table
          aria-label="Example table with custom cells"
        css={{
        height: "auto",
        minWidth: "100%",
        background: "var(--darkGray)"
          }}
          borderWeight="none"
          headerLined={true}
          lineWeight="none"
          color='primary'
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.key}
                hideHeader={column.key === "actions"}
                align={column.key === "actions" ? "center" : "start"}
                
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={data}>
            {(item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell css={{
                    background: "var(--lightGray)",
                    
                  }}>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      <style jsx>{`
        td:first-child,
        th:first-child {
          border-radius: 20px 0 0 20px;
        }

        td:last-child,
        th:last-child {
          border-radius: 0 20px 20px 0;
        }

        table{
          border-collapse:separate;
          border-spacing: 0 15px !important; 
        }

        thead{
          position: relative;
          top: 30px;
          left: 3px
        }

      `}</style>
    </div>
  )
}

export default Funcionarios