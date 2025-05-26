import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true,
        // isLoggedIn: false
      }
    }
    
    render() {

        // 4-th -> Short-circuit operator
        return this.state.isLoggedIn && <div> Welcome Manudheeran</div> 

        // 3-rd Approch -> Ternary operator
        return(
            this.state.isLoggedIn ?
            <div> Welcome Manudheeran</div>:
            <div> Welcome Guest</div>
        )

        // 2-nd Approach -> If-Else with variable
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div> Welcome Manudheeran</div>
        // } else {
        //     message = <div> Welcome guest</div>
        // }

        // return <div> {message}</div>

        // 1-st approach
        // if (this.state.isLoggedIn){
        //     return (
        //         <div> Welcome Manudheeran</div>
        //     )
        // } else {
        //     return (
        //         <div> Welcome Guest</div>
        //     )
        // }
        // return (
        // <div>
        //     <div> Welcome Manudheeran</div>
        //     <div> Welcome Guest</div>
        // </div>
        // )
    }
}

export default UserGreeting