import React from "react";
import { useState } from "react";
import axios from "axios";

export default class UserScreen extends React.Component {
    state ={
        users: [],
        userId: "",
        name: ""
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


deleteUser = (userID) => {
    const axiosConfig = {
        headers:
            {Authorization: "paulo-tarso-vaughan"}
    }
    if(window.confirm("You really want to delete this user?")) {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}`, axiosConfig)
        .then(() => {
            alert("User successfully deleted")
            
        })
        .catch((error) => {
            alert("Error deleting user")
            console.log(error.response)
        })
    }
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
                <br></br>
                <br></br>
                <input onChange={this.onChangeName} value={this.state.name} placeholder="Search"></input>
                <button onClick={this.searchUser}>Search</button>

                <div>
                    <ul>
                        {this.state.users.length === 0 && <div>Carregando...</div>}
                        {this.state.users.map(user => {
                            return(
                                <li>
                                    <p>{user.name}</p>
                                    <button onClick={this.deleteUser}>X</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}