import React, {Component} from "react";

class Welcome extends Component {
    // render() {
    //     return <h1> Hello Programming!</h1>
    // }
    render() {  
        return (
            <h1> Welcome {this.props.name}</h1>
        )
    }
}

export default Welcome