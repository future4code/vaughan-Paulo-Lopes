import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${ ({completa}) => (completa ? 'line-through' : 'none') };
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas:  [
      {
        id: Date.now(),
        texto: "Estudar",
        complete: true
      },
      {
        id:Date.now(),
        texto: "WarmUp",
        complete: false
      }
    ],
      inputValue: '',
      filtro: ''
    }



  componentDidUpdate () {
    localStorage.setItem("texto", this.state.texto);
  };

  componentDidMount() {
    this.salvarTarefas();
    const tarefaLS = localStorage.getItem("texto") || "";
    
    this.setState({texto: tarefaLS})
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now (),
      texto: this.state.inputValue,
      filtro: false
    }

    const novaListaTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: novaListaTarefas})
  }

  salvarTarefas = () => {
    const tarefa = 
      JSON.parse(localStorage.getItem("historicoTarefas")) || [];
        this.setState({tarefas: tarefa})
  }


  selectTarefa = (tarefasId) => {
    const novaListaTarefas = this.state.tarefas.map((tarefas) => {
      if (tarefasId === tarefas.id) {
        const novaTarefa =  {
          ...tarefas, 
          completa: !tarefas.aba

        }
        return novaTarefa 
      } else {
        return tarefas
      }
    })
    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro === true) {
        case 'pendentes':
          return !tarefa.complete
        case 'completas':
          return tarefa.complete
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (

              <Tarefa completa={tarefa.completa} onClick={() => this.selectTarefa(tarefa.id)}>
                {tarefa.texto}
              </Tarefa>

            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
