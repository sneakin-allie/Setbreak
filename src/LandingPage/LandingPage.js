import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from '../SignUpForm/SignUpForm';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="Landing-page">
                <h3>Keep track of concerts you've attended</h3>
                <p>Setbreak helps you keep track of concerts you've attended in one streamlined collection. Upload information about dates, artists, venues, highlights, and notes for each concert. All of your concerts in one collection!</p>
                <h3>Keep notes on memorable moments</h3>
                <p>Setbreak helps you remember the moments you never want to forget. Did the artist play your favorite song, make a funny joke, tell a story, or get creative with props? Keep notes of these moments and more!</p>
                <h3>Add new concerts and edit as you go</h3>
                <p>Setbreak allows you to add new concerts and edit and delete them as needed. Upload information about a concert halfway through the show, and then return to it later to add more details!</p>
                <br />
                <SignUpForm onSignUp={this.props.onSignUp}/>
                <br />
                <LoginForm onLogin={this.props.onLogin}/>
            </div>
        );
    }
}

export default LandingPage;