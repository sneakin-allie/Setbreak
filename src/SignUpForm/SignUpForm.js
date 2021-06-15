import React from 'react';
import config from '../config';
import { withRouter } from 'react-router-dom';

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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, email, password } = e.target;
        const newUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }

        fetch(config.API_ENDPOINT + `/api/users`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(result => {
                this.props.onSignUp(result);
                this.props.history.push('/new')
            })
            .catch(error => this.setState({ error }))
    }

    render() {
        return (
            <div className="signup">
                <h3>New User? Sign Up Now!</h3>
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="first-name">First name:</label>
                        <input 
                            type="text" 
                            id="first-name" 
                            name="firstName" 
                            onChange={this.handleChange} 
                        />
                        <br />
                        <label htmlFor="last-name">Last name:</label>
                        <input 
                            type="text" 
                            id="last-name" 
                            name="lastName"
                            onChange={this.handleChange}
                        />
                        <br />
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
                        <button type="submit">Sign up</button>
                    </form>
            </div>    
        );
    }
}

export default withRouter(SignUpForm);