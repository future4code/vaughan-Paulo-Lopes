import React from "react";
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


export class App extends React.Component {
  state = {
    etapa: 1
  }


atualizarEtapa = () => {
  switch (this.state.etapa) {
    case 1:
      return <Etapa1 />
    case 2:
      return <Etapa2 />
    case 3:
      return <Etapa3 />
    case 4:
      return <Final />
    default:
        return <Final />;
  }
}

onClickEtapa = () => {
  this.setState({etapa:this.state.etapa + 1})
  console.log("Clicou")
}


render() {

  return(
    <div className="container">
      <div>
        {this.atualizarEtapa()}
      </div>
      <div>
      {this.state.etapa !== 4 && (
        <button onClick={this.onClickEtapa}>Continuar</button>
        )}
      </div>
      
    </div>
    
  )

}
}

export default App;

