import React from "react";

class MyComponent extends React.Component {

    state = {
        // name: 'Thien An',
        // age: '22'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
            
                <div className="second">
                    My age: {this.state.age}
                </div>
            </>
        )
    }
}

export default MyComponent;