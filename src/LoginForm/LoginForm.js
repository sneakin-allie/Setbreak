import React from 'react';
import config from '../config';
import { withRouter } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMessage: null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = e.target;
        const existingUser = {
            email: email.value,
            password: password.value
        };

        if (existingUser.email.length === 0) {
            this.setState({
                errorMessage: "Email is required"
            })
        } else if (existingUser.password.length === 0) {
            this.setState({
                errorMessage: "Password is required"
            })
        } else {

            fetch(config.API_BASE_URL + `/api/users`, {
                method: 'POST',
                body: JSON.stringify( existingUser ),
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then((result) => {
                    this.props.onLogin(result)
                    this.props.history.push("/list")
                })
                .catch(error => this.setState({ errorMessage: "Invalid credentials" }))

        }
        
    }

    render() {
        return (
            <div className="Login">
                    <h3>Existing User? Log In!</h3>
                    <form className="Login-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:*</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="password">Password:*</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            onChange={this.handleChange}
                        />
                        <p><i>*All fields required</i></p>
                        <div className='error-message'>{this.state.errorMessage}</div>
                        <button type="submit">Log In</button>
                    </form>
            </div>    
        );
    }
}

export default withRouter(LoginForm);