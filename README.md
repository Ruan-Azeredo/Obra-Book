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