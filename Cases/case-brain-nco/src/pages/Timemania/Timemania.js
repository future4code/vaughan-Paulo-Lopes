import { Container, RightSide, LeftSide, Numbers, DateInfo, LogoType, MiniBox, SelectLote } from "./styled";
import FormControl from "@mui/material/FormControl";
import { BASE_URL } from "../../Constants/Baseurl";
import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MegaSena() {
  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState();
  const [jogo, setJogo] = useState("");
  const navigate = useNavigate()

  const getLoterias = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setLoterias(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Erro tente novamente");
      });
  };

  const getConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("erro carai");
      });
  };

  const mapeiaLoterias =
    loterias &&
    loterias.map((list) => {
      return list.nome;
    });


  const mapeiaConcursos = concursos && concursos.map((list) => {
     return list.concursoId
    });

  const pegaData = new Date();
  const ano = pegaData.getFullYear();
  const mes = pegaData.getMonth();
  const day = pegaData.getDay();

  const dataAtual = `${day}/${mes}/${ano}`;

  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99,
    100,
  ];

  const numero = numbers[Math.floor(Math.random() * numbers.length)];
  const numero2 = numbers[Math.floor(Math.random() * numbers.length)];
  const numero3 = numbers[Math.floor(Math.random() * numbers.length)];
  const numero4 = numbers[Math.floor(Math.random() * numbers.length)];
  const numero5 = numbers[Math.floor(Math.random() * numbers.length)];
  const numero6 = numbers[Math.floor(Math.random() * numbers.length)];

  const onChangeJogo = (ev) => {
    setJogo(ev.target.value);
  };

  const teste = () => {
    if (jogo === "MegaSena") {
      return mapeiaConcursos[0]
    } else if (jogo === "Quina") {
      return mapeiaConcursos[1];
    } else if (jogo === "Lotofácil") {
      return mapeiaConcursos[2];
    } else if (jogo === "Lotomania") {
      return mapeiaConcursos[3];
    } else if (jogo === "Timemania") {
      return mapeiaConcursos[4];
    } else if (jogo === "DiaDeSorte") {
      return mapeiaConcursos[5];
    }
  };

  useEffect(() => {
    getLoterias();
    getConcursos();
    teste();
  }, []);

  console.log(jogo);

  return (
    <Container>
      <RightSide>
        <MiniBox>
          <FormControl sx={{ m: 1, maxWidth: 150, backgroundColor: "white", border: "none"  }}>
          <SelectLote
            labelId="demo-simple-select-helper-label"
            onChange={onChangeJogo}
          >
            <MenuItem onClick={() => {navigate("/")}} value="MegaSena">{mapeiaLoterias[0]}</MenuItem>
            <MenuItem onClick={() => {navigate("/Quina")}} value="Quina">{mapeiaLoterias[1]}</MenuItem>
            <MenuItem onClick={() => {navigate("/Lotofacil")}} value="Lotofácil">{mapeiaLoterias[2]}</MenuItem>
            <MenuItem onClick={() => {navigate("/Lotomania")}} value="Lotomania">{mapeiaLoterias[3]}</MenuItem>
            <MenuItem onClick={() => {navigate("/Timemania")}} value="Timemania">{mapeiaLoterias[4]}</MenuItem>
            <MenuItem onClick={() => {navigate("/diadesorte")}} value="DiaDeSorte">{mapeiaLoterias[5]}</MenuItem>
          </SelectLote>
        </FormControl>
        </MiniBox>
        
        <LogoType>
          <img src="https://cdn-icons-png.flaticon.com/512/4010/4010297.png"></img>
          <h1>TIMEMANIA</h1>
        </LogoType>
        
        
        <DateInfo>
          <h4>Concurso: <p>{teste()} - {dataAtual}</p></h4>    
        </DateInfo>  
    </RightSide>
      
    <LeftSide>
      <Numbers>
        <div>{numero}</div>
        <div>{numero2}</div>
        <div>{numero3}</div>
        <div>{numero4}</div>
        <div>{numero5}</div>
        <div>{numero6}</div>
      </Numbers>
    </LeftSide>
      
    </Container>
  );
}
