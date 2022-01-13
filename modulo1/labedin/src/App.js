import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Dados from './components/Dados/Dados';


function App() {

    

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= "https://i.pinimg.com/originals/6e/50/36/6e5036b0f314873893a1611e44767acd.png" 
          nome="Paulo tarso" 
          descricao="Oi, eu sou o Paulo. Sou um estudante da Labenu. Adoro jogar e ver cortes do Casemito. Curto ouvir uma musiquinha e aprender sobre evolução e filosofia"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <Dados
          imagem='https://www.imagensempng.com.br/wp-content/uploads/2021/09/02-9.png'
          titulo='Email:'
          texto='paulinhodokerokero.potocom.potobr'
        />
        
        <Dados
          imagem='https://www.gov.br/anpd/pt-br/canais_atendimento/arquivos-de-imagem/copy_of_17589.png'
          titulo="Endereço:"
          texto="Rua Safira"
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/180px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
