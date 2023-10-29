import React from 'react';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }


    handleChangeFirstName = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('Please enter')
    } 

    render() {
        console.log('>>> call render: ',this.state)
        return (
            <>
                <form>
                    <label>First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        onChange={(event)=> this.handleChangeFirstName(event)}
                    /><br/>
                    <label>Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                        onChange={(event)=> this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" value="Submit"
                    
                    onClick={(event) => this.handleSubmit(event)}
                    
                    />
                </form> 
            </>
        )
    }
}
export default MyComponent;