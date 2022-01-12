import React from 'react';
import './Dados.css';

function Dados(props) {
    return (
        <div className='dados'>
            <img src={ props.imagem }/>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>

    )
}

export default Dados;