import React from "react";
import "./Chat.css"

export class Chat extends React.Component {
    state = {
        pessoas: [
        {
            nome: "",
            Mensagem: ""
        },
        {
            nome: "",
            Mensagem: ""
        }
        ],
            valorInputPessoa: "",
            valorInputMensagem: ""
        };

adicionaMensagem = () => {
          
    const novaPessoa = {
    nome: this.state.valorInputPessoa,
    Mensagem: this.state.valorInputMensagem
    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];
        this.setState({ pessoas: novoPessoas });
    };
        
    onChangeInputPessoa = (event) => {
        this.setState({ valorInputPessoa: event.target.value });
    };
      
    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };
      
    render() {
        const listaDeComponentes = this.state.pessoas.map((pessoa) => {
          return (
              <div>
                  <span className="Eu">
                    <h3>{pessoa.nome}</h3>
                    <p>{pessoa.Mensagem}</p>
                  </span>
              </div>
            );
          });

        return (
            <div className="Container">
                <div className="Whatslab">
                    <header>

                        <div className='Perfil'>
                            <img className='PerfilUsuario' src='https://static-resource.np.community.playstation.net/avatar_xl/WWS_J/J2084_xl.png'></img>
                                <div>
                                    <img className='IconesDireita' src='https://image.flaticon.com/icons/png/512/100/100754.png'></img>
                                    <img className='IconesDireita' src='https://cdn-icons-png.flaticon.com/512/61/61140.png'></img>
                                </div>
                        </div>

                        <div className='Usuario'>
                            <div className='Destinatario'>
                                <img className='PerfilUsuario' src='https://play-lh.googleusercontent.com/p7rx-TDw8mSXmnN5oreMbOrC6FTumoRsnz8rDxUHL6-7xYtLlzcyj1GS8UKyBx5eJg'></img>
                                <h3>Mário</h3>
                            </div>

                            <div>
                                <img className='IconesDireita' src='https://cdn-icons-png.flaticon.com/512/694/694985.png'></img>
                                <img className='IconesDireita' src='https://cdn-icons-png.flaticon.com/512/61/61140.png'></img>
                            </div>   
                        </div>
                    </header>

                    <nav>
                        <div className='PrimeiroContato'>
                            <img className='PerfilUsuario Separar' src='https://play-lh.googleusercontent.com/p7rx-TDw8mSXmnN5oreMbOrC6FTumoRsnz8rDxUHL6-7xYtLlzcyj1GS8UKyBx5eJg'></img>
                            <h3 className='Separar'>Mário</h3>
                        </div>
                    </nav>

                    <main>
                        <div className="mario">
                            <h3>Mário</h3>
                            <p>Oi, eu sou o Mário! Aquele que tem um jogo na Nintendo! Como vai você?</p>
                        </div>
                        <div className="gambiarra, gambiarra2"></div>
                        {listaDeComponentes}
                         
                    </main>

                    <footer>
                        <div className='Remetente'>
                            <input value={this.state.valorInputPessoa} onChange={this.onChangeInputPessoa} placeholder={"Nome"}></input>
                        </div>

                        <div className='UsuarioMensagem'><div>
                            <img className='IconesFooter' src='https://cdn-icons-png.flaticon.com/512/2340/2340057.png'></img>
                            <img className='IconesFooter' src='https://cdn-icons-png.flaticon.com/512/153/153194.png'></img>
                        </div>

                        <div>
                            <input value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} className='MensagemInput' placeholder='   Mensagem'></input>
                        </div>

                        <div>
                            <button onClick={this.adicionaMensagem}><img className='Enviar' src='https://cdn-icons-png.flaticon.com/512/60/60525.png'></img></button>
                        </div>
                        </div>
                        
                    </footer>
                </div>
                    

                    
            </div>
        );
    }
}
      
export default Chat