import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from '../SignUpForm/SignUpForm';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <h3>Keep a collection of concerts you've attended</h3>
                <p>Setbreak helps you keep a record of concert's you've attended. Upload information about dates, artists, venues, songs, and notes. Keep all of your concert details in one place!</p>
                <p>Placeholder for screen shot</p>
                <br />
                <h3>Keep notes on memorable moments</h3>
                <p>Setbreak helps you keep track of the moments you never want to forget. Did the artist play your favorite song, make a funny joke, tell a story, or get creative with props? Keep notes of these moments and more!</p>
                <p>Placeholder for screen shot</p>
                <br />
                <h3>View your stats</h3>
                <p>Setbreak tracks and displays your concerts statistics. Keep tabs on how many times you've seen an artist, been to a venue, and more.</p>
                <p>Placeholder for screen shot</p>
                <br />
                <SignUpForm onSignUp={this.props.onSignUp}/>
                <br />
                <LoginForm />
            </div>
        );
    }
}

export default LandingPage;