import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        arrJob: [
            { id: 'Job1', title: 'Dev', salary: '500'},
            { id: 'Job2', title: 'Tester', salary: '400'},
            { id: 'Job3', title: 'Project Manager', salary: '1500'}
        ]
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

                <ChildComponent 
                name={this.state.firstName}
                age={'22'}
                address={'HCM'}
                arrJob={this.state.arrJob}
                />
                
            </>
        )
    }
}

export default MyComponent;