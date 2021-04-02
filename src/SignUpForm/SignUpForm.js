import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    handleFirstName = (e) => {
        const newFirstName = e.target.value;
        this.setState({
            firstName: newFirstName
        })
    }

    handleLastName = (e) => {
        const newLastName = e.target.value;
        this.setState({
            lastName: newLastName
        })
    }

    handleEmail = (e) => {
        const newEmail = e.target.value;
        this.setState({
            email: newEmail
        })
    }

    handlePassword = (e) => {
        const newPassword = e.target.value;
        this.setState({
            password: newPassword
        })
    }

    handleSubmitSignUp = (e) => {
        e.preventDefault();
        this.props.onSignUp(this.state)
    }

    render() {
        return (
            <div className="signup">
                <h3>Sign up now</h3>
                    <form className="signup-form" onSubmit={(e) => this.handleSubmitSignUp(e)}>
                        <label htmlFor="first-name">First name:</label>
                        <input 
                            type="text" 
                            id="first-name" 
                            name="first-name" 
                            onChange={(e) => this.handleFirstName(e)} 
                        />
                        <br />
                        <label htmlFor="last-name">Last name:</label>
                        <input 
                            type="text" 
                            id="last-name" 
                            name="last-name"
                            onChange={(e) => this.handleLastName(e)}
                        />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            onChange={(e) => this.handleEmail(e)}
                        />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="text" 
                            id="password" 
                            name="password" 
                            onChange={(e) => this.handlePassword(e)}
                        />
                        <br />
                        <button type="submit">Sign up</button>
                    </form>
            </div>    
        );
    }
}

export default SignUpForm;