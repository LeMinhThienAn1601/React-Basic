import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: "",
        lastName: ""
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>>Check: ", this.state)
    }
    
    render() {
        
        return (
            <>
                <form>
                    <label htmlFor="fname">First Name: </label><br/>
                    <input type="text" value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}/>
                    <br/>
                    <label htmlFor="lname">Last Name: </label><br/>
                    <input type={"text"} value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}/>
                    <br/>
                    <input type={"submit"} value={"Submit"}
                    onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default MyComponent;