import { Col, Row, Table, Text, Tooltip, User } from '@nextui-org/react'
import React from 'react'
import ModalButton from '../components/ModalButton'
import { StyledBadge } from '../components/StyledBadge'
import { funcionarios } from '../data'

const Funcionarios = () => {

  const columns = [
    { name: 'Nome', key: 'name' },
    { name: 'Celular', key: 'celular' },
    { name: 'Tipo', key: 'tipo' },
    { name: 'Salario', key: 'salario' },
    { name: 'Status', key: 'status' },
    {name: 'Actions', key: 'actions'}
  ]

  const data = funcionarios

  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey]
    switch (columnKey) {
      case 'name':
        return (
          <User
            src={`https://ui-avatars.com/api/?name=${data.name}+${data.lastName}`}
            name={data.name}
            description={data.lastName}
            css={{
              padding: "4px 0"
            }}
          />
        )
      case 'celular':
        return (
          <div className='text-sm'>{data.phone}</div>
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
              <Text b size={16} css={{ tt: "capitalize" }}>R$ {data.salary},00</Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>por dia</Text>
            </Row>
          </Col>
        )
      case 'status':
        return (
          <StyledBadge type={data.status}>{data.status}</StyledBadge>
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
    <div className='text-white w-full p-[15px]'>Funcionarios
      <div className='bg-mainColor w-[95%] grid mx-auto h-48 z-20 relative rounded-[15px]'>
        <ModalButton type='Funcionário' action='adiciona' data={undefined} />
      </div>
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