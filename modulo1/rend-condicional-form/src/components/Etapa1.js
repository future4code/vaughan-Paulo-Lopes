import "./Formulario.css"

function Etapa1 () {
    return (
        <div className="Container">
            <div className="Etapa">
                <div className="Titulo">
                    <h1>Dados Gerais</h1>
                </div>
                <div className="Dados">
                    <h3>1. Qual é o seu nome?</h3>
                    <input placeholder="Nome"></input>
                    <h3>2. Qual é a sua idade?</h3>
                    <input placeholder="Idade"></input>
                    <h3>3. Qual é seu email?</h3>
                    <input placeholder="E-mail"></input>
                    <h3>4. Qual a sua escolaridade?</h3>
                    <select>
                        <option>Ensino médio completo</option>
                        <option>Ensino médio incompleto</option>
                        <option>Ensino superior completo</option>
                        <option>Ensino superior incompleto</option>
                    </select>
                </div>
                <div className="Titulo">
                </div>
        
            </div>
        </div>
    )
}

export default Etapa1