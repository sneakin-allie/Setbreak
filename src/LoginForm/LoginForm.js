import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
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

    // onLogin needs to be in app and passed down
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLogin(this.state)
    }

    render() {
        return (
            <div className="login">
                <h3>Existing User? Log In!</h3>
                    <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
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
                        <button type="submit">Log in</button>
                    </form>
            </div>    
        );
    }
}

export default LoginForm;