import { Col, Row, Table, Text, Tooltip} from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderMateriais } from '../components/functions/HeaderCrud'
import ModalButton from '../components/ModalButton'
import { materiaisF } from '../data'


const Materiais = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    if(process.env.REACT_APP_ENV == 'fakeData'){
      setData(materiaisF)
    } else{
      axios.get("http://localhost:8080/api/supplies")
      .then((response) => setData(response.data))
    }
  }, [])

  const columns = [
    { name: 'Nome', key: 'name' },
    { name: 'Preço', key: 'preco' },
    { name: 'Unidade /Preço', key: 'unidade' },
    { name: 'Quantidade', key: 'quantidade'},
    { name: 'Actions', key: 'actions' }
  ]

  const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey]
    switch (columnKey) {
      case 'name':
        return (
          <div className='text-sm'>{data.name}</div>
        )
      case 'preco':
        return (
          <Col>
            <Row>
              <Text b size={16} css={{ tt: "capitalize" }}>R$ {data.pricePerKg},00 </Text>
            </Row>
          </Col>
        )
      case "unidade":
        return (
          <Col>
            <Row css={{gap: "5px"}}>
              <Text b size={13} css={{ tt: "capitalize" }}>por</Text>
              <Text b size={13} css={{ tt: "capitalize", color: "var(--mainColor)" }}>Kg</Text>
            </Row>
          </Col>
        )
      case "quantidade":
        return (
          <Col>
            <Row css={{gap: "5px"}}>
              <Text b size={13} css={{ tt: "capitalize"}}>{data.quantity}</Text>
            </Row>
          </Col>
        )
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Detalhes">
                <ModalButton type='Material' action='detalhes' data={data} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Editar">
                <ModalButton type='Material' action='editar' data={data} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete" color="error">
                <ModalButton type='Material' action='delete' data={data} /> 
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
      <div className='mx-7 my-5 text-lg font-medium'>Materiais</div>
      <HeaderMateriais data={data} />
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
          width: 180px
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

export default Materiais