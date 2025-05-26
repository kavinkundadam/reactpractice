import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      this.clickHandler = this.clickHandler.bind(this) // Binding in the class constructor
    }

    clickHandler() {
        this.setState({
            message: "Manudheeran"
        })
        // console.log("Manudheeran") // Manudheeran in console tab..!
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: "Manudheeran"
    //     })
    // }

    render() {
        return (
        <div>
            <div>
                {this.state.message}
            </div>
            <button onClick={this.clickHandler}>
                Click
            </button>
            {/* <button onClick={this.clickHandler.bind(this)}>
                Click
            </button> */}
            {/* <button onClick={() => this.clickHandler()}>
                Click
            </button> */}
        </div>
        )
    }
}

export default EventBind