import React from "react";
import SignUpPage from "./components/SignUpPage";
import Users from "./components/Users";
import styled from "styled-components";

const Formatacao = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 300px;
`

export default class App extends React.Component {
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render() {
    return (
      <Formatacao>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "signUp" ? <SignUpPage /> : <Users />}
      </Formatacao>
    );
  }
}