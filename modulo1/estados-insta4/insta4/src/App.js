import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    publicacoes: [
      {
        nome: "Paulinha",
        fotoUsuario: 'https://picsum.photos/51/51',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nome: "Tarso",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/201/151'
      },
      {
        nome: "Yasmin",
        fotoUsuario: 'https://picsum.photos/52/50',
        fotoPost: 'https://picsum.photos/202/152'
      }
    ]
  };

  adicionaPost = () => {
    
    const novaPublicacao = {
      
      nome: this.state.valorInputPessoa,
      
    };

    
    const novoPost = [...this.state.publicacoes, novaPublicacao];

    
    this.setState({ publicacoes: novoPost });
    this.setState({ valorInputPessoa: "" });

    
    
  };

  onChangeInputPessoa = (event) => {
    
    this.setState({ valorInputPessoa: event.target.value });
  };


  render() {
    
    
    const listaDeComponentes = this.state.publicacoes.map((post) => {
     
      return (
        <MainContainer>
          <Post
          nome = {post.nome}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost} />
        
        </MainContainer>
        
      );
    });

    return (
      <div>
        
        <input

        value={this.state.valorInputPessoa}
        onChange={this.onChangeInputPessoa}
        placeholder={"Nome"}
       
       ></input>
 
        <button onClick={this.adicionaPost}>Crie seu post aqui</button>

        <h4>Role pra baixo</h4>
        
          <div>
            {listaDeComponentes}
          </div>

      </div>

        
    );
  }
}

export default App;
