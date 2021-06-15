import React from 'react';
import config from '../config';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        // GET for users by email
        e.preventDefault();
        fetch(config.API_ENDPOINT + `/api/users/${this.state.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
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
            .catch(error => this.setState({ error }))

    }

    render() {
        return (
            <div className="login">
                <h3>Existing User? Log In!</h3>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="text" 
                            id="password" 
                            name="password" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <button type="submit">Log in</button>
                    </form>
            </div>    
        );
    }
}

export default withRouter(LoginForm);