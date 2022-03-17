import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div `
    display: grid;
    grid-template-rows: 5rem 10rem 7rem;
`
const Container2 = styled.div `
    display: flex;
`

const UserCard = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    margin: 5px;
    width: 120%;
    border-top: none;
    border-right: none;
    border-left: none;
`

const InputLogin = styled.input`
  height: 12%;
  outline: none;
  border: 1px solid black;
  font-size: 15px;
  border-top: none;
  border-right: none;
  border-left: none;
`

const ButtonSearch = styled.button `
    border: 1px solid black;
    background-color: white;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    cursor: pointer;
`


export default class UserScreen extends React.Component {
    state ={
        users: [],
}

getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const axiosConfig = {
        headers:
            {Authorization: "paulo-tarso-vaughan"}
    }
    axios.get(url, axiosConfig)
    .then((response) =>{
        this.setState({users: response.data})
    })
    .catch((error) => {
        console.log(error.response)
    })
}

componentDidMount() {
    this.getAllUsers()
}


deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const axiosConfig = {
        headers: { Authorization: "paulo-tarso-vaughan"}
    }
    axios.delete(url, axiosConfig)
    .then((res) => {
        alert("Usuario deletado com sucesso!")
        this.getAllUsers()
    })
    .catch((error) => {
        alert("Erro, não foi possivel excluir o usuario")
    })
}

searchUser = () => {
    const axiosConfig = {
        headers:
            {Authorization: "paulo-tarso-vaughan"}
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=`, axiosConfig)
    .then(response => {
        this.setState({users: response.data})
    })
    .catch(error => {
        alert("Erro to search User")
        console.log(error)
    })
}

onChangeName = (event) => {
    this.setState({name: event.target.value})
}

    render() {
    
        

        return(
            <div>
                <Container>
                    <br></br>
                    
                    <div>
                        <ul>
                            <InputLogin onChange={this.onChangeName} value={this.state.name} placeholder="Search"></InputLogin>
                            <ButtonSearch onClick={this.searchUser}>Search</ButtonSearch>
                            {this.state.users.length === 0 && <div>Nenhum usuário encontrado</div>}
                            {this.state.users.map(user => {
                                return(
                                    <Container2>
                                        <UserCard key={user.id}>
                                        <p>{user.name}</p>
                                        <button onClick={() => this.deleteUser(user.id)}>X</button>
                                    </UserCard>
                                    </Container2>
                                )
                            })}
                        </ul>
                    </div>
                </Container>
            </div>
        )
    }
}