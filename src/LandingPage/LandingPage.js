import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from '../SignUpForm/SignUpForm';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <h3>Keep track concerts you've attended</h3>
                <p>Setbreak helps you keep track of concerts you've attended in one streamlined collection. Upload information about dates, artists, venues, songs, and notes for each concert. All of your concerts in one collection!</p>
                <br />
                <h3>Keep notes on memorable moments</h3>
                <p>Setbreak helps you remember the moments you never want to forget. Did the artist play your favorite song, make a funny joke, tell a story, or get creative with props? Keep notes of these moments and more!</p>
                <br />
                <h3>Add new concerts and edit concerts as you go</h3>
                <p>Setbreak allows you to add new concerts and edit and delete them as needed. Upload information about a concert halfway through the show, and then return to it later to add more details!</p>
                <SignUpForm onSignUp={this.props.onSignUp}/>
                <br />
                <LoginForm onLogin={this.props.onLogin}/>
            </div>
        );
    }
}

export default LandingPage;