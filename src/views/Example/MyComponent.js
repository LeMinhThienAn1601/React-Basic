import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Thien An',
        age: '22'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Clickkk');
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

                <div className="third">
                    <button onClick={()=> this.handleClickButton()}>click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;