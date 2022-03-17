import axios from "axios";
import React from "react";
import styled from "styled-components";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  justify-content: space-around;
  margin-top: -20px;
`;

const InputLogin = styled.input`
  height: 12%;
  outline: none;
  border: 1px solid black;
  font-size: 15px;
  border-top: none;
  border-right: none;
  border-left: none;
`

const ButtonLogin = styled.button `
    height: 11%;
    background-color: white;
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s ease-in-out;

    &:hover { 
        background-color: black;
        font-size: 20px;
        transition: 0.2s ease-in-out;
        color: white;
    }
`

export default class Labenusers extends React.Component {
  state = {
    userValue: "",
    emailValue: "",
  };

  onChangeUser = (event) => {
    this.setState({ userValue: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.userValue,
      email: this.state.emailValue,
    };
    const axiosConfig = {
      headers: {
        Authorization: "paulo-tarso-vaughan",
      },
    };
    axios
      .post(url, body, axiosConfig)
      .then((response) => {
        alert(`O usuário ${this.state.userValue} foi cadastrado com sucesso!`);
        this.setState({ userValue: "" });
        this.setState({ emailValue: "" });
      })
      .catch((error) => {
        alert("Error, não foi possivel cadastrar o usuario");
        console.log(error.response.data);
      });
  };

  render() {
    return (
      <LoginBox>
        <InputLogin
          onChange={this.onChangeUser}
          value={this.state.userValue}
          placeholder="Name"
        ></InputLogin>
        <InputLogin
          onChange={this.onChangeEmail}
          value={this.state.emailValue}
          placeholder="E-mail"
        ></InputLogin>
        <ButtonLogin onClick={this.createUser}>Sign Up</ButtonLogin>
      </LoginBox>
    );
  }
}
