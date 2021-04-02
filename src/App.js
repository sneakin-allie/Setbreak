import React from 'react';
import { Route } from 'react-router-dom';
import ConcertList from './ConcertList/ConcertList';
import LandingPage from './LandingPage/LandingPage';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AddConcertForm from './AddConcertForm/AddConcertForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts: [],
      userInfo: {}
    }
  }

  /*
  componentDidMount() {
    API call will go here
  }
  */

  handleSignUp = (user) => {
    const currentUser = this.state.userInfo;
    this.setState({
      concerts: this.state.concerts,
      userInfo: currentUser.create(user)
    })
  }

  handleAddConcert = (concert) => {
    const currentConcerts = this.state.concerts;
    this.setState({
        concerts: currentConcerts.concat(concert),
        userInfo: this.state.userInfo
    })
  }
  // need to redirect to collection after adding, or at least give confirmation

  // this needs to be fixed
  handleDeleteConcert = (concert) => {
    const updatedConcerts = this.state.concerts.filter(item => item !== concert);
    this.setState({
        concerts: updatedConcerts,
        userInfo: this.state.userInfo
    })
  }

  // need to handleEditConcert and redirect to form

  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Route 
            exact path="/" 
            component={(routeProps) => 
              <LandingPage 
                {...routeProps} 
                userInfo={this.state.userInfo}
                onSignUp={this.handleSignUp}
              />
            } 
          />
          <Route 
            path="/new" 
            render={(routeProps) => 
              <AddConcertForm 
                {...routeProps}
                onAddConcert={this.handleAddConcert}
              />
            } 
          />
          <Route
            path="/list"
            render={(routeProps) => 
              <ConcertList 
                {...routeProps} 
                concerts={this.state.concerts} 
                onDeleteConcert={this.handleDeleteConcert}
                // onEditConcert={this.handleEditConcert}
              />
            } 
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;