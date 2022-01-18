import "./Formulario.css"

function Etapa3 () {
    return (
        <div className="Container">
            <div className="Etapa">
                <div className="Titulo">
                    <h1>Informações Gerais de ensino</h1>
                </div>
                <div className="Dados">
                    <h3>1. Por que você não terminou o curso de graduação?</h3>
                    <input placeholder="Resposta"></input>
                    <h3>2. Você fez algum curso complementar?</h3>
                    <input placeholder="Resposta"></input>
                    <h3>3. Você fez algum curso complementar?</h3>
                    <select>
                        <option>Curso Técnico</option>
                        <option>Curso de Inglês</option>
                    </select>
                </div>
                <div className="Titulo">
                    
                </div>
        
            </div>
        </div>
    )
}

export default Etapa3