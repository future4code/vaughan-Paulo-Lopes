import React from "react";
import Labenusers from "./Labenusers"
import UserScreen from "./UserScreen"

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
                <button onClick={this.registerScreen}>Register</button>
                <button onClick={this.userDetailScreen}>User Detail</button>

                {this.screenRender()}
            </div>
        )
    }
}