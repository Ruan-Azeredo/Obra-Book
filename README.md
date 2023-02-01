# Projeto de Dashboard para engenheiro de obras

## Dependencias e instalações do sistema

```bash
npm i axios
npm i react-router-dom
npm i @nextui-org/react
```

- Tailwind.css

## Algumas lógicas do sistema

### CRUDs

#### Pages

Cada CRUD do sistema, possui uma estrutura padrão e que foi feita pensando para que fosse o mais facil/friendly possivel adicionar outras views e CRUDs, dessa forma, vou explicar um de exemplo.

Em cada view, como na **Ferramentas.jsx** possui um estrutura parecida porem independente de tabela, esta tabela foi feita com Next UI e se baseando na propria da documentação.

Puxando data da API: 
```JavaScript
const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/api/tools")
    .then((response) => setData(response.data))
  }, [])
```

Defini as colunas que vão aparecer na frente do CRUD:
```JavaScript
const columns = [
    { name: 'Nome', key: 'name' },
    { name: 'Marca', key: 'marca' },
    { name: 'Vida Média', key: 'vidaMedia' },
    { name: 'Preço', key: 'preco' },
    { name: 'Actions', key: 'actions' }
  ]
```

Vale ressaltar que dentro das celulas, na ultima existem os componentes ModalButton, que será explicado posteriormente

A função que renderiza as celulas da Tabela:
```JavaScript
const renderCell = (data, columnKey) => {
    const cellValue = data[columnKey]
    switch (columnKey) {
      case 'name':
        return (
          <div className='text-sm'>{data.name}</div>
        )
      case 'marca':
        return (
          <div className='text-sm'>{data.brand}</div>
        )
      case 'vidaMedia':
        return (
          <div className='text-sm'>{data.averageLifeSpan} meses de uso</div>
        )
      case 'preco':
        return (
          <Col>
            <Row>
              <Text b size={16} css={{ tt: "capitalize" }}>R$ {data.price},00</Text>
            </Row>
          </Col>
        )
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Detalhes">
                <ModalButton type='Ferramenta' action='detalhes' data={data} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Editar">
                <ModalButton type='Ferramenta' action='editar' data={data} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete" color="error">
                <ModalButton type='Ferramenta' action='delete' data={data} /> 
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue
    }
  }
```

Dentro do **return()** tem o Header, que é um componente que é especifico de cada CRUD, alem da tabela, o < Table > que itera a **data**, e passa as columns definidas anteriormente.

A < Table >:
```JavaScript
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
```

Finalizando a base do primeiro arquivo deste exemplo, Ferramentas.jsx, dentro deste arquivo, como nos dos outros CRUDs, temos componentes, que possuem outros componentes, e que serão explanados na sequencia.

#### Header

Todas as Headers são puxadas de um arquivo chamado HeaderCrud, que que possui varias funções, porem nenhuma *default*, continumando no exemplo do CRUD Ferramentas, temos a seguinte função:

```JavaScript
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
```

Cada função recebe recebe props, de onde basicamente será retirada a data, para que possa ser utilizada em qualquer informações que deve ficar evidente acima da < Table >, neste caso possui apenas a quantidade total de ferramente(a logica é feita neste componente). Também no Header, existe o botão de Adicionar de todos os CRUDs, que chama o componente ModalButton, e é importante ressaltar, que como ele vai acessar a função POST, ele não precisa de nehuma *data*, assim este parametro no header é passado como undefined.

#### ModalButton

Este componente basicamente é o componente de Modal, onde são definidos os Botões e os Modais, neste componete são passados como props:
- *action*, que é a **ação** que vai ser executada, 'detalhes', 'editar', 'delete', 'adiciona'
- *type*, que é a o **tipo**, 'Funcionario', 'Ferramenta', 'Material', ...
- *data*, que são as **infos** que tem em cada linha da tabela, e que em geral é passado para ModalBody.
```JavaScript
<ModalButton type='Ferramenta' action='delete' data={data} />
```

Dentro do componente ModalButton, existem uma serie de condicionais