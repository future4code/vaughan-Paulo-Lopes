import React from "react";
import styled from "styled-components";
import Labenusers from "./Labenusers"
import UserScreen from "./UserScreen"

const ButtonSwitch = styled.div `
    margin-left: 20px;
    height: 100%;
    font-size: 20px;   
    border-radius: 5px ;
    width: 30%;
    height: 110%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        transition: 0.5s;

    }
`

const ButtonBox = styled.div `
    display: flex;
    margin: 10px;
    margin-right: 30px;
    width: 100%;
    justify-content: center;
`

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    flex-direction: column;
    height: 70vh;
    width: 30vw;
    margin-left: 35%;
    margin-top: 7.3%;
    border-radius: 10px;
`

export default class Login extends React.Component {
    state = {
        section: "register"
    }

screenRender = () => {
        switch (this.state.section) {
            case "userDetail":
                return(
                    <UserScreen></UserScreen>
                )
            case "register":
                return(
                    <Labenusers></Labenusers>
                )
        }
}

registerScreen = () => {
    this.setState({section: "register"})
}

userDetailScreen = () => {
    this.setState({section: "userDetail"})
}

    render() {
        return(

            <div>
                <Container>
                <h1>Register</h1>
                {this.screenRender()}
                <ButtonBox>
                    <ButtonSwitch onClick={this.registerScreen}>Register</ButtonSwitch>
                    <ButtonSwitch onClick={this.userDetailScreen}>User Detail</ButtonSwitch>
                </ButtonBox>
            </Container>
            </div>
        )
    }
}