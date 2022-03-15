import axios from "axios";
import React from "react";

export default class Labenusers extends React.Component {
    state = {
        userValue: "",
        emailValue: ""
    }

onChangeUser = (event) => {
    this.setState({userValue: event.target.value})
}

onChangeEmail = (event) => {
    this.setState({emailValue: event.target.value})
}

createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.userValue,
        email: this.state.emailValue
    }
    const axiosConfig = {
        headers: {
            Authorization: "paulo-tarso-vaughan"
        }
    }
    axios.post(url, body, axiosConfig)
    .then((response) => {
        alert(`O usuário ${this.state.userValue} foi cadastrado com sucesso!`)
        this.setState({userValue: ""})
        this.setState({emailValue: ""})
    })
    .catch((error) => {
        alert("Error, não foi possivel cadastrar o usuario")
        console.log(error.response.data)
    })
}

    render() {
        return(
            <div>
                <br></br>
                <input onChange={this.onChangeUser} value={this.state.userValue} placeholder="Name"></input>
                <input onChange={this.onChangeEmail} value={this.state.emailValue} placeholder="Email"></input>
                <button onClick={this.createUser}>Send</button>
            </div>
        )
    }
}